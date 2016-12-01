app.controller('ContentController', ['$scope', 'content', function ($scope, content) {
    content.success(function (data) {
        $scope.tiles = data.tiles;
    });
    $scope.filteredValue = "";
}]);