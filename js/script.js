$(window).on('load',function(){
$("#splash-logo").delay(1200).fadeOut('slow');

$("#splash").delay(1500).fadeOut('slow',function(){

$('body').addClass('appear');

});

$('.splashbg1').on('animationend', function() { 
});

});

//画像の設定

var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
		if (windowwidth > 768){
			var responsiveImage = [//PC用の画像
				{ src: 'images/keyimg2_pc-100.jpg'},
				{ src: 'images/keyimg_pc-100.jpg'},
				{ src: 'images/keyimg3_pc-100.jpg'},
			];
		} else {
			var responsiveImage = [//タブレットサイズ（768px）以下用の画像
				{ src: 'images/keyimg4_sp-100.jpg' },
				{ src: 'images/keyimg3_sp-100.jpg' },
				{ src: 'images/keyimg2_sp-100.jpg' },
				{ src: 'images/keyimg_sp-100.jpg' },

			];
		}

//Vegas全体の設定

$('#slider').vegas({
		overlay: true,
		transition: 'fade2',
		transitionDuration: 2000,
		delay: 5000,
		animationDuration: 20000,
		animation: 'random',
		slides: responsiveImage,
	});

	$(function () {
	 $(window).scroll(function () {
		 $('.fadein').each(function () {
				var targetElement = $(this).offset().top; 
				var scroll = $(window).scrollTop();
				 var windowHeight = $(window).height();
				  if (scroll > targetElement - windowHeight + 150) {
						 $(this).addClass('scrollin');
						}
					});
				});
			});
function fadeAnime(){

$('.fadeUpTrigger').each(function(){ 
	var elemPos = $(this).offset().top-50; 
	var scroll = $(window).scrollTop();
	var windowHeight = $(window).height();
	if (scroll >= elemPos - windowHeight){
	$(this).addClass('fadeUp');
	}else{
	$(this).removeClass('fadeUp');
	}
	});

	$('.fadeDownTrigger').each(function(){ 
	var elemPos = $(this).offset().top-50; 
	var scroll = $(window).scrollTop();
	var windowHeight = $(window).height();
	if (scroll >= elemPos - windowHeight){
	$(this).addClass('fadeDown');

	}else{
	$(this).removeClass('fadeDown');
	}
});


}

  $(window).scroll(function (){
    fadeAnime();
  });

  $(window).on('load', function(){
    fadeAnime();
  });




function GethashID (hashIDName){
	if(hashIDName){
		$('.tab li').find('a').each(function() { 
			var idName = $(this).attr('href'); 	
			if(idName == hashIDName){ 
				var parentElm = $(this).parent(); 
				$('.tab li').removeClass("active"); 
				$(parentElm).addClass("active"); 
				$(".area").removeClass("is-active"); 
				$(hashIDName).addClass("is-active"); 	
			}
		});
	}
}

$('.tab a').on('click', function() {
	var idName = $(this).attr('href'); 
	GethashID (idName);
	return false;
});


$(window).on('load', function () {
    $('.tab li:first-of-type').addClass("active"); 
    $('.area:first-of-type').addClass("is-active"); 
	var hashName = location.hash; 
	GethashID (hashName);
});


// =============================================================
// $('a[href*="#"]').click(function () {
// 	console.log("# clicked.")
// 	var elmHash = $(this).attr('href'); 
// 	var pos = $(elmHash).offset().top-200;
// 	$('body,html').animate({scrollTop: pos}, 500); 
// 	return false;
// });
$('a[href*="#"]').click(function () {
	var elmHash = $(this).attr('href'); 
    var pos = 0; // デフォルトはページトップ
    
    // "#" だけでない場合は対象要素の位置を取得
    if (elmHash !== "#" && elmHash.length > 1) {
		var target = $(elmHash);
        if (target.length) {
            pos = target.offset().top - 200;
        }
    }
    
    $('body,html').animate({scrollTop: pos}, 500); 
    return false;
});

// ====================================================================
function setFadeElement(){
	var windowH = $(window).height();	
	var scroll = $(window).scrollTop(); 
    
	var contentsTop = Math.round($('#area-1').offset().top);	
	var contentsH = $('#area-1').outerHeight(true);	
   
	var contentsTop2 = Math.round($('#area-2').offset().top);	
	var contentsH2 = $('#area-2').outerHeight(true);
	var contentsTop3 = Math.round($('#area-3').offset().top);	
	var contentsH3 = $('#area-3').outerHeight(true);

	var contentsTop2 = Math.round($('#area-4').offset().top);	
	var contentsH2 = $('#area-4').outerHeight(true);


	if(scroll+windowH >= contentsTop && scroll+windowH  <= contentsTop+contentsH){
$("#page-top").addClass("LeftMove"); 
$("#page-top").removeClass("RightMove"); 
}


    else{
        if(!$(".hide-btn").length){				
			$("#page-top").addClass("RightMove");  
			$("#page-top").removeClass("LeftMove"); 
		}		
	}
}

$(window).scroll(function () {
	setFadeElement();
});

$(window).on('load', function () {
	setFadeElement();
});


$('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;

});
