$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['TOP', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'BOTTOM'],
		loop: true,
		css3: true,
		resize: true,
		loopBottom: false,
		verticalCentered: true,
		showActiveTooltip: true,
		scrollOverflow: false,
		scrollingSpeed: 800,
		scrollBar: false,
		fitToSection: true,
		fitToSectionDelay: 8000,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		slidesNavigation: false,
		controlArrows: false,
		afterRender: function() {},
		afterLoad: function(anchorLink, index) {
			if(index == 2) {
				$('.page2 .page-title').addClass("fadeInUp op1");
				$('.page2 .page-text').addClass("fadeInUp delay-1s op1");
				let time;
				let thisObj = $('.page2-content ul.content-list');
				time = setTimeout(function() {
					thisObj.find("li").each(function(i) {
						let tA = $(this);
						setTimeout(function() {
							tA.addClass('fadeInUp op1', 300).fadeIn('fast');
						}, 150 * i);
					});
				}, 300);
			} else if(index == 3) {
				$('.page3 .page-title').addClass("fadeInUp op1");
				$('.page3 .page-text').addClass("fadeInUp delay-1s op1");
				$('.page3 .page3-pic').addClass("fadeInLeft op1");
				$('.page3 .page3-solgan').addClass("fadeInRight op1");
			} else if(index == 4) {
				$('.page4 .page-title').addClass("fadeInUp op1");
				$('.page4 .page-text').addClass("fadeInUp delay-1s op1");
				$('.page4 .page4-list').addClass("fadeInLeft op1");
				$('.page4 .page4-pic').addClass("fadeInRight op1");
			} else if(index == 5) {
				$('.page5 .page-title').addClass("fadeInUp op1");
				$('.page5 .page-text').addClass("fadeInUp delay-1s op1");
				let time;
				let thisObj = $('.page5-content ul.case-list');
				time = setTimeout(function() {
					thisObj.find("li").each(function(i) {
						let tA = $(this);
						setTimeout(function() {
							tA.addClass('fadeInUp op1', 300).fadeIn('fast');
						}, 150 * i);
					});
				}, 300);
			} else if(index == 6) {
				$('.page6 .page-title').addClass("fadeInUp op1");
				$('.page6 .page-text').addClass("fadeInUp delay-1s op1");
				let time;
				let thisObj = $('.page6-content ul.scrvice-list');
				time = setTimeout(function() {
					thisObj.find("li").each(function(i) {
						let tA = $(this);
						setTimeout(function() {
							tA.addClass('fadeInUp op1', 300).fadeIn('fast');
						}, 150 * i);
					});
				}, 300);
			} else if(index == 7) {
				$('.page7 .page-title').addClass("fadeInUp op1");
				$('.page7 .page-text').addClass("fadeInUp delay-1s op1");
				let time;
				let thisObj = $('.page7-content ul.content-list');
				time = setTimeout(function() {
					thisObj.find("li").each(function(i) {
						let tA = $(this);
						setTimeout(function() {
							tA.addClass('fadeInUp op1', 300).fadeIn('fast');
						}, 150 * i);
					});
				}, 300);
			} else if(index == 8) {
				let time;
				let thisObj = $('.footer-top ul');
				time = setTimeout(function() {
					thisObj.find("li").each(function(i) {
						let tA = $(this);
						setTimeout(function() {
							tA.addClass('fadeInUp op1', 300).fadeIn('fast');
						}, 150 * i);
					});
				}, 300);
				$('.footer-bottom .footer-link-1').addClass("fadeInLeft op1");
				$('.footer-bottom .footer-link-2').addClass("fadeInLeft op1");
				$('.footer-bottom .footer-link-3').addClass("fadeInRight op1");
			}
		}
	});
	// Swiper
	var mySwiper = new Swiper('.swiper-container', {
		direction: 'horizontal', // 垂直切换选项
		loop: true, // 循环模式选项
		// 如果需要分页器
		pagination: {
			el: '.swiper-pagination',
			type: 'custom', //这里分页器类型必须设置为custom,即采用用户自定义配置
			//下面方法可以生成我们自定义的分页器到页面上
			renderCustom: function(swiper, current, total) {
				var customPaginationHtml = "";
				for(var i = 0; i < total; i++) {
					//判断哪个分页器此刻应该被激活
					if(i == (current - 1)) {
						customPaginationHtml += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
					} else {
						customPaginationHtml += '<span class="swiper-pagination-customs"></span>';
					}
				}
				return customPaginationHtml;
			}
		},
		// 如果需要前进后退按钮
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
});

//选项卡
window.onload = function() {

};
//头部导航
$('.nav_tag a').click(function (){
	$(this).addClass("active").siblings().removeClass('active')
})
// class 循环命名
$(".content-list").each(function() {
	$(this).find('li').each(function(i) {
		$(this).addClass('item' + i)
	})
});