$(document).ready(function(){
    var page = $(document);

//    START OF LOGO CREATER
    var volume;
    var logoCreater = function(width, startPoint){
        $( "#colored-header div" ).each(function( index ) {
            var element = $(this);
            element.css("margin-left", startPoint + "px" );
            startPoint += width;
        });
    }

    logoCreater(30, 10);
    page.find('#colored-header div').on("mouseenter", function() {
        var el = $(this);

        el.height((parseFloat(el.height()) + 32) + 'px');
        var audio = $("#" + $(this)[0].id + "-note");
        audio[0].play();
    });

    page.find('#colored-header div').on("mouseleave", function() {
        var el = $(this);
        el.height((parseFloat(el.height()) - 28) + 'px');
        var audio = $("#" + $(this)[0].id + "-note");
        audio[0].pause();
        audio[0].currentTime = 0;
    });
//    END LOGO CREATER


    // Disable scroll
    // lock scroll position, but retain settings for later
    var scrollPosition = [
        self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
        self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
    ];
    var html = jQuery('html'); // it would make more sense to apply this to body, but IE7 won't have that
    html.data('scroll-position', scrollPosition);
    html.data('previous-overflow', html.css('overflow'));
    html.css('overflow', 'hidden');
    window.scrollTo(scrollPosition[0], scrollPosition[1]);
    // un-lock scroll position

//    start of PARALLAX
    var html = jQuery('html');
    var scrollPosition = html.data('scroll-position');
    html.css('overflow', html.data('previous-overflow'));
    window.scrollTo(scrollPosition[0], scrollPosition[1])
    //initialise Stellar.js
    $(window).stellar();

    //Cache some variables
    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.button');
    var mywindow = $(window);
    var htmlbody = $('html,body');


    //Setup waypoints plugin
    slide.waypoint(function (event, direction) {

        //cache the variable of the data-slide attribute associated with each slide
        var dataslide = $(this).attr('data-slide');

        //If the user scrolls up change the navigation link that has the same data-slide attribute as the slide to active and
        //remove the active class from the previous navigation link
        if (direction === 'down') {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        }
        // else If the user scrolls down change the navigation link that has the same data-slide attribute as the slide to active and
        //remove the active class from the next navigation link
        else {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
        }

    });

    //waypoints doesnt detect the first slide when user scrolls back up to the top so we add this little bit of code, that removes the class
    //from navigation link slide 2 and adds it to navigation link slide 1.
    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('.navigation li[data-slide="1"]').addClass('active');
            $('.navigation li[data-slide="2"]').removeClass('active');
        }
    });

    //Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
    //easing plugin is also used, so we passed in the easing method of 'easeInOutQuint' which is available throught the plugin.
    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 2000, 'easeInOutQuint');
    }



    //When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    //When the user clicks on the button, get the get the data-slide attribute value of the button and pass that variable to the goToByScroll function
    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);

    });
//    END PARALLAX
//
//    $(".slide-container").bind('touchstart', function (ev) {
//        if ($(this).scrollTop() === 0) $(this).scrollTop(1);
//        var scrollTop = document.getElementById('scroller').scrollTop;
//        var scrollHeight = document.getElementById('scroller').scrollHeight;
//        var offsetHeight = document.getElementById('scroller').offsetHeight;
//        var contentHeight = scrollHeight - offsetHeight;
//        if (contentHeight == scrollTop) $(this).scrollTop(scrollTop-1);
//
//    });


    page.find('#anonim').change(function(){
        page.find('.to_hide').each(function(){
            $(this).toggle();
        })
    });





//    ========================================================FACEBOOK================================================






});
