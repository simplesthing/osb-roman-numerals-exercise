'use strict';

(function(window, angular, undefined) {
	function  RomanNumeralController(RNS){
		var model = this;

		model.convert = function(number){
			model.rn = RNS.integerToRomanNumeral(number);
		};
	}

	RomanNumeralController.$inject = ['RomanNumeralService'];

	angular.module('roman-numerals')
	.controller('RomanNumeralController', RomanNumeralController);
  
})(window, window.angular);