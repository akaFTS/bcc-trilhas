angular.module("yggdrasil", [])

.controller("AppCtrl", function($scope) {

    $scope.selectSkill = function() {
        $scope.isSelected = !$scope.isSelected;
    }

    $scope.deselect = function () {
        $scope.isSelected = false;
    }
})