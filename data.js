async function loadData() {
    try {
        const response = await fetch('data.json'); // Pobiera dane z pliku JSON
        const data = await response.json();
        
        if (typeof data.skills === 'object' && !Array.isArray(data.skills)) {
            updateSkills(data.skills);
        }
        
        if (typeof data.updates === 'object' && !Array.isArray(data.updates)) {
            updateUpdates(Object.values(data.updates));
        }

        if (typeof data.projects === 'object' && !Array.isArray(data.projects)) {
            updateProjects(Object.values(data.projects));
        }
    } catch (error) {
        console.error("Błąd wczytywania danych", error);
    }
}

function updateSkills(skills) {
    const skillsContainer = document.getElementById("skills");
    if (!skillsContainer) return;

    skillsContainer.innerHTML = '';

    const l = document.createElement('legend');
    l.innerText = "My Skills";
    skillsContainer.appendChild(l);
    
    for (const [skill, value] of Object.entries(skills)) {
        const li = document.createElement('li');
        li.innerHTML = '<label for="'+skill+'">'+skill+'</label>\n<progress id="'+skill+'" max="100" value="'+value+'">'+value+'%</progress>';
        skillsContainer.appendChild(li);
    }
}

function updateUpdates(updates) {
    const updatesContainer = document.getElementById("wupdates");
    if (!updatesContainer) return;

    updatesContainer.innerHTML = '';

    for (const [id, update] of Object.entries(updates)) {

        const fieldset = document.createElement('fieldset');

        const legend = document.createElement('legend');
        legend.innerText = update.name;
        fieldset.appendChild(legend);

        const date = document.createElement('p');
        date.innerText = update.date;
        fieldset.appendChild(date);

        if (Array.isArray(update.adds)) {
            update.adds.forEach(add => {
                const li = document.createElement('li');
                li.innerText = add;
                fieldset.appendChild(li);
            });
        }

        updatesContainer.appendChild(fieldset);
    }
}

function updateProjects(projects) {
    const projectsContainer = document.getElementById('gamesinfo');
    if (!projectsContainer) return;

    projectsContainer.innerHTML = '';

    for (const [id, project] of Object.entries(projects)) {
        const fieldset = document.createElement('fieldset');

        const legend = document.createElement('legend');
        if (project.type == "binary") legend.innerHTML = '<i class="fa-solid fa-square-binary"></i> '+project.name;
        else if (project.type == "webnovel") legend.innerHTML = '<i class="fa-solid fa-book-open"></i> '+project.name;
        fieldset.appendChild(legend)

        const desc = document.createElement('p');
        desc.innerText = project.desc;
        fieldset.appendChild(desc);

        const button = document.createElement('button');
        button.innerText = "Project's Page";
        button.onclick = () => gamePage(project.id);
        fieldset.appendChild(button)

        projectsContainer.appendChild(fieldset);
    }
}

document.addEventListener('DOMContentLoaded', loadData);