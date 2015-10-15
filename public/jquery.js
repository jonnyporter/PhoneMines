$('.button').hover(function(){
	$(this).animate({'width': '150px', 'height': '150px'}, 150)
}, function(){
	$(this).animate({'width': '100px', 'height': '100px'}, 150)
})