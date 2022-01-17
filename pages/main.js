function popUp() {
    document.querySelector('.profile__edit-btn').addEventListener('click', _=> {
        document.querySelector('.pop-up').classList.add('pop-up_open');
    })
    document.querySelector('.pop-up__cloused').addEventListener('click', _=> {
        document.querySelector('.pop-up').classList.remove('pop-up_open');
    })

    document.querySelector('.pop-up__btn').addEventListener('click', _=> {
        document.querySelector('.pop-up').classList.remove('pop-up_open');
    })
}
popUp();



// Находим форму в DOM
let formElement = document.querySelector('.pop-up__form') // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = formElement.querySelector('.pop-up__input-name') // Воспользуйтесь инструментом .querySelector()
let jobInput = formElement.querySelector('.pop-up__input-about')// Воспользуйтесь инструментом .querySelector()

let profileTitle = document.querySelector('.profile__title');
let profileSubTitle = document.querySelector('.profile__subtitle');

nameInput.value = profileTitle.textContent;
jobInput.value = profileSubTitle.textContent;

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
// Так мы можем определить свою логику отправки.
// О том, как это делать, расскажем позже.
// Получите значение полей jobInput и nameInput из свойства value
    let nameInputVal = nameInput.value;
    let jobInputVal = jobInput.value;
// Выберите элементы, куда должны быть вставлены значения полей
    let profileTitle = document.querySelector('.profile__title');
    let profileSubTitle = document.querySelector('.profile__subtitle');
// Вставьте новые значения с помощью textContent
    profileTitle.textContent = nameInputVal;
    profileSubTitle.textContent = jobInputVal;
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

