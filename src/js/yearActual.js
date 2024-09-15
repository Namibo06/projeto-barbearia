document.addEventListener('DOMContentLoaded', () => {
    const currentYear = document.getElementById('currentYear');
    const dateNow = new Date();
    const yearActual = dateNow.getFullYear();
    currentYear.textContent = yearActual;
});