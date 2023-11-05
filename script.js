let classLink = '.main-link';

window.onscroll = function(){
    let h = document.documentElement.clientHeight;

    if(window.scrollY >= h*4){
        classLink = '.comments-link';
    }
    else if(window.scrollY >= h*3){
        classLink = '.works-link'
    }
    else if(window.scrollY >= h*2){
        classLink = '.skills-link';
    }
    else if(window.scrollY >= h){
        classLink = '.about-link';
    }
    else{
        classLink = '.main-link';
    }
    let activeBtn = document.querySelector('.active');
    let newActiveBtn = document.querySelector(classLink);
    
    if(!newActiveBtn.classList.contains('.active')){
        newActiveBtn.classList.add('active');
        activeBtn.classList.remove('active')
    }
}


let menu = document.querySelector('.fixed-menu');

menu.addEventListener('click', function(event) {
    let linkTarget = event.target;
    let linkActive = document.querySelector('.active');

    if (linkTarget.classList.contains('nav-link')) {
        linkActive.classList.remove('active');
        linkTarget.classList.add('active');
        let mobile= document.querySelector('.mobile-menu');
        if(!mobile.classList.contains('hide')){
            mobile.classList.add('hide');
        }
    }
});



document.querySelector('.mobile-button').addEventListener('click', 
function(event) 
{
    document.querySelector('.mobile-menu').classList.toggle('hide');
    document.querySelector('.mobile-button').classList.toggle('img1');
    document.querySelector('.mobile-button').classList.toggle('img2');
});