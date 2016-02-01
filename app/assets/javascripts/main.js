jQuery(document).ready(function($){
    var	scrolling = false;
    var contentSections = $('.cd-section'),
        verticalNavigation = $('.cd-vertical-nav'),
        navigationItems = verticalNavigation.find('a'),
        navTrigger = $('.cd-nav-trigger'),
        scrollArrow = $('.cd-scroll-down');

    $(window).on('scroll', checkScroll);

    //smooth scroll to the selected section
    verticalNavigation.on('click', 'a', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
        verticalNavigation.removeClass('open');
    });

    //smooth scroll to the second section
    scrollArrow.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    // open navigation if user clicks the .cd-nav-trigger - small devices only
    navTrigger.on('click', function(event){
        event.preventDefault();
        verticalNavigation.toggleClass('open');
    });

    function checkScroll() {
        if( !scrolling ) {
            scrolling = true;
            (!window.requestAnimationFrame) ? setTimeout(updateSections, 300) : window.requestAnimationFrame(updateSections);
        }
    }

    function updateSections() {
        var halfWindowHeight = $(window).height()/2,
            scrollTop = $(window).scrollTop();
        contentSections.each(function(){
            var section = $(this),
                sectionId = section.attr('id'),
                navigationItem = navigationItems.filter('[href^="#'+ sectionId +'"]');
            ( (section.offset().top - halfWindowHeight < scrollTop ) && ( section.offset().top + section.height() - halfWindowHeight > scrollTop) )
                ? navigationItem.addClass('active')
                : navigationItem.removeClass('active');
        });
        scrolling = false;
    }

    function smoothScroll(target) {
        $('body,html').animate(
            {'scrollTop':target.offset().top},
            300
        );
    }
});






//jQuery is required to run this code
$( document ).ready(function() {

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
        windowHeight = $(window).height() + 5,
        videoWidth,
        videoHeight;

    console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}