$(function(){
	 $(".main-header").load("hearder.html");
	 $("#main-footer").load("footer.html");
	$.ajax({ 
					type:"get",
					url:"../data/goodList/goodList.json",
					success:function(res){
//						console.log(res);
//						console.log(typeof res); 
//						 
						update(res.data);  
						
					}
				})
		//刷新界面
	function update(data){  
	    $.each(data,function(index){  
	    	
            var $Li = $("<li class='img-xg'></li>");
			var $p = $("<p class='b-q'></p>").append($("<s  class='free' title='包邮专区'></s>")).append($("<s  class='free' title='新品上架'></s>"));
			var $i0 = $("<i class='top'></i>"); 
			var $i1 = $("<i class='right'></i>");
			var $i2 = $("<i class='bottom'></i>");
			var $i3 = $("<i class='left'></i>");    
//			 
			var $a = $("<a target='_blank' class='img' "+ "title="+this.title +" "+ "href="+this.href+"?"+index+"></a>").append($("<img"+" "+ "data-original="+this.goodImg+" "+ "src="+this.goodImg+"/>")); 
			var $dd_p_a = $("<a target='_blank'"+ "title="+this.title +" "+" href="+this.href+"?"+index+"></a>").html(this.title);
			var $dd_p = $("<p></p>").append($dd_p_a);
			var $dd = $("<dd class='fl'></dd>").append($dd_p).append($("<p class='c-o fs-14'>"+this.price+ "<span class='c-bb'></span>"+"</p>"));
			
			var $dt = $("<dt class='fr'></dt>").append($("<s class='qizhi'>"+ "<img"+" "+ "src="+ this.countryImg+"/>"+ "</s>")).append($("<p class='c-bb'>"+this.country+"</p>"));
			var $dl = $("<dl class='tit'></dl>").append($dd).append($dt); 
			$Li.append($p).append($i0).append($i1).append($i2).append($i3).append($a).append($dl).appendTo($(".main-content .search").find("ul").eq(0));
			
         }) 
	    }
	
	
	
	 $(window).scroll(function(){//返回顶部
	 	var _top = $(window).scrollTop();
//			  
			   	if (_top>=500) {
					$(".backToTop-up").show();
					 $(".backToTop-up").click(function(){
					$("body,html").stop().animate({
						scrollTop:0
                	},1000)
                  })	
            
				} else{
					
					$(".backToTop-up").hide();
				}
                	
//             
	 })
			   
})
												