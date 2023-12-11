const nav = document.getElementById('nav-main');
const open = document.getElementById('btn-open');
const close = document.getElementById('btn-close');
const body = document.getElementById('body');
const mediaQuery = window.matchMedia('(max-width: 480px)');

open.addEventListener('click', () => {
    nav.classList.add('visible');
    open.style.display='none';
    close.style.display='flex';
    body.style.overflow='hidden'

});

close.addEventListener('click', () => {
    nav.classList.remove('visible');
    open.style.display='flex';
    close.style.display='none';
    body.style.overflow=''
});

mediaQuery.addEventListener('change', () =>{
    if(mediaQuery.matches){
        open.style.display='';
        close.style.display='';
    }
    else{
        open.style.display='none';
        close.style.display='none';
    }
})