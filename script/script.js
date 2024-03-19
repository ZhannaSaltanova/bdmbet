document.getElementById('toggleButton').addEventListener('click', function() {
    var burgerMenu = document.querySelector('.burgermenu');
    var menu = document.querySelector('.menu');

    burgerMenu.classList.toggle('open');
    
    if (menu.style.display === "none") {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
});