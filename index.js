let bttn = document.getElementById('menu-burger');
let bttnClosing = document.getElementById('close-menu');
let menu = document.querySelector('.menu-burger-body');
let blackout = document.querySelector('.blackout');

bttn.addEventListener('click', activeMenu);
bttnClosing.addEventListener('click', closeMenu);
function activeMenu(){
	menu.classList.toggle('active');
    blackout.classList.toggle('active');
}

function closeMenu() {
	menu.classList.remove('active');
    blackout.classList.remove('active');
};

let formBttn = document.getElementById('form-bttn');
let popUp = document.getElementById('message-popup');

formBttn.addEventListener('click', showPopUp);
function showPopUp() {
   popUp.classList.toggle('active');
};

