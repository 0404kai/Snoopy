$(document).ready(function() {
    $('.b1').click(function() {
        $('.box').toggle('slow');
        $('.b1').hide();
        $('.b2').toggle();
        $('.b2').click(function() {
            $('.box').toggle('slow');
            $('.b2').hide();
            $('.b1').toggle();
        });
    });
});