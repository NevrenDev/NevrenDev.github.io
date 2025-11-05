function theme() {
    const html = document.documentElement;
    const btn = document.getElementById("themeToggle");
    if (html.getAttribute('data-theme') === 'dark') {
        html.removeAttribute('data-theme');
        btn.textContent = 'Theme: Light';
    } else {
        html.setAttribute('data-theme', 'dark');
        btn.textContent = 'Theme: Dark';
    }
}

function go(target) {
    window.location = target;
}