
var app = angular.module('PhoneMines', []);

app.controller('MainController', MainController);
function MainController($http) {
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
	this.request = function (keyword) {
		vm.keywords += ',' + keyword;
		$http.post('http://localhost:1337/search.html', {
			'category': 'Electronics',
			'keywords': vm.keywords
		}).then(function (data) {
			for (var i = 0; i <= 5; i++) {
				var attributes = data.data.ItemSearchResponse.Items[0].Item[i].ItemAttributes[0];
				var phone = new Phone(attributes.Title[0], attributes.Manufacturer[0], data.data.ItemSearchResponse.Items[0].Item[i].ImageSets[0].ImageSet[0].LargeImage[0].URL[0], attributes.Feature.join('.  '))
				vm.phones.push(phone);
			}
		}, function (err) {
			console.log('Cannot post.  Error:' + err);
		});
	};
	this.sendRequest = function () {
		vm.phones.forEach(function (phone) {
			vm.finalPhones.push(phone)
		});
	}
	this.reset = function(){
		vm.phones = [];
		vm.finalPhones = [];
		vm.keywords = '';
	}
}
