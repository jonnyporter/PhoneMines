$('.button').hover(function(){
	$(this).velocity({'width': '200px', 'height': '200px'}, 150)
}, function(){
	$(this).velocity({'width': '150px', 'height': '150px'}, 150)
})
$('.button').on('click', function(){
	$(this).css('background-color', 'lightgreen');
})
$('.reset').on('click', function(){
	$('.button').css('background-color', '');
})
$('.find').on('click', function(){
	$('.phoneList').animate({'height': '100%'}, 1000);
	$('body').css('background-color', 'white')
	$('html, body').animate({
        scrollTop: $(".phoneList").offset().top
    }, 2000);
})