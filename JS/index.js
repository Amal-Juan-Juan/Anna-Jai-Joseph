const navToggle=document.querySelector('.dash-lines')
const navLinks=document.querySelectorAll('.nav-link')
navToggle.addEventListener('click',()=>{
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(llink=>{
    llink.addEventListener('click',()=>{
        document.body.classList.remove('nav-open');
    })
})