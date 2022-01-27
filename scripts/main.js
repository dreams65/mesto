let popup = document.querySelector('.popup')
let editButtton = document.querySelector('.profile__edit-btn');
let closeButton = document.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__form') 
let nameInput = formElement.querySelector('.popup__input_type_name') 
let jobInput = formElement.querySelector('.popup__input_type_about')
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');

function popupOpen() {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
    popup.classList.add('popup_open');
}

function popupClose() {
    popup.classList.remove('popup_open');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    popupClose();
}

formElement.addEventListener('submit', formSubmitHandler);
editButtton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose);
  
