// mobile-menu js
const menuopen = document.querySelector('.hamburger');
const menuclose = document.querySelector('.collaps-btn');
const mobilemenu = document.querySelector('.menu');
const navhide = document.querySelector('nav');

menuopen.addEventListener("click", function () {
    mobilemenu.classList.add('active');
    navhide.classList.add('hide-nav');
});

menuclose.addEventListener('click', function () {
    mobilemenu.classList.remove('active');
    navhide.classList.remove('hide-nav');

});


// large-scree js
const bgshow = document.querySelectorAll('.nav-links');

const home = bgshow[0];
const product = bgshow[1];
const contact = bgshow[2];
const about = bgshow[3];

home.addEventListener('click', function () {
    home.classList.add('active');
    product.classList.remove('active');
    about.classList.remove('active');
    contact.classList.remove('active');
});

product.addEventListener('click', function () {
    product.classList.add('active');
    about.classList.remove('active');
    contact.classList.remove('active');
    home.classList.remove('active');

});

contact.addEventListener('click', function () {
    product.classList.remove('active');
    about.classList.remove('active');
    contact.classList.add('active');
    home.classList.remove('active');

});

about.addEventListener('click', function () {
    product.classList.remove('active');
    about.classList.add('active');
    contact.classList.remove('active');
    home.classList.remove('active');

});

// qrcode api
const urlfield = document.querySelector('.input');
const imgbox = document.querySelector('.qr-img');
const btngerate = document.getElementById('generatecode');

btngerate.addEventListener('click', ()=>{
    let url = urlfield.value.trim();

    if(url){
        imgbox.src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + url;
    } else {
        alert("please enter a link");
    }
})
