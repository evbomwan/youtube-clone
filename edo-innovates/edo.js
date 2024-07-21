document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu');
    const link = document.getElementById('link');

    menuBtn.addEventListener('click', () =>{
        menuBtn.classList.toggle('open');
        link.classList.toggle('open');
    })
})