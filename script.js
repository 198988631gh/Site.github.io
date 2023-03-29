const button = document.querySelector('.button');
console.log(button);
const popup = document.querySelector('.popup_container');
const closeButton = document.querySelector('.popup_close');

function openPopup() {
    popup.classList.toggle('popup_container_opened');
}

button.addEventListener('click', openPopup);
closeButton.addEventListener('click', openPopup)