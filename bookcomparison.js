
angular.module('app', [])
  .controller('mainCtrl', mainCtrl)
  .directive('comparison', comparisonDirective);


function mainCtrl ($scope) {
    
    $scope.bookForms = [];
     
     $scope.addNew = function (bookForm) {
         $scope.bookForms.push({
             name: bookForm.name,
             email: bookForm.email,
             comparisonUrl: bookForm.url
         }); /* [1] */
         
         bookForm.name = '';
         bookForm.url = '';
     };
}

 
function comparisonDirective () {
    return {
        scope: {
            bookForm: '=' 
        },
        restrict: 'E', 
        replace: 'true',
        template: (
            '<div class="Comparison">' +
             '<img ng-src="{{bookForm.comparisonUrl}}" />' +
             '<h4>{{bookForm.first}}</h4>' +
             '<h4>{{bookForm.second}}</h4>' +
            '</div>'
        ), /* [3] */
    link: link
    };
    
    function link (scope) { /* [4] */
        if (!scope.bookForm.comparisonUrl) {
            scope.bookForm.comparisonUrl = 'https://www.drupalorg/files/issues/default-avatar.png';
        }
    }
}
    
