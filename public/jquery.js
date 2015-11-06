$('.button, .iosButton, .reset').hover(function(){
	$(this).velocity({'border-radius': '30%'}, 100);
}, function(){
	$(this).velocity({'border-radius': '50%'}, 100);
})
$('.contract').on('click', function(){
	$('.iosButton').css('display', 'none');
})
$('.reset').on('click', function () {
	$('.sec1').fadeIn('slow');
	val1 = 0;
	val2 = 1;
	MainController.requestObject = {};
	$('.sonic').css('left', '46%');
	$('.sonic').css('visibility', 'hidden');
	$('.sec1').velocity({ 'left': '0%' })
	$('.phoneList').animate({ 'height': '0%' }, 500);
	$('body').css('background-color', '#1d2023');
})
var val1 = 0;
var val2 = 1;
$('.button').on('click', function () {
	$('.sec' + val1).fadeOut('slow');
	$('.sec' + val2).delay(650).fadeIn('slow');
	val1++;
	val2++
})
$('.final, .iosButton').on('click', function(){
	$('.sec' + val1).fadeOut('slow');
	$('.sonic').delay(1000).velocity({ 'left': '0%' });
	$('.sonic').delay(6000).velocity({ 'left': '-100%' });
	$('.reset').delay(8000).fadeIn('slow');
	setTimeout(function () {
		$('.sonic').css('visibility', 'visible')
	}, 1000);
	setTimeout(function () {
		$('body').css('background-color', 'white')
	}, 8000);
	setTimeout(function(){
	$('html, body').animate({
        scrollTop: $(".phoneList").offset().top
    }, 2000)}, 8000);
	$('.phoneList').delay(8000).animate({ 'height': '100%' }, 1000);
});

$('.reset').on('click', function(){
	$('.sonic').css('left', '100%');
	$('.phonelist').animate({'height': '0%'}, 1000);
	val1 = 0;
	val2 = 1;
	$('.sec' + val1).fadeIn('slow');
	$('.sec' + val2).css('display', 'none');
	$(this).fadeOut('fast');
})