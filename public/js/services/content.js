app.factory('content', ['$http', function($http) { 
  return $http.get('json/content.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);

