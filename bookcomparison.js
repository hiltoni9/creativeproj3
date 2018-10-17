angular.module('app', [])
    .config(function($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist(['**']);
    })
    .controller('mainCtrl', mainCtrl)
    .directive('comparison', comparisonDirective);


function mainCtrl($scope, $http) {

    $scope.books = [];
    $scope.bookData = [];

    $scope.addNew = function(book) {
        console.log(book);
        //var url = "https://www.goodreads.com/search.xml?key=xqIBQHVgUlJIE5jIX8GTg&q=Ender%27s+Game"; // + form;
        var url = "https://www.goodreads.com/book/title.json?key=xqIBQHVgUlJIE5jIX8GTg&title=Ender%27s+Game";
        //var url = "http://openlibrary.org/query.json?type=/type/edition&title=Ender%27s+Game";
        console.log(url);
        $http.jsonp(url,{jsonpCallbackParam: 'callback'})
        .then(function(response) {
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
            '<div class="row">' +
            '<div class="col-md-6">' +
            '<h4>First book: {{book.first}}</h4>' +
            '</div>' +
            '<div class="col-md-6">' +
            '<h4>Second book: {{book.second}}</h4>' +
            '</div>' +
            '</div>' +
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
