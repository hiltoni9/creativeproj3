angular.module('app', [])
    .controller('mainCtrl', mainCtrl)
    .directive('comparison', comparisonDirective);


function mainCtrl($scope, $http) {

    $scope.books = [];
    $scope.bookData = [];

    $scope.addNew = function(book) {
        console.log(book);
        var url = "http://www.goodreads.com/search.xml?key=xqIBQHVgUlJIE5jIX8GTg&q=Ender%27s+Game"; // + form;
        console.log(url);
        $http.get(url).then(function(response) {
            console.log(response);
            $scope.bookData = response.data;
        });
        /*url = "https://api.github.com/users/mjcleme";
        $http.get(url).then(function(response) {
            console.log(response);
            $scope.gitdata = response.data;
        });*/

        $scope.books.push({
            first: book.first,
            second: book.second
        });

        book.first = '';
        book.second = '';
    };
}


function comparisonDirective() {
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
        ) //,
        //link: link
    };

    /* function link (scope)
        // if (!scope.book.comparisonUrl) {
             //scope.book.comparisonUrl = 'https://www.drupalorg/files/issues/default-avatar.png';
        // }
     }*/
}
