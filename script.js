let menu = document.querySelector('.fixed-menu');

menu.addEventListener('click', function(event){
    let clickTarget = event.target;
    let activeBtn = document.querySelector('.active');

    if(clickTarget.classList.contains('nav-link')){
        clickTarget.classList.add('active');
        activeBtn.classList.remove('active');
    }
});


const swiper = document.querySelector('.swiper').swiper;

// Now you can use all slider methods like
swiper.slideNext();