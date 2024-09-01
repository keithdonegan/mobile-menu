document.addEventListener('DOMContentLoaded', function() {
    
    const menuItemsWithChildren = document.querySelectorAll('#menu-primary .has-children');

    const primaryNav = document.getElementById('nav-primary');
    const hamburger = document.getElementById('hamburger');

    hamburger.addEventListener('click', function(event) {
        hamburger.classList.toggle('is-active');
        primaryNav.classList.toggle('is-open');
    });

    menuItemsWithChildren.forEach(parentLi => {

        parentLi.addEventListener('click', function(event) {
            parentLi.classList.toggle('is-open');
        });

        /* parentLi.addEventListener('mouseenter', function(event) {
            console.log('clicky');
            parentLi.classList.add('is-open');
        });
        parentLi.addEventListener('mouseleave', function(event) {
            parentLi.classList.remove('is-active');
        }); */

            
    });
    
});