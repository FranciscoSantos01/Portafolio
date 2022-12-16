const menu  = document.getElementById('menu')
const nav = document.getElementById('nav')
const cross = document.getElementById('cross')


AOS.init();

menu.addEventListener('click', ()=>{
    nav.style.display = 'flex';
    cross.style.display = 'block'
    menu.style.display = 'none'
})

cross.addEventListener('click', ()=>{
   menu.style.display = 'block';
   cross.style.display = 'none'
   nav.style.display = 'none'
})
