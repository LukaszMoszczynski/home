$(document).ready(function(){

    $('.smooth').click(function(e) {

        e.preventDefault();

        const targetElement = $(this).attr('href');
        const targetPosition = $(targetElement).offset().top;
        $('html, body').animate({scrollTop: targetPosition -50}, 'slow');
    });


	$(window).scroll(function() {

        const aboutItems = $('.about__block');
        const offerImage = $('.offer__image');
        const companyImage = $('.company__image');
        const textBlock = $('.text__block');
        const companyText = $('.company__text');

        function fadeAnimation(items, addClass) {

            if(window.pageYOffset > items.offset().top - $(window).height()+100){

                let index = 0;
                const delay = setInterval( function(){
                  if ( index <= items.length ){
                    $(items[index]).addClass(addClass);
                    index ++;
                  }else{
                    clearInterval(delay);
                  }
                }, 500 );
            }
        }

        fadeAnimation(aboutItems, 'fade-In');
        fadeAnimation(offerImage, 'slide-In-Left');
        fadeAnimation(companyImage, 'slide-In-Right');
        fadeAnimation(textBlock, 'fade-In');
        fadeAnimation(companyText, 'fade-In');
	});

})