$(document).ready(function(){
    var page = $("#root");
    var volume;
    var logoCreater = function(width, startPoint){
        $( "#colored-header div" ).each(function( index ) {
            var element = $(this);
            element.css("left", startPoint + "px" );
            startPoint += width;
        });
    }

    logoCreater(30, 10);

    page.find('.img-container').on('hover', function() {
        var container = $(this);
        container.find('.text').toggle();
    });

    page.find('#colored-header div').on("mouseenter", function() {
        var el = $(this);
        //console.log(el);
        el.height((parseFloat(el.height()) + 30) + 'px');
        var audio = $("#" + $(this)[0].id + "-note");
        audio[0].play();
    });

    page.find('#colored-header div').on("mouseleave", function() {
        var el = $(this);
        //console.log(el);
        el.height((parseFloat(el.height()) - 30) + 'px');
        var audio = $("#" + $(this)[0].id + "-note");
        audio[0].pause();
        audio[0].currentTime = 0;
    });
});
