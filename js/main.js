//
// صلي ع النبي بس الاول

$(document).ready(function() {

    
    function myScroll() {
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
    }

    function toBigSmallNav() { 
        if ($('body , html').outerWidth() < 1000) {
            $("#topnav ").css("backgroundColor","white")                 
            $("#topnav .menu-extras").css("display","flex");
            $("#topnav #navmenu-nav").css("display","none");
            $("ul.appended-menu").css("display","flex");
            
            // console.log("small nav");
        } else {
            $("#topnav ").css("backgroundColor","transparent")
            $("#topnav .menu-extras").css("display","none");
            $("ul.appended-menu").css("display","none");
            $("#topnav #navmenu-nav").css("display","flex");

            // console.log("big nav");

        }
        // console.log("body width", $('body , html').outerWidth());
    }

    function toggleMenu() { 
        $('#isToggle').click(function() {
            let menuIcon = $(this).find('i');
    
            // Toggle the menu icon
            if (menuIcon.hasClass('bi-list')) {
                menuIcon.removeClass('bi-list').addClass('bi-x-lg');
                // menuIcon.toggleClass('bi-x-lg');
                $("#topnav #headerContainer").append(`
                    <ul class="list-group list-group-flush list-unstyled appended-menu">
                        <li class="nav-item list-group-item bg-white">
                            <a href="#home" class="nav-link">Home</a>
                        </li>
                        <li class="nav-item list-group-item">
                            <a href="#feature" class="nav-link">Features</a>
                        </li>
                        <li class="nav-item list-group-item">
                            <a href="#pricing" class="nav-link">Pricing</a>
                        </li>
                        <li class="nav-item list-group-item">
                            <a href="#blog" class="nav-link">Blog & News</a>
                        </li>
                        <li class="nav-item list-group-item">
                            <a href="#contact" class="nav-link">Contact Us</a>
                        </li>
                    </ul>
                `);
                console.log("added menu");
            } else {
                menuIcon.removeClass('bi-x-lg').addClass('bi-list');
                // menuIcon.toggleClass('bi-list');

                $("#topnav #headerContainer ul.appended-menu").remove();
                console.log("removed menu");

            }
    
        });
    }

    toggleMenu();
    toBigSmallNav();
    myScroll();

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

    
    // function countUp(limit) {
    //     let count = 0;

    //     const interval = setInterval(() => {
    //         $('.counter-value').text(count);

    //         if (count === limit) {
    //             clearInterval(interval);
    //             console.log("Count up finished!");
    //         }

    //         count++;
    //     }, 10);
    // }


    function countUp(element, limit) {
        let count = 0;

        const interval = setInterval(() => {
            $(element).text(count);

            if (count === limit) {
                clearInterval(interval);
            }

            count++;
        }, 10); 
    }

    $('.counter-value').each(function() {
        let target = $(this).data('target');
        countUp(this, target);
    });

    $(window).resize( function() {
        toBigSmallNav();
    }
    );
    $(window).scroll(function(){
        // console.log($(window).scrollTop());
        myScroll();
        // console.log("test");
    }); //end


    



});    
