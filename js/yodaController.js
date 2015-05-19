angular
	.module('weatherYodaApp')
	.controller('YodaController', YodaController);

	YodaController.$inject = ['$http'];

	function YodaController($http){
		var self = this;

		var targetUrl  = 'https://yoda.p.mashape.com/yoda';
		self.targetWord = 'The force is strong';
		var endpoint = targetURL + self.targetWord;

		var yodaSentence = function(string){
			for (var i = 0; i < string.length; i++){
				if (string[i] === " ") {
					string[i] = "+";
				}
			}

		};

		self.getJson = $http({
			method: 'GET',
			url: endpoint,
			headers: {
				"X-Mashape-Key": "UhaULRoXezmshqIzJXczVvhH3cMgp1hYQA6jsn0xFYyVjVhwyX",
				"Accept": "application/json"
			}
		})
		.success(renderData)
		.error(errorMessage);

		function renderData(jsonWeGotBack){
			self.data = jsonWeGotBack.definitions;
			console.log("Success!");
		}

		function errorMessage(){
			console.log("Something went wrong!");
		}

		self.getYodaSpeak = function(value){
			self.targetWord = value.toLowerCase();
			endpoint = targetUrl + self.targetWord;
			$http({
				method: 'GET',
				url: endpoint,
				headers: {
					"X-Mashape-Key": "UhaULRoXezmshqIzJXczVvhH3cMgp1hYQA6jsn0xFYyVjVhwyX",
					"Accept": "application/json"
				}
			})
			.success(renderData)
			.error(errorMessage)
		};
	}