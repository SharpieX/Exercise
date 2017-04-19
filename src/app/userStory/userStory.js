/**
 * Created by sharpie on 14/04/17.
 */

angular.module('app')
  .directive('userStory', function () {
    return {
      restrict: 'EA', //E = element, A = attribute, C = class, M = comment
      templateUrl: 'app/userStory/userStory.html',
      controller: function ($scope) {
        $scope.showContent = function ($fileContent) {
          $scope.content = $fileContent;
        };
        $scope.download = function(){
          var formattedString= "";
          const allLines = $scope.content.split(/\r\n|\n/);
          var string;
          for (var i = 0; i < allLines.length;) {
            if (allLines[i] && allLines[i + 1] && allLines[i + 2]) {
              string = allLines[i] + "\n" + allLines[i + 1] + "\n" + allLines[i + 2];
              formattedString = formattedString + "\n" + parseDigital(string)
            }
            i = i + 4;
          }
          downloadFile($scope.fileName+".txt",formattedString);
        }
      }
    }
  });

function downloadFile(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}


function parseDigital(digital) {
  return digital.split('\n').reduce(function (r, a, i) {
    a.match(/.../g).forEach(function (b, j) {
      r[j] = r[j] || [];
      r[j][i] = b;
    });
    return r;
  }, []).map(function (a) {
    return a.join('');
  }).map(function (a) {
    var bits = {63: 0, 6: 1, 91: 2, 79: 3, 102: 4, 109: 5, 125: 6, 7: 7, 127: 8, 111: 9, 0: ' '},
      v = '909561432'.split('').reduce(function (r, v, i) {
        return r + (a[i] !== ' ' && 1 << v);
      }, 0);
    return v in bits ? bits[v] : '*';
  }).join('');
}
