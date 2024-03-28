const profileButtonEdit = document.querySelector(".profile__button-edit");
const popupCloseButton = document.querySelector(".popup__close-button");
const popup = document.querySelector(".popup");
const profileNameElement = document.querySelector(".profile__name");
const profileSubnameElement = document.querySelector(".profile__subname");
const popuInputName = document.querySelector(".popup__input_name");
const popupInputAbout = document.querySelector(".popup__input_about");
const profileForm = document.querySelector(".popup__edit");

const editForm = document.querySelector("#place__add");
const buttonEditAdd = document.querySelector(".profile__button-add");
const buttonplace = document.querySelector("#place__close");

popuInputName.value = profileNameElement.textContent;
popupInputAbout.value = profileSubnameElement.textContent;

function openPopup() {
  popup.classList.add("popup__open");
}
function clossPopup() {
  popup.classList.remove("popup__open");
}
function save(event) {
  event.preventDefault();
  profileNameElement.textContent = popuInputName.value;
  profileSubnameElement.textContent = popupInputAbout.value;
  clossPopup();
}
function openEdit() {
  editForm.classList.add("popup__open");
}
function clossPopup2() {
  editForm.classList.remove("popup__open");
}

profileButtonEdit.addEventListener("click", openPopup);
popupCloseButton.addEventListener("click", clossPopup);
profileForm.addEventListener("submit", save);

buttonEditAdd.addEventListener("click", openEdit);
buttonplace.addEventListener("click", clossPopup2);