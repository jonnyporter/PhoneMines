var app = angular.module('phoneMines', [])

app.controller('MainController', MainController);

function MainController(){
	var vm = this;
	function Phone(name, imageUrl, company, os, screenSize){
		this.name = name;
		this.imageUrl = imageUrl;
		this.company = company;
		this.os = os;
		this.screenSize = screenSize;
	}
	vm.phones = [
		new Phone('iPhone 6s', 'https://tctechcrunch2011.files.wordpress.com/2015/05/rose-gold-iphone6.jpg?w=738', 'Apple', 'iOS', '4.7 inches'),
		new Phone('Galaxy s6', 'http://i-cdn.phonearena.com/images/articles/172435-image/Samsung-Galaxy-S6-White-Pearl..jpg', 'Samsung', 'Android', '5.1 inches'),
		new Phone('Galaxy Note 5', 'http://www.att.com/catalog/en/skus/images/samsung-galaxy%20note5%2032gb-black%20sapphire-450x350.png?01AD=3eDWqRzfXF1baBYUnyTEHx_V_UhXzA-5fI6adtpVGZkFg2GnvMC9P_Q&01RI=E94500177213D34&01NA=', 'Samsung', 'Android', '5.7 inches')
	]
}