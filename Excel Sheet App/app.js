var effortsTrack = angular.module("effortsTrack", ["ngRoute"]);

effortsTrack.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "public/partial/homepage.html"
        })
        .when("/login",{
            templateUrl : "public/partial/security/login.html",
            controller : "loginPageController"
        })
        .when("/manage",{
            templateUrl : "public/partial/manage.html",
            controller : "manageSettingsController"
        })
        .when("/addmember",{
            templateUrl : "public/partial/member/addMember.html"
        })
        .when("/addmanager",{
            templateUrl : "public/partial/manager/addNewManager.html",
            controller : "add"
        })
});