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
        /*//var url = "https://www.goodreads.com/search.xml?key=xqIBQHVgUlJIE5jIX8GTg&q=Ender%27s+Game"; // + form;
        //var url = "https://www.goodreads.com/book/title.json?key=xqIBQHVgUlJIE5jIX8GTg&title=Ender%27s+Game";
        //var url = "http://openlibrary.org/query.json?type=/type/edition&title=Ender%27s+Game";
        //var url = "http://api.nytimes.com/svc/books/v3/reviews.jsonp?api-key=602f6fba4a6f4fe2aacb858305719e52&title=1984";
        var url = "https://api.nytimes.com/svc/books/v3/reviews.json?api-key=602f6fba4a6f4fe2aacb858305719e52&title=1984";
        //console.log(url);
        $http.jsonp(url,{jsonpCallbackParam: 'callback'})
        .then(function(response) {
            console.log(response);
            $scope.bookData = response.data;
        });
        console.log(url);*/
        /*url = "https://api.github.com/users/mjcleme";
        $http.get(url).then(function(response) {
            console.log(response);
            $scope.gitdata = response.data;
        });*/
        /*if (!book.firstImg) {
            book.firstImg = 'https://us.123rf.com/450wm/wektorygrafika/wektorygrafika1601/wektorygrafika160100003/50246517-open-book-vector-clipart-silhouette-symbol-icon-design-illustration-isolated-on-white-background-.jpg?ver=6';
        }
        if (!book.secondImg) {
            book.secondImg = 'https://us.123rf.com/450wm/wektorygrafika/wektorygrafika1601/wektorygrafika160100003/50246517-open-book-vector-clipart-silhouette-symbol-icon-design-illustration-isolated-on-white-background-.jpg?ver=6';
        }*/
    
        if (book.first  && book.second) {
            var winner = battle(book.first, book.second);
            $scope.books.push({
                first: book.first,
                firstImg: book.firstImg,
                second: book.second,
                secImg: book.secondImg,
                winner: winner
            });

            book.first = '';
            book.firstImg = '';
            book.second = '';
            book.secondImg = '';
        }
        else {
            alert("Please enter two books so they can battle!");
        }
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
            '<div class="row align-items-center">' +
            '<div class="col-md-4 text-center">' +
            '<img src="{{book.firstImg}}">' + //https://us.123rf.com/450wm/wektorygrafika/wektorygrafika1601/wektorygrafika160100003/50246517-open-book-vector-clipart-silhouette-symbol-icon-design-illustration-isolated-on-white-background-.jpg?ver=6">' +
            '<h4>{{book.first}}</h4>' +
            '</div>' +
            '<div class="col-md-4 text-center">' +
            '<h4>VS</h4>' +
            '</div>' +
            '<div class="col-md-4 text-center">' +
            '<img src="{{book.secImg}}">' + //"https://us.123rf.com/450wm/wektorygrafika/wektorygrafika1601/wektorygrafika160100003/50246517-open-book-vector-clipart-silhouette-symbol-icon-design-illustration-isolated-on-white-background-.jpg?ver=6">' +
            '<h4>{{book.second}}</h4>' +
            '</div>' +
            '</div>' +
            '<h3 class="winner-banner text-center"><span id="victor">{{book.winner}}</span> is the winner!</h3>' +
            '</div>'
        ) ,
        link: link
    };

    function link (scope) {
         if (!scope.book.firstImg) {
             scope.book.firstImg = 'https://us.123rf.com/450wm/wektorygrafika/wektorygrafika1601/wektorygrafika160100003/50246517-open-book-vector-clipart-silhouette-symbol-icon-design-illustration-isolated-on-white-background-.jpg?ver=6';
         }
         if (!scope.book.secImg) {
             scope.book.secImg = 'https://us.123rf.com/450wm/wektorygrafika/wektorygrafika1601/wektorygrafika160100003/50246517-open-book-vector-clipart-silhouette-symbol-icon-design-illustration-isolated-on-white-background-.jpg?ver=6';
         }
     }
}

function battle(book1, book2) {
    var bookVal1 = 0;
    var bookVal2 = 0;
    console.log("BOOK 1 = " + book1);
    console.log("BOOK 2 = " + book2);
    for (var i = 0; i < book1.length; i++) {
        bookVal1 += book1.charCodeAt(i);
    }
    for (var i = 0; i < book2.length; i++) {
        bookVal2 += book2.charCodeAt(i);
    }
    if (bookVal1 > bookVal2) {
        return book1;
    }
    else {
        return book2;
    }
}
