"use strict";
/*
 * Laboration 5 - Studentkortsgenerator
 * Namn: Darlyng Leyton Bueno
 */

// Hämta element från DOM
const form = document.querySelector("#studentform");
const clearButton = document.querySelector("#clear");

const fullnameInput = document.querySelector("#fullname");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const fontSelect = document.querySelector("#font");

const previewFullname = document.querySelector("#previewfullname");
const previewEmail = document.querySelector("#previewemail");
const previewPhone = document.querySelector("#previewphone");

const errorList = document.querySelector("#errorlist");
const historySection = document.querySelector("#history");
const deleteHistoryButton = document.querySelector("#delete");


// Array som används för felmeddelanden
let errors = [];

// Array som innehåller sparade studentkort
let history = [];

/**
 * Validerar formulärets inmatning.
 * @returns {boolean}
 */
function validateForm() {
    errors = [];
    // Kontrollera formulärets obligatoriska fält
    if (fullnameInput.value.trim() === "") {
        errors.push("du måste ange ditt namn");
    }
    if (emailInput.value.trim() === "") {
        errors.push("du måste ange ditt e-postadress");
    }

    if (phoneInput.value.trim() === "") {
        errors.push("du måste ange ditt telefonnummer");
    }

    // Visa eventuella felmeddelanden
    displayErrors();

    // Returnera resultatet (true eller false) av valideringen
    return errors.length === 0;
}


/**
 * Visar felmeddelanden på sidan.
 */
function displayErrors() {
    // Rensa tidigare felmeddelanden
    errorList.innerHTML = ""; //tömmer listan


    // Skriv ut aktuella felmeddelanden till DOM
    errors.forEach(function (error) {
        const liElement = document.createElement("li"); //skapar ny element
        liElement.textContent = error;
        errorList.appendChild(liElement); //lägger felmeddelanden på sidan
    }
    )
}


/**
 * Skapar ett studentkort och visar det på sidan.
 */
function createStudentCard() {
    // Hämta information från formuläret
    const name = fullnameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;
    const font = fontSelect.value;

    // Uppdatera studentkortet
    previewFullname.innerHTML = (name); //skriva ut text till dokument
    previewEmail.innerHTML = (email);
    previewPhone.innerHTML = (phone);

    previewFullname.style.fontFamily = font; //kunna välja typsnitt man vill
    previewEmail.style.fontFamily = font;
    previewPhone.style.fontFamily = font;

    // Lägg till studentkortet i historiken

    // Spara och uppdatera historiken
}


/**
 * Sparar historiken i localStorage.
 */
function saveHistory() {
    // Spara history i localStorage
}


/**
 * Läser in tidigare historik från localStorage.
 */
function loadHistory() {
    // Hämta eventuell sparad historik

    // Uppdatera history
}


/**
 * Visar historiken på sidan.
 */
function renderHistory() {
    // Rensa tidigare visad historik

    // Skriv ut innehållet i history till DOM
}


/**
 * Rensar formulär, aktuellt studentkort och felmeddelanden.
 */
function clearForm() {
    // Återställ formulär och studentkort
    fullnameInput.value = ""; //rensar formuläret
    emailInput.value = "";
    phoneInput.value = "";


    // Rensa eventuella felmeddelanden
    errorList.innerHTML = ""; //felmeddelanden raderas när man trycker på rensa knappen
}


/**
 * Raderar hela historiken.
 */
function deleteHistory() {
    // Radera sparad historik

    // Uppdatera history och visningen på sidan
}


// Eventlyssnare

// När formuläret skickas:

// - validera inmatningen
form.addEventListener("submit", function (event) { //skapade eventlistener som lyssnar på submit
    event.preventDefault(); //för att sidan inte ska laddas om

    // - skapa studentkort om valideringen lyckas
    if (validateForm()) {
        createStudentCard();
    }


});


// När användaren klickar på "Rensa"
clearButton.addEventListener("click", clearForm) //texten raderas när man trycker på rensa

// När användaren klickar på "Radera historik"


// När sidan laddas:
// - läs in och visa eventuell tidigare historik