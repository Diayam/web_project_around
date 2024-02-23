const profileButtonEdit = document.querySelector(".profile__button-edit");
const popupCloseButton = document.querySelector(".popup__close-button");
const popup = document.querySelector (".popup");
const profileNameElement = document.querySelector(".profile__name");
const profileSubnameElement = document.querySelector(".profile__subname");
const popuInputName = document.querySelector(".popup__input_name");
const popupInputAbout = document.querySelector(".popup__input_about");
const popupSaveButton = document.querySelector(".popup__save-button");

popuInputName.value = profileNameElement.textContent;
popupInputAbout.value = profileSubnameElement.textContent;

function openPopup() {
    popup.classList.add("popup__open");
}
function clossPopup() {
    popup.classList.remove("popup__open");
}
function save(event) {
    event.preventDefault()
    profileNameElement.textContent = popuInputName.value;
    profileSubnameElement.textContent = popupInputAbout.value;
    clossPopup()
 
  
}

profileButtonEdit.addEventListener("click", openPopup);
popupCloseButton.addEventListener("click" , clossPopup);
popupSaveButton.addEventListener("click", save);

