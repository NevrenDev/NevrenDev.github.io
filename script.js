function theme() {
    const html = document.documentElement;
    const btn = document.getElementById("themeToggle");
    if (html.getAttribute('data-theme') === 'dark') {
        html.removeAttribute('data-theme');
        document.body.removeAttribute('data-theme')
        btn.textContent = 'Theme: Light';
        localStorage.theme = 'light';
    } else {
        html.setAttribute('data-theme', 'dark');
        document.body.setAttribute('data-theme', 'dark')
        btn.textContent = 'Theme: Dark';
        localStorage.theme = 'dark';
    }
}

function go(target) {
    if (target.startsWith('https://')) {
        window.open(target, "_blank");
    } else {
        window.open(target, '_self');
    }
}

function load_theme() {
    them = localStorage.theme;
    const html = document.documentElement;
    const btn = document.getElementById("themeToggle");

    if (!localStorage.theme) localStorage.theme = 'light';

    if (them == 'dark') {
        html.setAttribute('data-theme', 'dark');
        document.body.setAttribute('data-theme', 'dark')
        btn.textContent = 'Theme: Dark';
    }
}

document.addEventListener('DOMContentLoaded', load_theme())