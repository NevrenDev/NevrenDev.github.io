function selectChapter(chapter) {
    fetch(chapter+".txt")
        .then((res) => res.text())
        .then((text) => {
            const field = document.getElementById('read');
            if (chapter != "prolouge") {
                field.innerHTML = "<h3>Sorry. That chapter isn't available here right now</h3>";
                return;
            }
            field.innerHTML = text;

        })
        .catch((e) => {
            document.getElementById('read').innerHTML = "<h3>Sorry. That chapter isn't available here right now</h3>";
        }) 
}

function changeTheme() {
    const novel = document.getElementById('read');
    let theme = novel.className;
    
    if (theme == "default") {
        novel.classList.remove('default');
        novel.classList.add('light');

        localStorage.theme = "default";
    } else {
        novel.classList.add('default');
        novel.classList.remove('light');

        localStorage.theme = "light";
    }
}

function loadTheme() {
    const theme = localStorage.theme;
    const novel = document.getElementById('read');

    if (!localStorage.theme) localStorage.theme = "default";

    if (theme == "default") {
        novel.classList.remove('default');
        novel.classList.add('light');

        localStorage.theme = "default";
    } else {
        novel.classList.add('default');
        novel.classList.remove('light');

        localStorage.theme = "light";
    }
}

document.addEventListener('DOMContentLoaded', loadTheme())
