'use strict';

(function (window, angular, undefined) {
	function Ramda() {
		return window.R;
	}

	angular.module('Ramda', []).factory('R', Ramda);
})(window, window.angular);