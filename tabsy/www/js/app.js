// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

  .config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('standard');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('left');

    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');


  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
    .state('welcome', {
      url: '/welcome',
      templateUrl: 'pages/welcome/welcome.html',
      controller: 'LoginCtrl'
    })
  // Each tab has its own nav history stack:

  .state('tab.shipin', {
    url: '/shipin',
    views: {
      'tab-shipin': {
        templateUrl: 'pages/shipin/shipin.html',
        controller: 'ShipinCtrl'
      }
    }
  })
    .state('forgotpassword', {
      url: '/forgotpassword',
      templateUrl: 'pages/forgotpassword/forgotpassword.html'
      // controller: 'AppCtrl'
    })
    .state('tab.shouye', {
      url: '/shouye',
      views: {
        'tab-shouye': {
          templateUrl: 'pages/shouye/shouye.html',
          controller: 'ProductCtrl'
        }
      }
    })
  .state('tab.yaowen', {
      url: '/yaowen',
      views: {
        'tab-yaowen': {
          templateUrl: 'pages/yaowen/yaowen.html',
          controller: 'YaowenCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:data',
      views: {
        'tab-yaowen': {
          templateUrl: 'pages/yaowen/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.wode', {
    url: '/wode',
    views: {
      'tab-wode': {
        templateUrl: 'pages/wode/wode.html',
        controller: 'WodeCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/shouye');

});
