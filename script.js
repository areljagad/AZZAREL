//Toggle class active
const navbarnav = document.querySelector('.navbar-nav');
document.querySelector('#humburger-menu').onclick = () =>{
navbarnav.classList.toggle('active');
};

const humburger = document.querySelector('#humburger-menu');

document.addEventListener('click', function(e){
    if(!humburger.contains(e.target) && !navbarnav.contains(e.target)){
        navbarnav.classList.remove('active');
    }
});