
var app = angular.module('PhoneMines', []);

app.controller('MainController', MainController);
function MainController($http, $timeout) {
	var vm = this;
	vm.phones = [];
	vm.finalPhones = [];
	vm.keywords = '';
	function Phone(name, make, image, features) {
		this.name = name;
		this.make = make;
		this.image = image;
		this.features = features;
	}
	vm.requestObject = {
		'browseNode': '',
		'category': 'Electronics',
		'keywords': '',
		'MaximumPrice': ''
	}
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
			$http.post('http://localhost:1337/search.html', vm.requestObject).then(function (data) {
				console.log(data);
				for (var i = 0; i <= 5; i++) {
					var attributes = data.data.ItemSearchResponse.Items[0].Item[i].ItemAttributes[0];
					var phone = new Phone(attributes.Title[0], attributes.Manufacturer[0], data.data.ItemSearchResponse.Items[0].Item[i].ImageSets[0].ImageSet[0].LargeImage[0].URL[0], attributes.Feature.join('.  '))
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
var square = new Sonic({

	width: 100,
	height: 50,
	padding: 10,

	stepsPerFrame: 2,
	trailLength: 1,
	pointDistance: .03,

	strokeColor: '#FF7B24',

	step: 'fader',

	multiplier: 2,

	setup: function () {
		this._.lineWidth = 5;
	},

	path: [

		['arc', 10, 10, 10, -270, -90],
		['bezier', 10, 0, 40, 20, 20, 0, 30, 20],
		['arc', 40, 10, 10, 90, -90],
		['bezier', 40, 0, 10, 20, 30, 0, 20, 20]
	]
});

square.play();
$('.select').append(square.canvas);
