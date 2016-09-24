(function () {
  'use strict';

  angular.module('CheckIfTooMuch', [])
  .controller('CheckCtrllr', CheckCtrllr);

  CheckCtrllr.$inject = ['$scope'];

  function CheckCtrllr($scope) {
    $scope.dishes = "";
    $scope.message = "";
    $scope.messageColor = "";
    $scope.textBorderColor = "";

    $scope.CheckIt = function () {
      var number = numberOfDishes($scope.dishes);

      if(number === 0){
        $scope.message = "Please enter data first.";
        $scope.messageColor = "red";
        $scope.textBorderColor = "red";
      } else if(number > 3){
        $scope.message = "Too Much!";
        $scope.messageColor = "green";
        $scope.textBorderColor = "green";
      } else if(number <= 3){
        $scope.message = "Enjoy!";
        $scope.messageColor ="green";
        $scope.textBorderColor = "green";
      }

    };

    function numberOfDishes(dishes){
      if(dishes === "") {
        return 0;
      } else {
        return dishes.trim().split(",").length;
      }
    };

  }

}) ();
