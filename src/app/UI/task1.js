/**
 * Created by sharpie on 13/03/17.
 */
angular.module('app')
  .directive('booking', function () {
    return {
      restrict: 'EA', //E = element, A = attribute, C = class, M = comment
      templateUrl: 'app/UI/task1.html',
      controller: controllerFunction, //Embed a custom controller in the directive
      link: function ($scope, element, attrs) { } //DOM manipulation
    }
  });

 var controllerFunction = function(){

 }
