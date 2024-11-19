const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
const body = document.body;

const darkModePreference = localStorage.getItem('darkMode');
if (darkModePreference === 'enabled') {
    body.classList.add('dark-mode');
    toggleDarkModeButton.textContent = '☀️ Modo Claro';
}

toggleDarkModeButton.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        toggleDarkModeButton.textContent = '🌙 Modo Oscuro';
        localStorage.setItem('darkMode', 'disabled');
    } else {
        body.classList.add('dark-mode');
        toggleDarkModeButton.textContent = '☀️ Modo Claro';
        localStorage.setItem('darkMode', 'enabled');
    }
});
