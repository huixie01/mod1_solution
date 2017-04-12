(function() {
  'use strict';
  angular.module('LunchCheckApp',[])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    var re =/\s*,\s*/;
  //  console.log($scope);
  //  var arrayOfItems = $scope.menuitems.split(re);
    $scope.sayMessage = function() {
      //if (arrayOfItems.length <= 3)
        return "Enjoy!";
      //elseif (arrayOfItems.length > 3)
      //  return "Too much!";

      //return "Please enter data first";
    }
})();
