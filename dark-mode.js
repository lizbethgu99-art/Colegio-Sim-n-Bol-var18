function updateThemeButton() {
    const btn = document.querySelector('.dark-btn');
    if (!btn) return;
    btn.textContent = document.body.classList.contains('dark') ? 'Modo Claro' : 'Modo Oscuro';
}

function toggleTheme() {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('simongram-theme', isDark ? 'dark' : 'light');
    updateThemeButton();
}

function modoOscuro() {
    toggleTheme();
}

function applyStoredTheme() {
    const theme = localStorage.getItem('simongram-theme');
    if (theme === 'dark') {
        document.body.classList.add('dark');
    }
    updateThemeButton();
}

window.addEventListener('DOMContentLoaded', applyStoredTheme);
