document.addEventListener('DOMContentLoaded', function() {
    const menuItemsWithChildren = document.querySelectorAll('#menu-primary .has-children');

    if (window.matchMedia('(hover: hover)').matches) {

        

        menuItemsWithChildren.forEach(item => {
            item.addEventListener('mouseenter', function(event) {

                console.log('clicky');

                item.classList.add('is-active');
            });

            item.addEventListener('mouseleave', function(event) {
                item.classList.remove('is-active');
            });

            /* item.addEventListener('click', function(event) {
                item.classList.toggle('clicked');
            }); */
        });
    }
});