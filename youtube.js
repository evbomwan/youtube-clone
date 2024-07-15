let menuBtn = document.getElementById('menu');
let sideNav = document.getElementById('sideNav');
let mainVideo = document.getElementById('mainVideo')
menuBtn.addEventListener('click', function() {
    if (window.innerWidth <= 1024) {
        if (sideNav.style.marginLeft === '-250px' || sideNav.style.marginLeft === ''){
            sideNav.style.marginLeft = '0px';
        }
        else {
            sideNav.style.marginLeft = '-250px';
        }
    } 
} )