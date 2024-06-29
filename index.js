document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector('header');
    const logo = document.querySelector('.logo');
    const links = document.querySelectorAll('nav a');
    const main = document.querySelector('main');

    main.addEventListener('mouseenter', function () {
        navbar.classList.add('navChange');
        logo.classList.add('logoChange');
        links.forEach(link => link.classList.add('linkChange')); 
        
    });

    main.addEventListener('mouseleave', function () {
        navbar.classList.remove('navChange');
        logo.classList.remove('logoChange');
        links.forEach(link => link.classList.remove('linkChange')); 

    });
});
