
const form = document.querySelector("form");
const sentMessage = document.querySelector(".sent-message");
const nameInput = document.querySelector(
    'input[name="name"]'
    );
const emailInput = document.querySelector(
    'input[name="email"]'
    );      
const messageInput = document.querySelector(
    'textarea[name="message"]'
);

let validForm = false;

const validateInputs = () => {
    validForm = true;

    nameInput.classList.remove("invalid");
    nameInput.nextElementSibling.classList.add("hidden");

    if (!nameInput.value) {
        nameInput.classList.add("invalid");
        nameInput.nextElementSibling.classList.remove("hidden");
        validForm = false;
    }

    if (!emailInput.value) {
        emailInput.classList.add("invalid");
        emailInput.nextElementSibling.classList.remove("hidden");
        validForm = false;
    }
    
    if (!messageInput.value) {
        messageInput.classList.add("invalid");
        messageInput.nextElementSibling.classList.remove("hidden");
        validForm = false;
    }
    
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInputs();
    if (validForm) {
        form.remove();
        sentMessage.classList.remove("hidden");
    }
});

nameInput.addEventListener("input", () => {
   validateInputs(); 
});