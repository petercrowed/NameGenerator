var myApp = angular.module('myApp', []);

myApp.controller('WarriorNameGenerator', function($scope, generateWarriorName) {

	$scope.name = generateWarriorName.generateWarriorName();
    $scope.myFunc = function() {
	$scope.name = generateWarriorName.generateWarriorName();
    }
});
