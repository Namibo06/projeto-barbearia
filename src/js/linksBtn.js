document.addEventListener('DOMContentLoaded',()=>{
    const header = document.getElementById('header');
    const btnTopSite = document.getElementById('btn-top');

    const services = document.getElementById('services');
    const servicesMenu = document.getElementById('services-menu');
    const btnServices = document.getElementById('btn-services');

    const localization = document.getElementById('localization');
    const localizationMenu = document.getElementById('localization-menu');
    const btnLocalization = document.getElementById('btn-localization');

    const employees = document.getElementById('employees');
    const employeesMenu = document.getElementById('employees-menu');
    const btnEmployees = document.getElementById('btn-employees');

    const forms = document.getElementById('forms');
    const bookNow = document.getElementById("book-now");

    btnTopSite.addEventListener('click',()=>{
        header.scrollIntoView({behavior:'smooth'});
    });

    btnServices.addEventListener('click',()=>{
        services.scrollIntoView({behavior:'smooth'});
    });

    servicesMenu.addEventListener('click',()=>{
        services.scrollIntoView({behavior:'smooth'});
    });

    localizationMenu.addEventListener('click',()=>{
        localization.scrollIntoView({behavior:'smooth'});
    });

    btnLocalization.addEventListener('click',()=>{
        localization.scrollIntoView({behavior:'smooth'});
    });

    employeesMenu.addEventListener('click',()=>{
        employees.scrollIntoView({behavior:'smooth'});
    });

    btnEmployees.addEventListener('click',()=>{
        employees.scrollIntoView({behavior:'smooth'});
    });

    bookNow.addEventListener('click',()=>{
        forms.scrollIntoView({behavior:'smooth'});
    });
});