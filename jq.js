$(document).ready(function() {
    $('.b1').click(function() {
        $('.box').toggle('slow');
        $('.b1').hide();
        $('.b2').toggle();
        $('.bubble1,.bubble2').css('opacity',1);
    });
    $('.b2').click(function() {
        $('.box').toggle('slow');
        $('.b2').hide();
        $('.b1').toggle();
    });
});