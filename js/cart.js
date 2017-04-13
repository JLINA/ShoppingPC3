$(function(){
	$(".main-header").load("hearder.html"); 
	$("#main-footer").load("footer.html");
	
	
	var sCookie = $.cookie("goodDetail");
	
	var cookie = $.cookie;
	var dataGood = true;//存在cookie
	var pricegoods=0;
	if (sCookie==""||sCookie==undefined) {  
		dataGood=false;
	}else{
		   var aCookie = JSON.parse(sCookie);//字符串转化为数组对象
		   var count = 0 ;
		   var priceCount = 0;
		   $.each(aCookie,function(index,ele){
		   	count += this.num
		   	pricegoods=this.data.cost;
		    var sum = this.data.cost*(this.num);
		    priceCount+=sum;
	    	var $lastDD=$(".box-bd dl").find("dd").last(); 
	
		    var $li1 = $("<li class='imgCart'></li>").append($("<img src="+this.data.goodImg+" class='img100'/>")).append($("<p class='title'><a href='#'>"+this.data.title+"</a></p>")).append($("<p class='ts_g'>"+"此商品在"+this.data.cty+"有售"+"</p>"));
		    var $li2 = $("<li class='colorgoods'></li>").append($("<label>"+"其他："+"</label>")).append($("<span>"+"粉色"+"</span>"));
		    var $li3 = $("<li class='pricegoods'></li>").append($("<b id='pricegoods'>"+this.data.price+"</b>")); 
		    var $li4 = $("<li class='sum'></li>").append($("<div class='bigborder'>"+"<div class='boxLeft'>"+"-"+"</div>"+"<div class='boxCenter'>"+this.num+"</div>"+"<div class='boxRight'>"+"+"+"</div>"+"</div>"));
		    var $li5 = $("<li class='countPrice'></li>").append($("<b>"+"￥"+sum+"</b>"));
		    var $li6 = $("<li class='deletGoods'></li>").append($("<s class='sc'></s>"));
		   
			var $ul = $("<ul></ul>").append($li1).append($li2).append($li3).append($li4).append($li5).append($li6); 
		    var $dd=$("<dd class='cartGood'></dd>").append($ul);
            $dd.insertBefore($lastDD);			
						 
				})
		    $("#cart_item_num").html(count);//总数	
			$("#cart_count").html(count);//总数
			$(".jies .cse").html(priceCount);//总价 
			
//		        var anum = 1;
//		    $(".boxLeft").click(function(){//数量减
//		    	$(".boxCenter").html(parseInt($(".boxCenter").html()) -1 );
//		         if(parseInt($(".boxCenter").html())<1){
//		         	$(".boxCenter").html(1)
//		         }
//		         anum = parseInt($(".boxCenter").html());//anum的值
//		         console.log(anum);
//		    	$(".countPrice").html("￥"+parseInt($(".boxCenter").html())*pricegoods );
//		        $("#cart_item_num").html($(".boxCenter").html());//总数	
//			    $("#cart_count").html($(".boxCenter").html());//总数
//		        $(".jies .cse").html($(".countPrice").html());
//		    })
//		     $(".boxRight").click(function(){//数量加
//		    	$(".boxCenter").html(parseInt($(".boxCenter").html()) +1 );
//		    	 if(parseInt($(".boxCenter").html())>999){
//		         	$(".boxCenter").html(999)
//		         }
//		    	 
//		    	$(".countPrice").html("￥"+parseInt($(".boxCenter").html())*pricegoods );
//		        $("#cart_item_num").html($(".boxCenter").html());//总数	
//			    $("#cart_count").html($(".boxCenter").html());//总数
//		        $(".jies .cse").html($(".countPrice").html());
//		       anum = parseInt($(".boxCenter").html());//anum的值
//		      console.log(anum);
//		     })
//		     $.each(aCookie,function(){
//		     	var num = parseInt(anum);   //为了防止num是字符串 将字符串转换成int
//				this.num = num;
//		     })
//		    $.cookie('goodDetail',JSON.stringify(aCookie),{expires:7 , path:"/"});
//			console.log($.cookie("goodDetail"));
//		    
//		  
//		  
		  
		    $(".box-bd").on('click','.deletGoods',function(){//点击删除
		    	
//	        	var aCookie = JSON.parse(sCookie);//字符串转化为数组对象
		    	var title = $(this).parent().parent().find(".title a").html();
		    	$(this).parent().parent().remove();
		    	
		    	//1获取全部cookie---sCookie
		    	//2找到cookie要删除的对象
		    	
//		    	var sCookie = $.cookie("goodDetail");
//		    	var aCookie = JSON.parse(sCookie);
		    	$.each(aCookie, function(index,ele) {
		    		if(this.title==title){
		    			aCookie.splice(index,1)
		    		}
		    		
		    	});
		    	 $("#cart_item_num").html("0");	
			     $("#cart_count").html("0");
			     $(".jies .cse").html("￥00.0");
		    	//zuihuou重新给cookie赋值
		    	$.cookie("goodDetail",JSON.stringify(aCookie),{expires:7 , path:"/"});
//				console.log($.cookie('goodDetail'));
				
				    
		         
	}) 
    	
		       
	 
    }
 

 
}) 
