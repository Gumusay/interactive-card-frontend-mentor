const cardNumber = document.getElementById("number");
const numberInput = document.getElementById("card-number");

const cardName = document.getElementById("name");
const nameInput = document.getElementById("card-name");

const cardMonth = document.getElementById("month");
const monthInput = document.getElementById("card-month");

const cardYear = document.getElementById("year");
const yearInput= document.getElementById("card-year");

const cardCVC = document.getElementById("cvc");
const cvcInput = document.getElementById("card-cvc");

const submitButton = document.getElementById("submit-button");

const thankYou = document.querySelector(".thankYouPage");
const form = document.querySelector("form");

// -----------------------------------------------------

function setCardNumber(e){
    cardNumber.innerText = format(e.target.value);
}

function format(s) {
    return s.toString().replace(/\d{4}(?=.)/g,"$& ");
}

numberInput.addEventListener("keyup", setCardNumber);

// -----------------------------------------------------

function setCardName(e) {
    cardName.innerText = e.target.value;
}

nameInput.addEventListener("keyup" ,setCardName);

// ----------------------------------------------------

function setCardMonth(e) {
    cardMonth.innerText = e.target.value;
}

monthInput.addEventListener("keyup" , setCardMonth);

// ----------------------------------------------------------

function setCardYear(e) {
    cardYear.innerText = e.target.value;
}

yearInput.addEventListener("keyup", setCardYear);


// ---------------------------------------------------------

function setCardCvc(e) {
    cardCVC.innerText = e.target.value;
}

cvcInput.addEventListener("keyup", setCardCvc);

// ----------------------------------------------------------

function handleSubmit(e) {
    e.preventDefault();

    if(!nameInput.value){
        nameInput.classList.add("error");
        nameInput.parentElement.classList.add("error_message")
    }
    else{
        nameInput.classList.remove("error");
        nameInput.parentElement.classList.remove("error_message")
    }
// --------------------------
    if(!numberInput.value){
        numberInput.classList.add("error");
        numberInput.parentElement.classList.add("error_message")
    }
    else{
        numberInput.classList.remove("error");
        numberInput.parentElement.classList.remove("error_message")
    }
// --------------------------

    if(!monthInput.value){
        monthInput.classList.add("error");
        monthInput.parentElement.classList.add("error_message")
    }
    else{
        monthInput.classList.remove("error");
        monthInput.parentElement.classList.remove("error_message")
    }

// -----------------------------

    if(!yearInput.value){
        yearInput.classList.add("error");
        yearInput.parentElement.classList.add("error_message")
    }
    else{
        yearInput.classList.remove("error");
        yearInput.parentElement.classList.remove("error_message")
    }
// -----------------------------------

    if(!cvcInput.value){
        cvcInput.classList.add("error");
        cvcInput.parentElement.classList.add("error_message")
    }
    else{
        cvcInput.classList.remove("error");
        cvcInput.parentElement.classList.remove("error_message")
    }

// ----------------------------------------

    if(nameInput.value && numberInput.value && monthInput.value && yearInput.value && cvcInput.value){
        thankYou.classList.remove("hidden");
        form.classList.add("hidden")
    }

}

submitButton.addEventListener("click",handleSubmit);
