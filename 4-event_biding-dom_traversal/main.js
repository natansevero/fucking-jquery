$(document).ready(function() {
   
    // dom traversal
    // $('h2').children().css('border', '4px solid red');
    // $('h2').parents().css('border', '4px solid red');
    // $('h2').parents('section').css('border', '4px solid red');
    // $('h2').siblings().css('border', '4px solid red'); // siblings => irmãoes
    // $('h2').siblings('p:first').css('border', '4px solid red'); // dos irmãoes de 'h2', get p:first
    // $('h2').siblings('p').last().css('border', '4px solid red'); // dos irmãoes de 'h2', get p:first
    // $('h2').siblings('p').first().css('border', '4px solid red'); // dos irmãoes de 'h2', get p:first
    $('h2').parents().siblings('header').css('border', '4px solid red'); // dos irmãoes de 'h2', get p:first
    
    // event biding
    // $('h2').bind('click', function() {
        // $(this).toggleClass('blue');
    // })

    // $('h2').click(function() {
    //     $(this).toggleClass('blue');
    // })
    
    $('h2').hover(function() {
        $(this).toggleClass('blue');        
    })
}); 