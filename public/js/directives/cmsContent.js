app.directive('cmsContent', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      model: '=ngModel' 
    }, 
    templateUrl: 'js/directives/card.html' 
  }; 
});