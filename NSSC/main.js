birgar = document.querySelector('.birgar')
create = document.querySelector('.create')
navList = document.querySelector('.nav-list')
navbar = document.querySelector('.navbar')

birgar.addEventListener('click',()=>{
    navList.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
    create.classList.toggle('create');
})
