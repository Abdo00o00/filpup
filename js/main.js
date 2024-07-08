//
// صلي ع النبي بس الاول
$(document).ready(function(){
    // writeing the words character by character
    var typed = new Typed('#element', {
        strings: ['Marketing', 'Services', 'Business', 'Solutions'],
        typeSpeed: 200,
        loop: true,
        backSpeed: 100,
        showCursor: false,
    
    });                
    const element = document.getElementById('element');
    applyGradientToText(element);

        $("#flip").click(function(){
          $("#panel").slideUp("slow");
    }); // end 

    // color gradient for h1 text
    function applyGradientToText(element) {
        const text = element.innerText;
        element.innerHTML = '';
        
        text.split('').forEach(char => {
            const span = document.createElement('span');
            span.innerText = char;
            span.className = 'gradient-letter';
            element.appendChild(span);
        });
    } //end

    //show and hide the back to top button
    $(window).scroll(function(){
        console.log($(window).scrollTop());
        if($(window).scrollTop() < 200){
            $(".back-to-top").fadeOut(500).css("display","none");
        }else {
            $(".back-to-top").fadeIn(500).css("display","flex");
        }        

        if($(window).scrollTop() < 90){
            $("#topnav ").css("backgroundColor","transparent").css("box-shadow","0 0 0px rgba(30, 41, 59, 0.15)");
        }else{
            $("#topnav ").css("backgroundColor","white").css("box-shadow","0 0 3px rgba(30, 41, 59, 0.15)");
        }       
        console.log("test");
    }); //end

    

    var owl = $('.owl-carousel');
        owl.owlCarousel({
        items:1,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:false
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1500])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    });
    $(".owl-carousel").owlCarousel();

});    