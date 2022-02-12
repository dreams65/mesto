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
let popupAddImage = document.querySelector('.popup_user_content');
let imageLightBox = document.querySelector('.popup_image_light-box');
let editButtton = document.querySelector('.profile__edit-btn');
let closeButton = document.querySelector('.popup__close-button');
let closeButtonLightBox = document.querySelector('.popup__close-button_image_light-box');
let closeButtonPopupImage = document.querySelector('.popup__close-button_user_content')
let formElement = document.querySelector('.popup__form')
let nameInput = formElement.querySelector('.popup__input_type_name')
let jobInput = formElement.querySelector('.popup__input_type_about')
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let likeBtn = document.querySelector('.card__btn');


//добавление карточек
let addNameImage = document.querySelector('.popup__input_user_image-name');
let addLinkImage = document.querySelector('.popup__input_user_image-link');
let addImageSubmit = document.querySelector('.popup__btn_user_content');
let addImageBtn = document.querySelector('.profile__add-btn');
let cardContainer = document.querySelector('.elements__grid-container');
let userCard = document.querySelector('.user-card').content;

initialCards.forEach(item => {
	renderCards(item.name, item.link);
	cardContainer.append(item);
});

function lightBox() {
	document.querySelectorAll('.card__image').forEach(image => {
		image.onclick = () => {
			imageLightBox.classList.add('popup_open');
			imageLightBox.querySelector('.popup__image').src = image.getAttribute('src');
			imageLightBox.querySelector('.popup__caption').textContent = image.getAttribute('alt');
		}
	});
};
lightBox();

function renderCards(name, link) {
	const newCard = userCard.cloneNode(true);
	newCard.querySelector('.card__title').textContent = name;
	newCard.querySelector('.card__image').src = link;
	newCard.querySelector('.card__image').alt = name;
	addListeners(newCard);
	cardContainer.prepend(newCard);
}

function renderNewCard() {
	let newCard = userCard.cloneNode(true);
	newCard.querySelector('.card__title').textContent = addNameImage.value;
	newCard.querySelector('.card__image').src = addLinkImage.value;
	newCard.querySelector('.card__image').alt = addNameImage.value;
	addListeners(newCard);
	cardContainer.prepend(newCard);
	lightBox();
}

function addListeners(el) {
	el.querySelector('.card__delete').addEventListener('click', handleDelete);
}

function handleDelete(event) {
	event.target.closest('.card').remove();
}

function popupOpen() {
	nameInput.value = profileTitle.textContent;
	jobInput.value = profileSubtitle.textContent;
	popup.classList.add('popup_open');
}

function popupAddImageOpen() {
	popupAddImage.classList.add('popup_open');
}

function popupAddImageClose() {
	popupAddImage.classList.remove('popup_open');
}

function popupClose() {
	popup.classList.remove('popup_open');
}

function LightBoxClose() {
	imageLightBox.classList.remove('popup_open');
}

function addNewCard(event) {
	event.preventDefault();
	renderNewCard();
	popupAddImageClose();
}

function formSubmitHandler(evt) {
	evt.preventDefault();
	profileTitle.textContent = nameInput.value;
	profileSubtitle.textContent = jobInput.value;
	popupClose();
}

function like(likeBtn) {
	likeBtn.classList.toggle('card__btn_active')
}


formElement.addEventListener('submit', formSubmitHandler);
editButtton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose,);
addImageBtn.addEventListener('click', popupAddImageOpen);
closeButtonPopupImage.addEventListener('click', popupAddImageClose);
closeButtonLightBox.addEventListener('click', LightBoxClose);
addImageSubmit.addEventListener('click', addNewCard);

