document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('#menu-primary .has-children > a');

    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const submenu = this.nextElementSibling;
            submenu.classList.toggle('open');
        });
    });
});
