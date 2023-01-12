$('#race a').on('click',function(){
    console.log($('#race a'))
$('#race a').each(function(i,e){
    $('#race a').eq(i).removeClass('active')
})
$(this).addClass('active')
})