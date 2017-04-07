angular.module('starter.services', [])

  .factory('Chats', function($http) {

    // var chats = [{
    //   id: 0,
    //   name: 'Ben Sparrow',
    //   lastText: 'You on your way?',
    //   face: 'img/ben.png'
    // }, {
    //   id: 1,
    //   name: 'Max Lynx',
    //   lastText: 'Hey, it\'s me',
    //   face: 'img/max.png'
    // }, {
    //   id: 2,
    //   name: 'Adam Bradleyson',
    //   lastText: 'I should buy a boat',
    //   face: 'img/adam.jpg'
    // }, {
    //   id: 3,
    //   name: 'Perry Governor',
    //   lastText: 'Look at my mukluks!',
    //   face: 'img/perry.png'
    // }, {
    //   id: 4,
    //   name: 'Mike Harrington',
    //   lastText: 'This is wicked good ice cream.',
    //   face: 'img/mike.png'
    // }];
    //
    // return {
    //   all: function() {
    //     return chats;
    //   },
    //   remove: function(chat) {
    //     chats.splice(chats.indexOf(chat), 1);
    //   },
    //   get: function(chatId) {
    //     for (var i = 0; i < chats.length; i++) {
    //       if (chats[i].id === parseInt(chatId)) {
    //         return chats[i];
    //       }
    //     }
    //     return null;
    //   }
var service={};
service.getAll = function(){
 return $http({
   method:'GET'
   ,url:"http://toutiao-ali.juheapi.com/toutiao/index"
   ,headers:{"Authorization":"APPCODE 60d311a851a94fe1a1f66f546437f8ba"}
    , params:{type:'tiyu'}
  })
 };
 return service;
var get={};
   get.get=function (chatId) {
     for(var i=0;i<chats.length;i++){
       if(chats[i]===parseInt(chatId)){
         return chats[i];
       }
     }
     return get;
   }
  

 })





