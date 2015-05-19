angular
	.module('yodaApp')
	.controller('YodaController', YodaController);

	YodaController.$inject = ['$http'];

	function YodaController($http){
		var self = this;
		var targetString;
		var targetUrl;
		
		self.targetString = 'The force is strong with this one';
		self.yodaSentence = yodaSentence;

		function yodaSentence(string){
			var newString = [];
			for (var i = 0; i < string.length; i++){
				if (string[i] === " ") {
					// console.log(string[i])
					newString.push("+");
				}
				else {
					// console.log(string[i])
					newString.push(string[i])
				}
			}
			// console.log(newString);
			newString = newString.join("");
			return newString;
		}

		var endpoint = "https://yoda.p.mashape.com/yoda?sentence="+ yodaSentence(self.targetString);

		console.log(yodaSentence(self.targetString))
		console.log(endpoint)

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
			self.data = jsonWeGotBack;
			console.log(jsonWeGotBack);
			console.log("Success!");
			console.log(endpoint);
		}

		function errorMessage(){
			console.log("Something went wrong!");
		}

		self.getYodaSpeak = function(value){
			self.targetString = value.toString();
			endpoint = "https://yoda.p.mashape.com/yoda?sentence=" + yodaSentence(self.targetString);
			$http({
				method: 'GET',
				url: endpoint,
				headers: {
					"X-Mashape-Key": "UhaULRoXezmshqIzJXczVvhH3cMgp1hYQA6jsn0xFYyVjVhwyX",
					"Accept": "application/json"
				}
			})
			.success(renderData)
			.error(errorMessage);
		};
	}