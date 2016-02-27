var app = angular.module('all', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "../html/welcome.html"
    })
    .when("/searchPage", {
      templateUrl: "../html/search.html"
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
app.controller('mainController', function($http, userService, postService, searchService) {
  vm = this;
  userService.userObj().then(
    function success(response) {
      var username = response.data.local.username;
      vm.username = username;
    }
  );
  postService.postObj().then(
    function success(response) {
      var postArray = response.data;
      for (var i = 0; i < postArray.length; i++) {
        postArray[i].timeFromToday = timeSince(postArray[i].dateCreated);
      };
      vm.postList = postArray;
    }
  );

  vm.runSearch = function() {
    console.log('running search on ' + vm.searchTerm);
    searchService.searchObj().then(
      function success(response) {
        var searchArray = response.data;
        for (var i = 0; i < searchArray.length; i++) {
          searchArray[i].timeFromToday = timeSince(searchArray[i].dateCreated);
        };
        vm.postList = searchArray;
        if(searchArray.length === 0) {
          vm.searchErr = 'No results were found. Please try another search.';
        }
        else {
          vm.searchErr = '';
        };
      }
    );
    vm.searchTerm = '';
  };

  vm.findUser = function(username) {
    vm.searchTerm = username;
    vm.runSearch();
  }
});