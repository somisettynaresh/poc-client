'use strict';


angular.module('webuiApp')
  .controller('MainCtrl', ['$rootScope','$scope','$http','$cookieStore','AUTH_EVENTS',function ($rootScope,$scope,$http,$cookieStore,AUTH_EVENTS) {
        $http.get("/poc-1.0/transactions").success(function(response){
            $scope.transactions = response;
            $scope.donutChartData = mapToDonut($scope.transactions);
            $scope.barChartData = mapToBarChart($scope.transactions);
        });

        $scope.expenseInterval =1;

        /*$scope.$watch('transactions', function() {
           alert('hey, myVar has changed!');
        });*/
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

        var mapToBarChart = function(transactions){
             var values= utils.aggregateByKeyValueAsArrays(transactions,"category","amount");

            var data = [{
                key:"spendings",
                values:values
            }];
            return data;
        }

        var mapToDonut = function(transactions){
             var values= utils.aggregateByKeyValueAsObjects(transactions,"category","amount");
            return values;
        }

       $scope.logout = function(){
            $cookieStore.put("user",undefined);
            $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated)
       }


       $scope.refreshData = function(){
            var currentDate = new Date();
            var chosenInterval = $scope.expenseInterval *1000*60*60*24*30;
            var transactions = $scope.transactions.filter(function(item){
                var interval = currentDate.getTime() - item.date;
                return chosenInterval - interval >= 0?true:false;
            })
            $scope.donutChartData = mapToDonut(transactions);
            $scope.barChartData = mapToBarChart(transactions);
       }
  }]);
