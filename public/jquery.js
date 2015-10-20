// $('.button').hover(function () {
// 	$(this).velocity({ 'width': '200px', 'height': '200px' }, 150)
// }, function () {
// 	$(this).velocity({ 'width': '150px', 'height': '150px' }, 150)
// })
$('.button').hover(function(){
	$(this).velocity({'border-radius': '30%'}, 150)
}, function(){
	$(this).velocity({'border-radius': '50%'}, 150)
})



$('.reset').on('click', function () {
	$('.sonic').css('left', '46%');
	$('.sonic').css('visibility', 'hidden');
	$('.button').css('background-color', '');
	$('.button').velocity({ 'left': '0%' })
	$('.phoneList').animate({ 'height': '0%' }, 500);
	$('body').css('background-color', '#1d2023');
})
$('.button').on('click', function () {
	$('.button').velocity({ 'left': '-100%' });
	$('.sonic').css('visibility', 'visible');
	$('.sonic').velocity({ 'left': '0%' });
	$('.sonic').delay(7000).velocity({ 'left': '-100%' });
	$('.phoneList').delay(8000).animate({ 'height': '100%' }, 1000);
	setTimeout(function () {
		$('body').css('background-color', 'white')
	}, 8000);
	setTimeout(function(){
	$('html, body').animate({
        scrollTop: $(".phoneList").offset().top
    }, 2000)}, 8000);
})