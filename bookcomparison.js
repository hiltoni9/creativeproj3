
angular.module('app', [])
  .controller('mainCtrl', mainCtrl)
  .directive('comparison', comparisonDirective);


function mainCtrl ($scope) {
    
    $scope.bookForms = [];
     
     $scope.addNew = function (bookForm) {
         $scope.bookForms.push({
             first: bookForm.first,
             second: bookForm.second,
         }); /* [1] */
         
         bookForm.first = '';
         bookForm.second = '';
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
             '<h4>{{bookForm.first}}</h4>' +
             '<h4>{{bookForm.second}}</h4>' +
            '</div>'
        )//,
    //link: link
    };
    
   /* function link (scope)
       // if (!scope.bookForm.comparisonUrl) {
            //scope.bookForm.comparisonUrl = 'https://www.drupalorg/files/issues/default-avatar.png';
       // }
    }*/
}
    
