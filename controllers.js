//controller
weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {
    
    $scope.city = cityService.city;
    
    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    });
    
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService) {
    
    $scope.city = cityService.city;   
    
    $scope.days = $routeParams.days || '2';
    
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily");
                          
    $scope.weatherResult = $scope.weatherAPI.get({ appid: "ca90dac154b70536740144f2abbe5bb5", q: $scope.city, cnt:  $scope.days });
    
    $scope.convertToCelcius = function(tempK) {
        return Math.round(tempK - 273.15);  
    };
    
    $scope.convertToDate = function(dt) {
        return new Date(dt * 1000);
    }
    
}]);