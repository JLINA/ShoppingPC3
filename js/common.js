
$(function(){ 
			$(".catalog").hover(function(){
				$(this).addClass("Hover");
			},function(){
				$(this).removeClass("Hover");
			})
			$(".menu-cate-all-out dt").mouseenter(function(){
				$(".menu-cate-all-out dl").removeClass("on");
				$(this).parent().addClass("on");
			})
			});