document.addEventListener('DOMContentLoaded', function(){
let data = document.getElementById('data');
let info = localStorage.getItem('info'); //Obtengo info guardada en localStorage 
data.innerHTML = info;
});