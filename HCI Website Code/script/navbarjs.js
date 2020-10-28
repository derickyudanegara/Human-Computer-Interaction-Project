const navslide = function(){
    const icon_burger = document.querySelector('.icon-burger');
    const navbar_atr = document.querySelector('.navbar-atribute');
    const navbar_atribute = document.querySelectorAll('.navbar-atribute li');


    icon_burger.addEventListener('click',function(){
        navbar_atr.classList.toggle('navbar-outer-active');
    });


}

navslide(); 





