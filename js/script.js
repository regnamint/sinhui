$(document).ready(function () {

    $('#menu-btn').click(function () {
        $('.mobile-navlink').css('display', 'flex');
    })

    $('#menu-close').click(function () {
        $('.mobile-navlink').css('display', 'none');
    })

    $('.resume').click(function() {
        $('#resume-modal').show();
    })

    $('.modal-close').click(function() {
        $('#resume-modal').hide();
    })
});