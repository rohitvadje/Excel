var effortsTrack = angular.module("effortsTrack", ["ngRoute"]);

effortsTrack.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "partial/homepage.html"
        })
        .when("/login",{
            templateUrl : "partial/security/login.html",
            controller : "loginPageController"
        })
        .when("/manage",{
            templateUrl : "partial/manage.html",
            controller : "manageSettingsController"
        })
        .when("/addmember",{
            templateUrl : "partial/member/addMember.html"
        })
        .when("/addmanager",{
            templateUrl : "partial/manager/addNewManager.html",
            controller : "add"
        })
});