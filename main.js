//Cardholder Name
let nameCard = document.querySelector('.card__details-name');
let nameInput = document.querySelector('#cardholder');
let nameErrorDiv = document.querySelector('.form__cardholder--error');

//Ingreso dinamico del nombre
nameInput.addEventListener('input', ()=>{ 
    if(nameInput.value == ''){
        nameCard.innerText = 'NOMBRE Y APELLIDO'
    } else{
    nameCard.innerText = nameInput.value
    }
})

// Card Number

let numberCard = document.querySelector('.card__number');
let numberInput = document.querySelector('#cardNumber');
let numberErrorDiv = document.querySelector('.form__inputnumber--error');

//Ingreso dinamico del numero

numberInput.addEventListener('input', e=>{
    let inputValue = e.target.value;

    //Actualizando la card en tiempo real
    numberCard.innerText = numberInput.value;
   
    let regExp = /[A-z]/g;
    if(regExp.test(numberInput.value)){
        showError(numberInput, numberErrorDiv, 'Wrong format, only numbers');
    }else{
        numberInput.value = inputValue.replace(/\s/g, "").replace(/([0-9]{4})/g, '$1 ').trim();    
        hideError(numberInput, numberErrorDiv);
    }

    if(numberInput.value == ''){
        numberCard.innerText = '1234 5678 9012 3456'
    } else {
        
    }
});

function showError(divInput, divError, msgError){
    divError.innerText = msgError;
    divInput.style.borderColor = '#FF0000';
}

function hideError(divInput, divError){
    divError.innerText = '';
    divInput.style.borderColor = '';
}