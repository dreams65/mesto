let editButtton = document.querySelector('.profile__edit-btn');
let saveButton = document.querySelector('.popup__btn');
let closeButton = document.querySelector('.popup__cloused');
let formElement = document.querySelector('.popup__form') 
let nameInput = formElement.querySelector('.popup__input_name') 
let jobInput = formElement.querySelector('.popup__input_about')
let profileTitle = document.querySelector('.profile__title');
let profileSubTitle = document.querySelector('.profile__subtitle');

nameInput.value = profileTitle.textContent;
jobInput.value = profileSubTitle.textContent;

function popupOpen() {
    nameInputVal = nameInput.value;
    jobInputVal = jobInput.value;
    profileTitle.textContent = nameInputVal;
    profileSubTitle.textContent = jobInputVal;
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    popupOpen();
}

formElement.addEventListener('submit', formSubmitHandler);

editButtton.addEventListener('click', _=> {
  document.querySelector('.popup').classList.add('popup_open');
});
  
saveButton.addEventListener('click', _=> {
    document.querySelector('.popup').classList.remove('popup_open');
});
  
closeButton.addEventListener('click', _=> {
    document.querySelector('.popup').classList.remove('popup_open');
});