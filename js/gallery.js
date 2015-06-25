$(document).ready(function() {
    $('#siteContainer').fadeIn();

    $('.backButton').on('click', function() {
        $('#siteContainer').fadeOut();
        setTimeout(function() {
            window.location.href = 'index.html';
        }, 500);
    });

});
