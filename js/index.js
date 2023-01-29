$(document).on('click', 'a[href^="#"]', function(event) {
    event.perventDefault();

    $('html', body).animate({
        scrollTop: $($.attr(this,'href')).offset().top
    }, 5000);
});