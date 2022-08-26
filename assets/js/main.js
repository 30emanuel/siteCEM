const showMenu = (toggleId, navId)=>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)
  
  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      nav.classList.toggle('show')
      toggle.classList.toggle('bx-x')
    })
  }
}
showMenu('header-toggle','nav-menu')

const imgs = document.getElementById('img');
const img = document.querySelectorAll('#img img');

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length -1){
        idx = 0;

    }
    imgs.style.transform = `translateX(${-idx * 100}%)`;
}

setInterval(carrossel,1800);