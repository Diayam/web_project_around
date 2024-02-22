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

function openpopup() {
    popup.classList.add("popup__open");
}
function closspopup() {
    popup.classList.remove("popup__open");
}
function save(event) {event.preventDefault()
console.log("hola")
}

profileButtonEdit.addEventListener("click",openpopup);
popupCloseButton.addEventListener("click" , closspopup);
popupSaveButton.addEventListener("click",openpopup);





/*const profileContentElelement =document.querySelector(".prefile__content");






const profileName = profileNameElement.textContent;
const profileSubname = profileSubnameElement.textContent;
console.log(profileName);
console.log(profileSubname);
*/