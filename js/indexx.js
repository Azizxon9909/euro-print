$('.section2').waypoint(function(direction){
    if (direction =="down"){
        $('nav').addClass(' stickyNav');
    }else
    {
        $('nav').removeClass(' stickyNav');
    }
},{
    offset: '60%'
});

$('.section2').waypoint(function(direction){
    $('.section2').addClass('fade-in');
},{
    offset: '30%'
});

$('.section3').waypoint(function(direction){
    $('.section3').addClass('fade-in');
},{
    offset: '30%'
});

$('.section4').waypoint(function(direction){
    $('.section4').addClass('fade-in');
},{
    offset: '30%'
});

$('.section5').waypoint(function(direction){
    $('.section5').addClass('fade-in');
},{
    offset: '30%'
});

$('.section6').waypoint(function(direction){
    $('.section6').addClass('fade-in');
},{
    offset: '30%'
});
$('.section7').waypoint(function(direction){
    $('.section7').addClass('fade-in');
},{
    offset: '30%'
});
$('.section8').waypoint(function(direction){
    $('.section8').addClass('fade-in');
},{
    offset: '30%'
});
// $('.section9').waypoint(function(direction){
//     $('.section9').addClass('fade-in');
// },{
//     offset: '30%'
// });