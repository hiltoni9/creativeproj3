
angular.module('app', [])
  .controller('mainCtrl', mainCtrl)
  .directive('comparison', comparisonDirective);


function mainCtrl ($scope) {
    
    $scope.books = [];
     
     $scope.addNew = function (book) {
         $scope.books.push({
             first: book.first,
             second: book.second
         }); 
         
         book.first = '';
         book.second = '';
     };
}

 
function comparisonDirective () {
    return {
        scope: {
            book: '=' 
        },
        restrict: 'E', 
        replace: 'true',
        template: (
            '<div class="Comparison">' +
             '<h4>First book: {{book.first}}</h4>' +
             '<h4>Second book: {{book.second}}</h4>' +
            '</div>'
        )//,
    //link: link
    };
    
   /* function link (scope)
       // if (!scope.book.comparisonUrl) {
            //scope.book.comparisonUrl = 'https://www.drupalorg/files/issues/default-avatar.png';
       // }
    }*/
}
    
