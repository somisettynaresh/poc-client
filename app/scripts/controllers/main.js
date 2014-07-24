'use strict';


angular.module('webuiApp')
  .controller('MainCtrl', ['$scope','$http',function ($scope,$http) {
        $http.get("/poc-1.0/transactions").success(function(response){
            $scope.transactions = response;
            $scope.barChartData = mapToBarChart();
        });

        $scope.donutXFunction = function(){
            return function(d){
                return d.category;
            }
        }
        $scope.donutYFunction = function(){
            return function(d){
                return d.amount;
            }
        }

        var mapToBarChart = function(){
            var i=0;
            var start = {};
            start[$scope.transactions[0].category] =$scope.transactions[0].value;
            var values = _.reduce($scope.transactions,function(result,item,key){
               /* if(!scope.transactions)
                return [item.category,item.amount];*/

                result[item.category]] = value[result[item.category]] + item.amount


                return value;
             },start );

            values = _.map($scope.transactions,function(item){
                return [item.category,item.amount];
            });
            var data = [{
                key:"spendings",
                values:values
            }];
            return data;
        }

  }]);
