// document.getElementById('toggleButton').addEventListener('click', function() {
//     var burgerMenu = document.querySelector('.burgermenu');
//     var menu = document.querySelector('.menu');

//     burgerMenu.classList.toggle('open');
    
//     if (menu.style.display === "none" ) {
//         menu.style.display = "flex";
//     } else {
//         menu.style.display = "none";
//     }
// });


document.getElementById('toggleButton').addEventListener('click', function() {
    var burgerMenu = document.querySelector('.burgermenu');
    var menu = document.querySelector('.menu');

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

// Дополнительно можно добавить обработчик события resize, чтобы учитывать изменение размера окна
window.addEventListener('resize', function() {
    var menu = document.querySelector('.menu');
    if (window.innerWidth < 1280) {
        menu.style.display = "none";
    }
});
