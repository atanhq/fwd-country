const button = document.getElementById('menu-button');
const list = document.getElementById('menu-list');

button.addEventListener('click', function(){
    list.classList.toggle('toggled') 
})