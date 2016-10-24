(function() {
  angular.module('intro')//getter syntax
         .controller('MainController', MainController);

  MainController.$inject = ['$scope']; //defines what tools that function needs

  function MainController ($scope){ //scope is our bridge to the DOM
    console.log('Now main controller');
    $scope.person = 'Bob';
    $scope.letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    $scope.saySurprise = saySurprise;

    function saySurprise(person){
      alert('Hey ' + person + '... there is a clown behind you!');
    }
  }


}());
