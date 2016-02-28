var app = angular.module('all', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "../html/welcome.html"
    })
    .when("/results", {
      templateUrl: "../html/results.html"
    })
    .when("/tree", {
      templateUrl: "../html/tree.html"
    })
    .when("/editTree", {
      templateUrl: "../html/editTree.html"
      //,controller: "homeController",
      //controllerAs: "home"
    })
  }
]);

//Controller------------------------------------------
app.controller('mainController', function($http, treeService, searchService) {
  vm = this;

  treeService.treeObj().then(
    function success(response) {
      var treeArray = response.data;
      console.log('tree array');
      console.log(treeArray);
      vm.treeList = treeArray;
    });

  // vm.runSearch = function() {
  //   console.log('running search on ' + vm.searchTerm);
  //   searchService.searchObj().then(
  //     function success(response) {
  //       var searchArray = response.data;
  //       vm.postList = searchArray;
  //       if(searchArray.length === 0) {
  //         vm.searchErr = 'No results were found. Please try another search.';
  //       }
  //       else {
  //         vm.searchErr = '';
  //       };
  //     }
  //   );
  //   vm.searchTerm = '';
  // };
});

angular.module('all').factory('treeService', function($http) {
  var getTrees = function() {
    return $http({
      method: 'GET',
      url: '/trees'
    });
  }
  return {
    treeObj: function() {
      return getTrees();
    }
  };
});

angular.module('all').factory('searchService', function($http) {
  var submit = function() {
    // var mySearchObj = {}
    // if(vm.searchTerm == '') {
    //   mySearchObj = {}
    // }
    // else {
    //   console.log(vm.searchTerm);
    //   var condensedSrch = vm.searchTerm.toLowerCase()
    //   mySearchObj = {};
    // };
    // return $http({
    //   method: 'POST',
    //   url: '/search',
    //   data: {searchObj: mySearchObj}
    // });
  }
  return {
    searchObj: function() {
      return submit();
    }
  };
});