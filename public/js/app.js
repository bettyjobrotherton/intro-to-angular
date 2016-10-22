(function() {

  angular.module('intro', [])
         .controller('MainController', MainController);

  MainController.$inject = ['$scope']; //defines what tools that function needs

  function MainController ($scope){ //scope is our bridge to the DOM
    console.log('Now main controller');
    $scope.person = 'Bob';
    $scope.letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  }

}());
