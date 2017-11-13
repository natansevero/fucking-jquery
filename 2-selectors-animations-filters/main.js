$(document).ready(function() {
    
    // seletores basicos
    // $('p').css('border', '4px solid red');
    // $('p.lead').css('border', '4px solid red');
    // $('#lesson-1').css('border', '4px solid red');
    // $('*').css('border', '4px solid red');

    // animações basicas
    // $('.box:first').hide(500).delay(300).show(800);
    // $('.box:first').slideUp(500).show(800);
    // $('.box:first').slideUp(500).slideDown(800);
    // $('.box:first').fadeOut(500).slideDown(800);

    // $('.box:first').animate({ height: '200px' }, 700);
    // $('.box:first').animate({ 'height': '200px', 'margin-left': '200px' }, 700);

    // indexar filtros
    // $('p:first').css('border', '4px solid red');
    // $('p:last').css('border', '4px solid red');
    // $('p:eq(0)').css('border', '4px solid red'); // igual a 0    
    // $('p:gt(1)').css('border', '4px solid red'); // maior que 1
    // $('p:lt(3)').css('border', '4px solid red'); // menor a 3
    
    // relacionamentos de filtros - relacionamentos de elementos DOM
    // $('h2').css('border', '4px solid red');
    // $('h2:has(span)').css('border', '4px solid red');
    // $('.box:parent').css('border', '4px solid red'); // apenas as .box que possuem filhos
    // $('.box:empty').css('border', '4px solid red'); // apenas as .box que NÃO possuem filhos
    
    // filtros de atributos
    // $('p[name=shorty]').css('border', '4px solid red');
    $('p[name^=shor]').css('border', '4px solid red');
    
}); 