(function () {

  var bitcoinCalculator = angular.module('bitcoinCalculator', ['nvd3ChartDirectives']);
  bitcoinCalculator.controller('bitcoinController', function($scope, $http) {
    $http.get("https://bitpay.com/api/rates")
    .success(function (data) {

      $scope.rates = data;
      $scope.currRate = data.filter(function(object) {
        return object.code === "USD"
      })[0].rate;
      $scope.initialAmt = 5000;
      $scope.newAmt = function (price) {
        return price / $scope.currRate * $scope.initialAmt;
      };
      $scope.profit = function (price) {
        return price / $scope.currRate * $scope.initialAmt - $scope.initialAmt;
      };

      $scope.exampleData = [{
        "key": "Quantity",
        "bar": true,
        "values": [
          [10, 20],
          [20, 40],
          [30, 60],
          [40, 80],
          [50, 100]
        ]
      }];

    });
  });

})();
