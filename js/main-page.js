function getInputValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValue = inputField.value;
    const inputFieldString = parseFloat(inputFieldValue);
    return inputFieldString;
}
function  getInputValueById(elementId){
    const elementField = document.getElementById(elementId);
    const elementFieldValue = elementField.innerText;
    const elementFieldString = parseFloat(elementFieldValue);
    return elementFieldString;
}
function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}



document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositInput = getInputValueById('deposit-input-field-id');
    const depositElement = getInputValueById('deposit-element');
    const TotalDepositAmount = depositInput + depositElement;
    setTextElementValueById('deposit-element', TotalDepositAmount);
})