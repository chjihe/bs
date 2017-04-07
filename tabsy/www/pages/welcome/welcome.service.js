/**
 * Created by CJH on 2017/4/6.
 */
(function(){
  'use strict';
  angular.module('starter.services')
    .factory('WelcomeService',function ($state, $ionicPopup,$window) {
      return {
      getsql : function(loginData){
        var db= openDatabase('wyxw.db','1.0.0','wyxw',10000);
        db.transaction(function (tx) {
          var sql = 'select * from User where username=?';
          tx.executeSql(sql,[loginData.username],function (tx,data) {
            console.log(data.rows);
            // console.log(data.rows.item(0));//用这个改 =0
            console.log(data.rows.length );
            if(data.rows.length ==0) {
              $ionicPopup.alert({
                title:'提示',
                template:'用户名或密码错误',
                okText:'确定',
                okType:'button-energized'
              });
              return ;
            }
            if(loginData.username==data.rows.item(0).username && loginData.password==data.rows.item(0).password){

              $state.go("tab.shouye",{});
              $ionicHistory.nextViewOptions({
                disableAnimate: true,
                disableBack: true
              });
            }
            else{
              $ionicPopup.alert({
                title:'提示',
                template:'用户名或密码错误',
                okText:'确定',
                okType:'button-energized'
              });

            }
          },function (tx,error) {

          });



        })
      },
        set:function(key,value){
          $window.localStorage[key]=value;
        },
        get:function(key,defaultValue){
          return $window.localStorage[key] ||defaultValue;
        },
        setObject:function(key,value){
        $window.localStorage[key]=JSON.stringify(value);
      },
        getObject:function(key){
          return JSON.parse($window.localStorage[key] ||'{}')
        }
      }
    });
})();
