(function() {
  'use strict';
  angular.module('LunchCheckApp',[])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.foodItems = "";
    $scope.message = "";

    $scope.checkLunchItems = function() {
      $scope.foodItems = $scope.foodItems.trim();
      if ($scope.foodItems == "")
      {
        $scope.message = "This function is to test the split function in AngularJS, assuming the food items in string format are concatenated with comma, no space in between comma, if there are more than three food items, then the message will give an alert, otherwise it will post an regular message. The code demonstrated the usage of controller in AngularJS";
        $scope.color = "red";
      }
      else {
        var re =/\s*,\s*/;

        var $arrayOfItems = $scope.foodItems.split(re);

        var $length = $arrayOfItems.length;
        if ($length <= 3) {
            $scope.message = "Enjoy!";
            $scope.color = "green";
        }
        else {
            $scope.message = "Too much!";
            $scope.color = "red";
        }
      }
    };
}
})();
