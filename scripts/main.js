const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

let popup = document.querySelector('.popup')
let editButtton = document.querySelector('.profile__edit-btn');
let closeButton = document.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__form') 
let nameInput = formElement.querySelector('.popup__input_type_name') 
let jobInput = formElement.querySelector('.popup__input_type_about')
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');

//добавления карточек
let addImageBtn = document.querySelector('.profile__add-btn');
let cardContainer = document.querySelector('.elements__grid-container');
let userCard = document.querySelector('.user-card').content;

initialCards.forEach(item => {
    renderCards(item.name, item.link);
    cardContainer.append(item);
});

function renderCards(name, link) {
    const newCard = userCard.cloneNode(true);
    newCard.querySelector('.card__title').textContent = name;
    newCard.querySelector('.card__image').src = link;
    cardContainer.prepend(newCard);
}






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
  
