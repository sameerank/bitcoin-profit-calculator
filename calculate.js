(function () {

  var bitcoinCalculator = angular.module('bitcoinCalculator', ['nvd3ChartDirectives']);
  bitcoinCalculator.controller('bitcoinController', function($scope, $http) {
    $http.get("https://bitpay.com/api/rates")
    .success(function (data) {

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
      $scope.xAxisTickFormatFunction = function(){
        return function(date){
          return d3.time.format('%x')(new Date(date));
        };
      };

      $scope.bitcoinHistoricalData = [{
        "key": "Price of BTC (USD)",
        "values": values
      }];

    });
  });
})();
