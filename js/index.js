/*$(document).on('click', 'a[href^="#"]', function(event) {
    if (target.is $(".inline-block")){
        event.preventDefault(); 
    }
    var hash = this.hash;


    $('html', body).animate({
        scrollTop: $($.attr(this,'href')).offset().top
    }, 1000);
});*/

$(document).on('click', 'a[href^="#"]', function(event) {
   
    event.preventDefault();

    $('html', body).animate({
        scrollTop: $($.attr(this,'href')).offset().top
    }, 1000);

});