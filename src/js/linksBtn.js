document.addEventListener('DOMContentLoaded',()=>{
    const header = document.getElementById('header');
    const btnTopSite = document.getElementById('btn-top');

    const services = document.getElementById('services');
    const servicesMenu = document.getElementById('services-menu');
    const btnServices = document.getElementById('btn-services');

    btnTopSite.addEventListener('click',()=>{
        header.scrollIntoView({behavior:'smooth'});
    });

    btnServices.addEventListener('click',()=>{
        services.scrollIntoView({behavior:'smooth'});
    });

    servicesMenu.addEventListener('click',()=>{
        services.scrollIntoView({behavior:'smooth'});
    });
});