/**
 * Created by CJH on 2017/4/4.
 */
(function(){
  'use strict';
  angular.module('starter.controllers')
    .controller("ProductCtrl", function ($scope,$ionicModal,$ionicScrollDelegate,$ionicSlideBoxDelegate, $state,$ionicLoading) {
      var db= openDatabase('wyxw.db','1.0.0','wyxw',10000);
      db.transaction(function (tx) {
        var sql='CREATE TABLE IF NOT EXISTS User(id INTEGER PRIMARY KEY AUTOINCREMENT,username VARCHAR(20),password TEXT)'
        tx.executeSql(sql,[],function(tx,data){
          console.log(data);
        },function(tx,error){
          console.log(error);
        });
        sql='INSERT INTO User(username,password) VALUES (?,?)';
        tx.executeSql(sql,['chjihe','123456'],function (tx,data) {
          console.log(data);
        },function (tx,error) {
          console.log(error);
        });
        sql = 'SELECT * FROM User';
        tx.executeSql(sql,[],function (tx,data) {
          console.log(data);
          console.log(data.rows.item(0));
        },function (tx,error) {
          console.log(error);
        });
      })
      // db.transaction(function(tx){
      //   var sql="CREATE TABLE IF NOT EXISTS Leibie(id INTEGER PRIMARY KEY AUTOINCREMENT,type VARCHAR(20),title TEXT)"
      //   tx.executeSql(sql,[],function(tx,data){
      //     console.log(data);
      //   },function(tx,error){
      //     console.log(error);
      //   });
      // });
      $scope.ProductListData=[
        {id:0,title:'推荐'},
        {id:1,title:'热点'},
        {id:2,title:'视频'},
        {id:3,title:'体育'},
        {id:4,title:'社会'},
        {id:5,title:'娱乐'},
        {id:6,title:'图片'},
        {id:7,title:'军事'},
      ];

      $scope.categoryListOtherData= [
        {id:1,title:'行尸走肉'},
        {id:2,title:'金蝉脱壳'},
        {id:3,title:'百里挑一'},
        {id:4,title:'天上人间'},
        {id:5,title:'不吐不快'}
      ];
      $scope.categoryListMyData=[
        {id:6,title:'金玉满堂'},
        {id:7,title:'背水一战'},
        {id:8,title:'霸王别姬'},
        {id:9,title:'海阔天空'},
        {id:10,title:'情非得已'}
      ];
      $ionicModal.fromTemplateUrl('templates/category.html', {
        scope: $scope
      }).then(function(modal) {
        $scope.categoryModal = modal;
      });

      $scope.openCategoryModal = function() {

        $scope.categoryModal.show();
      };
      $scope.closeCategoryModal = function() {
        $scope.categoryModal.hide();
      };

      $scope.is_close=false;
      var w=window.innerWidth   //获取屏幕的宽度
        || document.documentElement.clientWidth
        || document.body.clientWidth;

      $scope.subTitle="";
      $scope.changeTab=function(id){
        angular.forEach($scope.ProductListData, function (data ,index,arry) {
          }
        );
        angular.forEach($scope.ProductListData, function (data ,index,arry) {
          if(data.id==id){
            $scope.subTitle=data.title;
            document.getElementById("but_"+id).className="button button-clear activebutton";
          }else{
            document.getElementById("but_"+data.id).className="button button-clear";
          }
        })
      }

      $scope.deltab=function(id){
        delorAdditem($scope.ProductListData,id,$scope.categoryListOtherData)
      }
      $scope.addtab=function(id){
        delorAdditem($scope.categoryListOtherData,id,$scope.ProductListData)
      }
      var allwidth=12; //定义默认的导航数量
      allwidth=$scope.ProductListData.length;
      $scope.allwidth=allwidth*30+'%';

      var delorAdditem =function(objarry ,id,targetarry){
        angular.forEach(objarry, function (data,index,arry) {
          if(data.id==id){
            targetarry.push(data);
            objarry.splice(index,1);
          }
        })
      }
    });
})()
