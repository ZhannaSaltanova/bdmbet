


document.getElementById('toggleButton').addEventListener('click', function() {
    let burgerMenu = document.querySelector('.burgermenu');
    let menu = document.querySelector('.menu');

    burgerMenu.classList.toggle('open');
    
    if (window.innerWidth >= 1280) {
        if (menu.style.display === "none") {
            menu.style.display = "flex";
        } else {
            menu.style.display = "none";
        }
    } else {
        menu.style.display = "none";
    }
});


window.addEventListener('resize', function() {
    let menu = document.querySelector('.menu');
    if (window.innerWidth < 1280) {
        menu.style.display = "none";
    }
});
