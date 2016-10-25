(function() {
  angular.module('intro')//getter syntax
         .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'TodoService']; //defines what tools that function needs

  function MainController ($scope, TodoService){
                          //scope is our bridge to the DOM
    //n
    $scope.todos = TodoService.get();
    $scope.createTodo = createTodo;

    function createTodo(newTodo){
      TodoService.create(newTodo);
      $scope.newTodo = ' ';
    }
  }


}());
