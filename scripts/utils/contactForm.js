/********** Contact form handling **********/

const body = document.querySelector('body');
const header = document.querySelector('header');
const main = document.querySelector('main');
const contactButton = document.querySelector('.contact_button');
const closeButton = document.querySelector('.close_button');
const modal = document.getElementById("contact_modal");
const form = document.querySelector('form');
const firstNameInput = document.getElementById('firstname');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const focusableElements = Array.from(document.getElementsByClassName('focusable-element'));

contactButton.addEventListener('click', displayModal);
closeButton.addEventListener('click', closeModal);
closeButton.addEventListener('keypress', closeModal);

modal.addEventListener('keyup', (e) => {
    if(e.key === "Escape"){
        closeModal();
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    sendForm();
})

// function to display contact form
function displayModal() {
    body.style.overflow = 'hidden';
    modal.style.display = "block";
    header.setAttribute('aria-hidden', true);
    main.setAttribute('aria-hidden', true);
    modal.setAttribute('aria-hidden', false);
    modal.setAttribute('tabindex', 0);
    focusableElements.forEach((element) => element.setAttribute('tabindex', -1));
    firstNameInput.focus();
}

// Function to close contact form
function closeModal() {
    body.style.overflow = 'scroll';
    modal.style.display = "none";
    header.setAttribute('aria-hidden', false);
    main.setAttribute('aria-hidden', false);
    modal.setAttribute('aria-hidden', true);
    focusableElements.forEach((element) => element.setAttribute('tabindex', 0));
}

// Function to send form
function sendForm(){
    const submitedDatas = {
        firstname: firstNameInput.value,
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
    };
    console.log(submitedDatas);
    closeModal();
    clearFields();
}

// Function to clear fields when form is sent
function clearFields(){
    firstNameInput.value = '';
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = ''
}