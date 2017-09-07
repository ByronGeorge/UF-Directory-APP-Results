angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.myVar = false;

    $scope.parJson = function(json){
      return JSON.parse(json);
    }

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    $scope.addListing = function() {
      $scope.addListingModel = {
        "code": $scope.code_,
        "name": $scope.name_,
        "coordinates":{
          "latitude": $scope.latitude_,
          "longitude": $scope.longitude_
        },
        "address": $scope.address_
      };
      $scope.code_ = " ";
      //$scope.listings.concat([code: $scope.code_]);
      $scope.name_ = " ";
      $scope.listings.push($scope.addListingModel);

    };
    $scope.deleteListing = function(index) {
      var indx = $scope.listings.indexOf(index);
      $scope.listings.splice(indx, 1);
    };
    $scope.showDetails = function(index) {
      $scope.myVar = true;
      var indx = $scope.listings.indexOf(index);
      var detailInfo = $scope.listings[indx];

      //var parsedJSON = JSON.parse(detailInfo);

      $scope.codes_ = detailInfo.code;
      $scope.names_ = detailInfo.name;
      $scope.latitudes_ = detailInfo.coordinates.latitude;
      $scope.longitudes_ = detailInfo.coordinates.longitude;
      $scope.addresss_ = detailInfo.address;

      //$scope.listings[indx];

    };

  }
]);
