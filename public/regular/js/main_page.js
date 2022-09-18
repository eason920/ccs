// phone側邊選單
jQuery(document).ready(function( $ ) {
	var $wW = $(window).width();
	var $wH = $(window).height();
	var $hH = $("header").height();
	var $fH = $("footer").height();
	$(".loginPage").css('min-height', $wH - $hH - $fH - 45);
	
	if($wW < 768){
		$(".boxSet .box .single .ibank").prop("href", "http://10.64.14.164:81/ecntr/tx/estatement?method=login");
		
		//index
		$(".boxSet .box").click(
			function () {
				$('.boxSet .box h3').removeClass('close');
				if ($(this).children('.boxSet .box ul').is(':hidden')) {
					$('.boxSet .box ul').slideUp();
					$(this).children('ul').slideToggle();
					$(this).children('.boxSet .box h3').addClass('close');
				} else {
					$(this).children('.boxSet .box ul').slideToggle();
					$(this).children('.boxSet .box h3').removeClass('close');
				}
			});
	}else{
		$(".navSub .box").click(
			function () {
				
				
				if ($(this).children('ul').is(':hidden')) {
					$(this).children('.trig').addClass('close');
					$(this).children('ul').slideToggle();
				} else {
					$(this).children('.trig').removeClass('close');
					$(this).children('ul').slideToggle();
				}
			});
	}
	
	//login
	$("#a1").click(
		function () {
			$(".choose").fadeToggle(
				function () {
					$(".boxWeb").fadeToggle();
				});
		});
	$("#a2").click(
		function () {
			$(".choose").fadeToggle(
				function () {
					$(".boxCredit").fadeToggle();
				});
		});
	$("#a3").click(
		function () {
			$(".choose").fadeToggle(
				function () {
					$(".boxAccount").fadeToggle();
				});
		});
	$("#a4").click(
		function () {
			$(".choose").fadeToggle(
				function () {
					$(".boxDebit").fadeToggle();
				});
		});
		
	$("#a5").click(
		function () {
		$(".choose").fadeToggle(
			
		);
	});
	
	$(".boxWeb .back").click(
		function () {
			if($(".choose").is(':hidden')){
			   $(".boxWeb").fadeToggle(
				function () {
					$(".choose").fadeToggle();
				});
			   }
		});
	$(".boxCredit .back").click(
		function () {
			if($(".choose").is(':hidden')){
			   $(".boxCredit").fadeToggle(
				function () {
					$(".choose").fadeToggle();
				});
			   }
		});
	$(".boxAccount .back").click(
		function () {
			if($(".choose").is(':hidden')){
			   $(".boxAccount").fadeToggle(
				function () {
					$(".choose").fadeToggle();
				});
			   }
		});
	$(".boxDebit .back").click(
		function () {
			if($(".choose").is(':hidden')){
			   $(".boxDebit").fadeToggle(
				function () {
					$(".choose").fadeToggle();
				});
			   }
		});
	
	//QA
	$(".qbox").click(
		function () {
			$(".qbox").removeClass('on');
			if ($(this).children('.qbox .ans').is(':hidden')) {
				$('.qbox .ans').slideUp();							$(this).children('.ans').slideToggle();							$(this).addClass('on');
			} else {
				$(this).children('.qbox .ans').slideToggle();
				$(this).removeClass('on');
			}			
		}
	);
	
	//statement
	$(".statement h4").click(
		function () {
			$("h4").parent(".statement").removeClass('on');
			if ($(this).next('.stateInfo').is(':hidden')) {
				$('.statement .stateInfo').slideUp();
				$(this).next('.stateInfo').slideToggle();
				$(this).parent(".statement").addClass('on');
					
			} else if ($(this).next('.stateInfo').is(':visible')){
				$(this).next('.stateInfo').slideToggle();
				$(this).parent(".statement").removeClass('on');
			}			
		}
	);

	
	
	//pop_termbox
	$(".termBox .termTit").click(
		function () {
			$(".termTit").parent(".termBox").removeClass('on');
			if ($(this).next('.termInfo').is(':hidden')) {
				$('.termBox .termInfo').slideUp();
				$(this).next('.termInfo').slideToggle();
				$(this).parent(".termBox").addClass('on');
					
			} else if ($(this).next('.termInfo').is(':visible')){
				$(this).next('.termInfo').slideToggle();
				$(this).parent(".termBox").removeClass('on');
			}			
		}
	);

	$("#menu").mmenu({
         "slidingSubmenus": false
	});

	$(window).on("load scroll resize onclick", function() {
		var $wW = $(window).width();
		var $wH = $(window).height();
		var $hH = $("header").height();
		var $fH = $("footer").height();
		$(".loginPage").css('min-height', $wH - $hH - $fH - 45);
	});

});
