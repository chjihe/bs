/**
 * Created by CJH on 2017/4/4.
 */
  angular.module('starter.controllers')
    .controller('YaowenCtrl', function ($scope, Chats) {
      $scope.chats=[];
      Chats.getAll().success(function(data){
          $scope.chats=data.result.data;
          console.log(data);
        }).error(function (data) {
          console.log(data);
        })





      // $scope.chats = Chats.all();
      // $scope.remove = function (data) {
      //   Chats.remove(data);
      //}
    })





