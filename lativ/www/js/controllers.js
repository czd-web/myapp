angular.module('starter.controllers', [])

//首页控制器
.controller('homeCtrl', function($scope) {
//	小轮播
	var mySwiperlunbo = new Swiper('.swiper-containerlunbo',{
		autoplay:4000,
		loop:true,
		pagination:'.lunbo-pagination'
	})
	
	
	//导航栏轮播内容
	var mySwiperNav = new Swiper('#swiper-containerNav',{
	watchSlidesProgress : true,
	watchSlidesVisibility : true,
	slidesPerView : 5,
	onTap: function(){
				mySwiperCont.slideTo( mySwiperNav.clickedIndex)
			}
	})
	var mySwiperCont = new Swiper('#swiper-containerCont',{
	onSlideChangeStart: function(){
				updateNavPosition()
			}
	})
	function updateNavPosition(){
			$('#swiper-containerNav .active-nav').removeClass('active-nav')
			var activeNav = $('#swiper-containerNav .swiper-slide').eq(mySwiperCont.activeIndex).addClass('active-nav');
					mySwiperNav.slideTo(activeNav.index())
			
		}
	
})

//分类控制器
.controller('classificationCtrl', function($scope) {

})

//穿搭控制器
.controller('outfitCtrl', function($scope) {

})

//购物车控制器
.controller('shoppingCartCtrl', function($scope) {
 
})

//个人控制器
.controller('personalCtrl', function($scope) {
 
})