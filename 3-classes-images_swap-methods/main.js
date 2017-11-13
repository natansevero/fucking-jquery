$(document).ready(function() {
   
    // attr method
    $('p').attr('class', 'bootstrap-class')

    // image swap
    // $('img').attr('src', './../images/img2.jpg')
    $('img').fadeOut(500, function() {
        $(this).attr('src', './../images/img2.jpg').fadeIn(500);
    })

    // class methods
    // alert($('p:last').hasClass('lead'));
    // $('p:last').addClass('blue').removeClass('lead')
    // $('p:last').toggleClass('blue').removeClass('lead') // toggleClass => se tem, remove. Se não tem, add

    // content methods
    // $('p:first').text('hi everyone!')
    // $('p:first').html('hi everyone! <em>click me</em>')
    // alert($('input').val());
    alert($('input').val('oh baby, ooh man!'));

}); 