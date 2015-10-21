
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
	this.request = function (browseNode, keyword) {
		$timeout(function () {
			vm.keywords += ',' + keyword;
			$http.post('http://localhost:1337/search.html', {
				'category': 'Electronics',
				'keywords': vm.keywords,
				'browseNode': browseNode
			}).then(function (data) {
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
