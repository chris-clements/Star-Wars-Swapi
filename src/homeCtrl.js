angular.module("Starship")
  .controller("homeCtrl", function ($scope, starshipService) {

    $scope.people = [];
    $scope.starships = [];

    $scope.getPeople = function () {

      starshipService
        .getCharacters()
        .then(function (people) {
          $scope.people = people.data.results;
        })

    }
    $scope.getPeople();

    $scope.getStarships = function (urlArray) {
      $scope.starships = [];
      starshipService
        .getStarships(urlArray)
        .then(function (starships) {
          $scope.starships = starships;
        })
    }

    $scope.getNextPage = function () {
      starshipService
        .getNextPage()
        .then(function (people) {
          $scope.people = people.data.results;
        });
    }

  })