// 	$('.sonic').css('visibility', 'visible');
// 	$('.sonic').velocity({ 'left': '0%' });
// 	$('.sonic').delay(7000).velocity({ 'left': '-100%' });
// 	setTimeout(function () {
// 		$('body').css('background-color', 'white')
// 	}, 8000);
// 	setTimeout(function(){
// 	$('html, body').animate({
//         scrollTop: $(".phoneList").offset().top
//     }, 2000)}, 8000);
// 	$('.phoneList').delay(8000).animate({ 'height': '100%' }, 1000);


$('.reset').on('click', function () {
	$('.sec1').fadeIn('slow');
	val1 = 0;
	val2 = 1;
	MainController.requestObject = {};
// 	$('.sonic').css('left', '46%');
// 	$('.sonic').css('visibility', 'hidden');
// 	$('.sec1').velocity({ 'left': '0%' })
// 	$('.phoneList').animate({ 'height': '0%' }, 500);
// 	$('body').css('background-color', '#1d2023');
})
var val1 = 0;
var val2 = 1;
$('.button').on('click', function () {
	$('.sec' + val1).fadeOut('slow');
	$('.sec' + val2).delay(500).fadeIn('slow');
	val1++;
	val2++
})