'use strict';

mainAngularApp.controller('mvLearnCtrl',['$scope','$log','$filter','$http','teamsA',function($scope,$log,$filter,$http,teamsA){
  $scope.title = 'Learn and understand AngularJS ';
  $scope.how = function(time,speed){
    return time/speed;
  };
  $scope.filtering = $filter('uppercase')($scope.title);

  $scope.handle ='';

  $scope.characters = 5;
  // Simple GET request example :
  $http.get('comicvine/all_teams_details.json').
    success(function(data, status, headers, config) {
      // this callback will be called asynchronously
      // when the response is available
      $scope.teams = data;
      $scope.elses = angular.forEach($scope.teams,function(value,index){
                $log.log(value);
                $log.log(index);
                $scope.value = value;
                $scope.index = index;

            });
      }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
  });
  $log.log(teamsA.name);
  $log.log('log');
  $log.info($scope.filtering);
  $log.warn('Warning');
  $log.debug('Some Debugging ?');
  $log.error('huge mistake');

}]);

