$(document).ready(function () {
    $('#menu-btn').click(function () {
        $('.mobile-navlink').css('display', 'flex');
    })

    $('#menu-close').click(function () {
        $('.mobile-navlink').css('display', 'none');
    })
});