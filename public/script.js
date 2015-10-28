
var app = angular.module('PhoneMines', []);

app.controller('MainController', MainController);
function MainController($http, $timeout) {
	var vm = this;
	vm.phones = [];
	vm.finalPhones = [];
	vm.keywords = '';
	function Phone(name, image, link, num) {
		this.name = name;
		this.image = image;
		this.link = link;
		this.num = num;
	}
	vm.requestObject = {
		'browseNode': '',
		'category': 'Electronics',
		'keywords': '',
		'MaximumPrice': ''
	}
	$('.reset').on('click', function(){
		vm.requestObject = {};
	})
	vm.max = function(max){
		vm.requestObject['MaximumPrice'] = max;
		console.log(vm.requestObject);
	}
	vm.addKeyword = function(keyword){
		vm.requestObject['keywords'] += keyword + ' ';
		console.log(vm.requestObject);
	}
	vm.requestAdd = function(keywords, browseNode){
		vm.requestObject['browseNode'] = browseNode;
		vm.requestObject['keywords'] += keywords + ' ';
		console.log(vm.requestObject);
	}
	this.request = function () {
		$timeout(function () {
			$http.post('https://phonemines.herokuapp.com/search', vm.requestObject).then(function (data) {
				console.log(data);
				for (var i = 0; i <= 2; i++) {
					var attributes = data.data.ItemSearchResponse.Items[0].Item[i].ItemAttributes[0];
					var phone = new Phone(attributes.Title[0], data.data.ItemSearchResponse.Items[0].Item[i].ImageSets[0].ImageSet[0].LargeImage[0].URL[0], data.data.ItemSearchResponse.Items[0].Item[i].DetailPageURL[0], i)
					vm.phones.push(phone)
				};
				$timeout(function () {
					vm.phones.forEach(function (phone) {
						vm.finalPhones.push(phone)
					});
				}, 5000);
			}, function (err) {
				console.log('Cannot post.  Error:' + err);
			});
		}, 3000);
	};
	this.sendRequest = function () {
		$timeout(function () {
			vm.phones.forEach(function (phone) {
				vm.finalPhones.push(phone)
			});
		}, 5000);
	}
	this.reset = function () {
		vm.phones = [];
		vm.finalPhones = [];
		vm.keywords = '';
	}
}
var square = new Sonic(

	{

		width: 100,
		height: 50,

		stepsPerFrame: 1,
		trailLength: 1,
		pointDistance: .1,
		fps: 15,
		padding: 10,
		//step: 'fader',

		fillColor: 'coral',

		setup: function() {
			this._.lineWidth = 20;
		},

		path: [
			['line', 0, 20, 100, 20],
			['line', 100, 20, 0, 20]
		]
	});

square.play();
$('.select').append(square.canvas);
