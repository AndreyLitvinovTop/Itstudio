// Header
let header = document.getElementById('header');
let navbar_a = document.getElementById('navbar-a');

// Main content scroll effects
let main_detitle = document.querySelector('.main-detitle');
let main_text = document.querySelector('.main-text');
let main_button = document.querySelector('.main-button');

// Standarts
let standarts = document.getElementById('standarts');
let highstandards = document.querySelector('.highstandards');
let standarts_image = document.querySelector('.standarts-image');
let aboutus = document.querySelector('.aboutus');

window.addEventListener('scroll', function(){
    // Header
    if (window.scrollY == 0){
        header.style.backgroundColor = "transparent";
        header.style.borderBottom = "1px solid #A1A1A1";
        header.style.zIndex = "0";
    }
    else if (window.scrollY >= 100){
        header.style.position = "fixed";
        header.style.backgroundColor = "#4985FF";
        header.style.borderBottom = "none";
        header.style.zIndex = "1";
    }

    // Main
    if (window.scrollY >= 0){
        main_detitle.classList.add('scroll');
        main_text.classList.add('scroll');
        main_button.classList.add('scroll');
    }

    if (window.scrollY >= standarts.getBoundingClientRect().top){
        highstandards.classList.add('scroll');
        standarts_image.classList.add('scroll');
        aboutus.classList.add('scroll');
    }
});
