/* global data */
var app = angular.module('PhoneMines', []);

app.controller('MainController', MainController);
function MainController($http) {
	var vm = this;
	function Phone(name, make, image, features, os) {
		this.name = name;
		this.make = make;
		this.image = image;
		this.features = features;
	}
	this.request = function (keyword) {
		$http.post('http://localhost:1337/search.html', {
			'category': 'Electronics',
			'keywords': keyword
		}).then(function (data) {
			vm.phones = [];
			for (var i = 0; i <= 5; i++) {
				var attributes = data.data.ItemSearchResponse.Items[0].Item[i].ItemAttributes[0];
				var phone = new Phone(attributes.Title[0], attributes.Manufacturer[0], data.data.ItemSearchResponse.Items[0].Item[i].ImageSets[0].ImageSet[0].LargeImage[0].URL[0], attributes.Feature.join('.  '))
				vm.phones.push(phone);
			}
		}, function (err) {
			console.log('Cannot post.  Error:' + err);
		});
	};
}
