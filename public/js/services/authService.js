'use strict';

/* eventService */
angular.module('schedulerApp').service('authService', function ($http) {
    //return the array
    this.login = function (user) {
        return $http.post('/login', user);
    };
    
    this.logout = function () {
        return $http.post('/logout');
    };
    
    this.isLoggedIn = function () {
        return $http.get('/loggedin');
    };    
});