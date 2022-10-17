
$('#spacing').on('change', function () {
    var v = $(this).val();
    $('.mainImg').css('padding-left', v + '2px')
   
});



$('#base').on('change', function () {
    var v = $(this).val();
    $('body').css('background-color', v)
   
});

$('#blur').on('change', function () {
    var v = $(this).val();
    $('.mainImg').css('filter', 'blur('+ v + 'px)')
   
});