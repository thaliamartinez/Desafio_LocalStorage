document.addEventListener('DOMContentLoaded', function(){
let buttonText= document.getElementById('buttonText');
let inputText = document.getElementById('inputText');

buttonText.addEventListener('click', ()=>{
window.localStorage.setItem('info', inputText.value); //Almaceno info en localStorage
});
});