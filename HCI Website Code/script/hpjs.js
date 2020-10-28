
var n = 1;
var flag = 1;
var bars = document.getElementsByClassName("bar");
bars[flag-1].classList.toggle('active');
var slideCount = $('#slider-outer div.content-slider div.slide-index').length;
var slideWidth = $('#slider-outer div.content-slider div.slide-index').width();
var slideHeight = $('#slider-outer div.content-slider div.slide-index').height();
var totalWidth = slideCount * slideWidth;



$(document).ready(function(){

    // Slider
    $('#slider-outer').css({ width: slideWidth, height: slideHeight });
    $('#slider-outer div.content-slider').css({ width: totalWidth, marginLeft: - slideWidth });
    $('#slider-outer div.content-slider div.slide-index:last-child').prependTo('#slider-outer div.content-slider');
    



    $('#laquo').click(function () {
        $('#slider-outer div.content-slider').animate({
        left: + slideWidth
        }, 500, function () {
                $('#slider-outer div.content-slider div.slide-index:last-child').prependTo('#slider-outer div.content-slider');
                $('#slider-outer div.content-slider').css('left', '');
        });
        bars[flag-1].classList.toggle('active');
        flag--;
        if(flag == 0){
            flag = 5;
            bars[flag-1].classList.toggle('active');
        }
        else{
            bars[flag-1].classList.toggle('active');
        }
    });
    $('#raquo').click(function () {
        $('#slider-outer div.content-slider').animate({
            left: - slideWidth
            },500, function () {
                $('#slider-outer div.content-slider div.slide-index:first-child').appendTo('#slider-outer div.content-slider');
                $('#slider-outer div.content-slider').css('left', '');
            });
            bars[flag-1].classList.toggle('active');
            flag++;
            if(flag == 6){
                flag = 1;
                bars[flag-1].classList.toggle('active');
            }
            else{
                bars[flag-1].classList.toggle('active');
            }
    });

    animationSlide();

    //Slide Down untuk info overview

    var toggleButton = true;
    
    $('.overview-text').hide();
    
    $('#show').click(function () {
        if(toggleButton){
            if($('.overview-text').show(1000)){
                $("html, body").animate({ scrollTop: $(document).height() }, 300);
            }
            $(".arrow").addClass("arrow-down");
            toggleButton=!toggleButton;
        }else{
            $(".arrow").removeClass("arrow-down");
            $('.overview-text').slideUp();
            toggleButton=!toggleButton;
            $("html, body").animate({ scrollTop: $(document).height(0) }, 1000);
        }
    });
    
});


//function Slider bergeser tiap sekian detik
function currentBar(y) {
        n = y;
        var selisih = 0;
        
        if(n==flag){
    
        }
        else if(n>flag){
            selisih = n - flag;
            console.log(selisih, flag);
            for(i=0;i<selisih;i++){
                $(document).ready(function(){
                        $('#slider-outer div.content-slider').animate({
                            left: - slideWidth
                            },100, function () {
                                $('#slider-outer div.content-slider div.slide-index:first-child').appendTo('#slider-outer div.content-slider');
                                $('#slider-outer div.content-slider').css('left', '');
                            });
                            bars[flag-1].classList.toggle('active');
                            flag++;
                            if(flag == 6){
                                flag = 1;
                                bars[flag-1].classList.toggle('active');
                            }
                            else{
                                bars[flag-1].classList.toggle('active');
                            }
                });
            }
        }
        else if(n<flag){
            selisih = flag - n;
                for(i=0;i<selisih;i++){
                        $('#slider-outer div.content-slider').animate({
                        left: + slideWidth
                        }, 100, function () {
                                $('#slider-outer div.content-slider div.slide-index:last-child').prependTo('#slider-outer div.content-slider');
                                $('#slider-outer div.content-slider').css('left', '');
                        });
                        bars[flag-1].classList.toggle('active');
                        flag--;
                        if(flag == 0){
                            flag = 5;
                            bars[flag-1].classList.toggle('active');
                        }
                        else{
                            bars[flag-1].classList.toggle('active');
                        }
            }
        }
}

function animationSlide(){


    setInterval(function() {
        $(document).ready(function(){
            $('#slider-outer div.content-slider').animate({
                left: - slideWidth
                },1000, function () {
                    $('#slider-outer div.content-slider div.slide-index:first-child').appendTo('#slider-outer div.content-slider');
                    $('#slider-outer div.content-slider').css('left', '');
                });
                bars[flag-1].classList.toggle('active');
                flag++;
                if(flag == 6){
                    flag = 1;
                    bars[flag-1].classList.toggle('active');
                }
                else{
                    bars[flag-1].classList.toggle('active');
                }
                setTimeout(5000);
        });
    }, 7000);
    console.log(setInterval);
}




