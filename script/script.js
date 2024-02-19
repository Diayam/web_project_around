const profileContentElelement =document.querySelector(".prefile__content");
const profileNameElement = document.querySelector(".profile__name");
const profileSubnameElement = document.querySelector(".profile__subname");

const profileName = profileNameElement.textContent;
const profileSubname = profileSubnameElement.textContent;

const profileButtonEdit = document.querySelector("profile__Button-edit");
const profileButtonAdd = document.querySelector(".profile__button-add");
const popupElemente = document.querySelector (".popup");
const popuInputName = document.querySelector(".popup__input_name");
const popupInputAbout = document.querySelector(".popup__input_about");
const popupSaveButton = document.querySelector(".popup__save-button");
const popupCloseButton = document.querySelector(".popup__close-button");

console.log(profileName);
console.log(profileSubname);