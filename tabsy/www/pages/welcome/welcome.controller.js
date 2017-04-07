/**
 * Created by CJH on 2017/4/4.
 */
angular.module('starter.controllers')
  .controller('LoginCtrl',['$scope','$state','$ionicPopup','$ionicHistory','WelcomeService',function($scope,$state,$ionicPopup,$ionicHistory,WelcomeService){
    $ionicHistory.nextViewOptions({
      disableAnimate: true,
      disableBack: true
    });
    $scope.loginData={
      username:'',
      password:''
    }
    $scope.login=function () {
     var result =  WelcomeService.getsql($scope.loginData);
      // if(result==true){
      //   $state.go("tab.shouye",{});
      // }else{
      //   $ionicPopup.alert({
      //     title:'提示',
      //     template:'用户名或密码错误',
      //     okText:'确定',
      //     okType:'button-energized'// ionicHistory 有个方法    $ionicHistory.
      //
      //   });
      // }
    }
    

  }])
