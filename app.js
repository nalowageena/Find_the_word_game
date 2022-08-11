const toggle_dark = document.querySelector("#toggle-dark");

const body = document.body;
const modal = document.querySelector('.modal-content')


function darkToggle() {
    toggle_dark.firstElementChild.classList.toggle("fa-sun");
    body.classList.toggle("light-mode");
    modal.classList.toggle("light-mode")
}

toggle_dark.addEventListener("click", darkToggle);

