//Cardholder Name
let nameCard = document.querySelector('.card__details-name');
let nameInput = document.querySelector('#cardholder');
let nameErrorDiv = document.querySelector('.form__cardholder--error error');

//Ingreso dinamico del nombre
nameInput.addEventListener('input', ()=>{ 
    nameCard.innerText = nameInput.value
})