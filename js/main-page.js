function getInputValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValue = inputField.value;
    const inputFieldString = parseFloat(inputFieldValue);
    inputField.value = '';
    return inputFieldString;
}
function  getTextValueById(elementId){
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
    const depositElement = getTextValueById('deposit-element');
    const totalDepositAmount = depositInput + depositElement;
    setTextElementValueById('deposit-element', totalDepositAmount);

    /* balance Field  */

    const balanceInput = getTextValueById('balance-text');
    const totalBalance = balanceInput + totalDepositAmount;
    setTextElementValueById('balance-text', totalBalance);
})
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawInput = getInputValueById('withdraw-input');
    const withdrawText = getTextValueById('withdraw-text');
    const totalWithdraw = withdrawInput + withdrawText;
    setTextElementValueById('withdraw-text', totalWithdraw);
    const balanceInput =getTextValueById('balance-text');
    if(withdrawInput > balanceInput){
        alert("Not enough money!!")
        return;
    }
    const totalWithdrawValue = balanceInput - totalWithdraw;
    setTextElementValueById('balance-text',totalWithdrawValue);
})