const ch0 = document.getElementById('ch0');
const ch1 = document.getElementById('ch1')

function selectChapter(chapter) {
    fetch(chapter+".txt")
        .then((res) => res.text())
        .then((text) => {
            if (chapter != "prolouge") {
                field.innerHTML = "<h3>Sorry. That chapter isn't available here right now</h3>";
                return;
            }
            if (chapter == "prolouge") {
                ch0.innerHTML = text;
                ch0.classList.add('loaded')
            }

        })
        .catch((e) => {
            if (chapter == "prolouge") {
                ch0.innerHTML = "<h3>Something went wrong with loading</h3>";
            }
            else if (chapter == 'chapte1') {
                ch1.innerHTML = "<h3>WiP - Writing in Progress</h3>"
            }
        }) 
}