console.log("JS is connected! 🚀");
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const lightIcon = document.querySelector('.light-icon');
const darkIcon = document.querySelector('.dark-icon');

// Function to update the UI icons based on the current theme
function updateIcons(isDark) {
    if (isDark) {
        lightIcon.style.display = 'none';
        darkIcon.style.display = 'inline';
    } else {
        lightIcon.style.display = 'inline';
        darkIcon.style.display = 'none';
    }
}

// Function to apply the theme
function setTheme(isDark) {
    if (isDark) {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    }
    updateIcons(isDark);
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        setTheme(true);
    } else {
        // Check system preference if no local storage setting exists
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme(true);
        } else {
            setTheme(false);
        }
    }
}