
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

//配置状态机
.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
	/*用于修改安卓tab居下 （在参数里要加入$ionicConfigProvider）*/
  $ionicConfigProvider.platform.ios.tabs.style('standard');
  $ionicConfigProvider.platform.ios.tabs.position('bottom');
  $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.platform.android.tabs.position('standard');

  $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
  $ionicConfigProvider.platform.android.navBar.alignTitle('center');

  $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
  $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

  $ionicConfigProvider.platform.ios.views.transition('ios');
  $ionicConfigProvider.platform.android.views.transition('android');
  /*用于修改安卓tab居下 --结束*/

  $stateProvider
  
//tab状态机
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

//首页状态机
  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'homeCtrl'
      }
    }
  })

//分类状态机
  .state('tab.classification', {
      url: '/classification',
      views: {
        'tab-classification': {
          templateUrl: 'templates/tab-classification.html',
          controller: 'classificationCtrl'
        }
      }
    })
 
//穿搭状态机
  .state('tab.outfit', {
    url: '/outfit',
    views: {
      'tab-outfit': {
        templateUrl: 'templates/tab-outfit.html',
        controller: 'outfitCtrl'
      }
    }
  })
  
  //购物车状态机
  .state('tab.shoppingCart', {
    url: '/shoppingCart',
    views: {
      'tab-shoppingCart': {
        templateUrl: 'templates/tab-shoppingCart.html',
        controller: 'shoppingCartCtrl'
      }
    }
  })
   
   //个人状态机
   .state('tab.personal', {
    url: '/personal',
    views: {
      'tab-personal': {
        templateUrl: 'templates/tab-personal.html',
        controller: 'personalCtrl'
      }
    }
  })
  
  $urlRouterProvider.otherwise('/tab/home');

});
