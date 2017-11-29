$(document).ready(function() {
    options = $('main>div:first-child>div:last-of-type h2');             //column1 SlideDown
    optionsCol2 = $('main > div:nth-child(2) p').slice(-5);
    options.nextAll('div').hide();
    options.children('span').html('&#xf078;').css('cursor', 'pointer');
    options.css('cursor', 'pointer');
    optionsCol2.hide();
    options.click(function() {
        if($(this).next('div').css('display') == 'none') {
            $(this).nextAll('div').slideDown(300);
            $(this).children('span').html('&#xf077;');
            optionsCol2.hide().slideDown(300);
        }
        else {
            $(this).nextAll('div').slideUp(300);
            $(this).children('span').html('&#xf078;');
            optionsCol2.slideUp(300);
        }
        rangeStyles();
    });                                                                 //END column1 SlideDown
    $('menu a:has(.fa)').click(function() {                             //column3 Sorting
        $(this).hide();
        $(this).siblings().show();
    });                                                                 //END column3 Sorting
    $('aside:last-of-type span').click(function() {                     //column3 Aside
        $(this).addClass('selected');
        $(this).siblings().removeClass('selected');
    });                                                                 //END column3 Aside
    $('main>div:nth-child(3)>div .handler').click(function() {          //handler
      tryOn = $(this).parent().css('backgroundImage');
      tryOn = tryOn.slice(4, -1);
        $('figure img').fadeTo(600, 0, function () {
            $('figure img').replaceWith('<img src='+tryOn+' />');
            $('figure img').fadeOut(0);
            $('figure img').fadeIn(600);
        });
    });                                                                 //END handler
    $('main>div:nth-child(5) form:last-of-type').hide();                //formTrigger
    $('main>div:nth-child(5) .trigger').click(function() {
        $('main>div:nth-child(5) form').each(function() {
            if($(this).css('display') == 'none') {
                $(this).slideDown(300);
            }
            else {
                $(this).slideUp(300);
            }
        });
    });                                                                //END formTrigger
    $('input[type=range]').mousedown(function() {                      //range
      target = $('main>div:nth-child(2) div:first-child img');
      index = $(this).parent().index();
        target.each(function () {
            if($(this).index() == index) {
                $(this).fadeIn(600);
              vis = $(this);
            }
        });
    });
    $('input[type=range]').mouseup(function() {
        vis.fadeOut(600);
    });
    $('input[type=range]').siblings('a:first-of-type').click(function() {
        changeValMinus = $(this).siblings('input[type=range]').val();
        $(this).siblings('input[type=range]').val(+changeValMinus - 1);
        $(this).parent().children('p').children('input').val(+changeValMinus - 1);
        rangeStyles();
    });
    $('input[type=range]').siblings('a:last-of-type').click(function() {
        changeValPlus = $(this).siblings('input[type=range]').val();
        $(this).siblings('input[type=range]').val(+changeValPlus + 1);
        $(this).parent().children('p').children('input').val(+changeValPlus + 1);
        rangeStyles();
    });                                                              //END range
    $('main div .overlay').show();                                   //overlay
    $('input[type=range]').change(function(){
        $('main div:nth-of-type(3) .overlay').hide();
    });
    $('main>div:nth-child(3)>div .handler').click(function() {
        $('main div .overlay').hide();
    });                                                             //END overlay
    rangeStyles = function() {                                      //ranestyles
        $('input[type=range]').each(function() {
            rangeWidth = $(this).width();
            minVal = $(this).attr('min');
            maxVal = $(this).attr('max');
            diapason = (maxVal - minVal);
            presentVal = $(this).val();
            diaVal = (presentVal - minVal);
            hrWidth = ((rangeWidth / diapason) * diaVal);
            $(this).css({'border-color':'transparent', 'background-color':'transparent'});
            $(this).prev('hr').width(hrWidth).css('opacity', 1);
            $(this).prev('hr').prev('hr').css('opacity', 1);
            $(this).parent().children('p').children('input').val(presentVal);
        });
    };
    rangeStyles();
    $('input[type=range]').on('input mousedown', function() {
        rangeWidth = $(this).width();
        minVal = $(this).attr('min');
        maxVal = $(this).attr('max');
        diapason = (maxVal - minVal);
        presentVal = $(this).val();
        diaVal = (presentVal - minVal);
        hrWidth = ((rangeWidth / diapason) * diaVal);
        $(this).prev('hr').width(hrWidth);
        $(this).parent().children('p').children('input').val(presentVal);
    });
    $('main > div:first-child input[type=text]').change(function() {
        $(this).parent().parent().children('input[type=range]').val($(this).val());
        rangeStyles();
    });                                                         //END ranestyles
    $('.callMod').click(function () {                               //call Modal
        $('main > div:nth-child(6)').show();
    });
    $('main > div:nth-child(6) .animatedButton').click(function () {
        $(this).parent().hide();
    });
});