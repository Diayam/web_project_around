const profileButtonEdit = document.querySelector(".profile__button-edit");
const popupCloseButton = document.querySelector(".popup__close-button");
const popup = document.querySelector (".popup");

function openpopup() {
    popup.classList.add("popup__open");
}
function closspopup() {
    popup.classList.remove("popup__open");
}

profileButtonEdit.addEventListener("click",openpopup);
popupCloseButton.addEventListener("click" , closspopup);






/*const profileContentElelement =document.querySelector(".prefile__content");
const profileNameElement = document.querySelector(".profile__name");
const profileSubnameElement = document.querySelector(".profile__subname");
const profileButtonAdd = document.querySelector(".profile__button-add");

const popuInputName = document.querySelector(".popup__input_name");
const popupInputAbout = document.querySelector(".popup__input_about");
const popupSaveButton = document.querySelector(".popup__save-button");
const popupCloseButton = document.querySelector(".popup__close-button");
const profileName = profileNameElement.textContent;
const profileSubname = profileSubnameElement.textContent;
console.log(profileName);
console.log(profileSubname);
*/