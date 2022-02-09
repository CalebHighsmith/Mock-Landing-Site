$(function(){
    $(".btn").click(function(){
        $(".submenu").slideToggle(500);
    });
});

$(document).ready(function(){
    $(".btn").hover(function() {
            $(this).css('background-color' , 'black');

    }, function(){
        $(this).css('background-color' , '#468486');
    })});