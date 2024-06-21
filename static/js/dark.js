// dark.js
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.sidebar').classList.toggle('dark-mode');
    document.querySelectorAll('.menu-btn').forEach(btn => btn.classList.toggle('dark-mode'));
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.removeItem('dark-mode');
    }
}
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
    document.querySelector('.sidebar').classList.add('dark-mode');
    document.querySelectorAll('.menu-btn').forEach(btn => btn.classList.add('dark-mode'));
}