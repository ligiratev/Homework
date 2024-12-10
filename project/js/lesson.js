// phone  block

const phoneInput = document.querySelector ('#phone-input')
const phoneButton = document.querySelector ('#phone-button')
const phoneResult = document.querySelector ('#phone-result')


const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButon.onclick =()=>{
    if (regExp.test(phoneInput.value)){
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.style.color ='red'
    }
}