document.addEventListener('DOMContentLoaded',()=>{
    const menu = document.getElementById('menu');
    const openMenu = document.getElementById('open-menu');
    const closeMenu = document.getElementById('close-menu');

    openMenu.addEventListener('click',()=>{
        menu.style.display="flex";
    });

    closeMenu.addEventListener('click',()=>{
        menu.style.display="none";
    });
});