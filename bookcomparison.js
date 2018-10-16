/** 
 * angular.module('app', [])
    .controller('mainCtrl', mainCtrl);

   
function mainCtrl ($scope) {
    
    **
     * Let's just make sure something happens when the user submits the form
     * by binding the declared 'addNew' function to the scope. you can see we
     * are expecting a user object as a parameter. This is 'userForm'
     *
    $scope.addNew = function (user) {
        alert(user.name + ' ' + user.url);
    };
}**/



/**
 * 1. We have added a directive with the name 'avatar' and a handler of
 * avatarDirective to our angular app module
 * 
 */

angular.module('app', [])
  .controller('mainCtrl', mainCtrl)
  .directive('avatar', avatarDirective);


function mainCtrl ($scope) {
    
    //Tada! A users array will now be bound to and make available to our html template.
    $scope.users = [];
    
    /**
     * 1. We push a new 'user' object to our users list with a name
     * and avatarUrl property
     * For our purposes, a quick and dirty method for clearing the form will do.
     * Just noe there is a more appropriate method when form validation is involved.
     */
     
     $scope.addNew = function (user) {
         $scope.users.push({
             name: user.name,
             email: user.email,
             avatarUrl: user.url
         }); /* [1] */
         
         user.name = ''; /* [2] */
         user.url = ''; /* [2] */
     };
}

/**
 * 1. This defines the api of our avatar directive. This means we are
 * expecting a user property whose value should be interpreted as an object.
 * 2. This simply means we want this directive to be used as an element.
 * 3. You can see here we've moved the html that was in our template before
 * and give it as the templated for this directive. This means wherever we use
 * <avatar /> this html will also be placed there.
 * 4. Here we are implementing the feature where if there is no user avatar url,
 * we go ahead and give ita  default.
 */
 
function avatarDirective () {
    return {
        scope: {
            user: '=' /* [1] */
        },
        restrict: 'E', /* [2] */
        replace: 'true',
        template: (
            '<div class="Avatar">' +
             '<img ng-src="{{user.avatarUrl}}" />' +
             '<h4>{{user.name}}</h4>' +
             '<h4>{{user.email}}</h4>' +
            '</div>'
        ), /* [3] */
    link: link
    };
    
    function link (scope) { /* [4] */
        if (!scope.user.avatarUrl) {
            scope.user.avatarUrl = 'https://www.drupalorg/files/issues/default-avatar.png';
        }
    }
}
    
