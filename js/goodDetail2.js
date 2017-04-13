$(function($){  
	        $(".main-header").load("hearder.html");
	       $("#main-footer").load("footer.html");
//	     

	      var anum=1;
	      
	      
	      var index = location.search.replace("?","");
	      if(index==""){
	      	index=1
	      }
	       $(".mui-increase").click(function(){
	       	   $(".js-number").val(parseInt($(".js-number").val())+1);
	       	   if(parseInt($(".js-number").val())>999){
	       	   	$(".js-number").val(999);
	       	   }
	       	  
			  anum=parseInt($(".js-number").val());
			
			 })
	       $(".js-s2").click(function(){
	       	 $(".js-number").val(parseInt($(".js-number").val())-1);
	       	  if(parseInt($(".js-number").val())<=1){
	       	   	 $(".js-number").val(1);
	       	   }
	       	   anum=parseInt($(".js-number").val());
	       })
	    
	          $.ajax({ 
					type:"get",
					url:"../data/goodDetail/goodDetail.json", 
					success:function(res){
					
						update(res.data);  
						 
					}
				})
	          
//		刷新界面 
	function update(data){   
	      $(".itemInfo .tit").find("h1").html(data[index].title);
	      $(".itemInfo .m-s").find($(".js-sku")).html(data[index].productCode);
       	 $(".itemInfo .m-s").find($(".c-99")).html(data[index].country);
         $(".itemInfo dl").eq(0).find(".sys_item_price").html(data[index].price) ;
       
      
       		var sefl = data[index];
	
	       $(".cart").click(function(){
	      
	       	    var obj = {"title":sefl.title,"productCode":sefl.productCode,"country":sefl.country,"price":sefl.price,"goodImg":sefl.goodImg,"cty":sefl.cty,"cost":sefl.cost};
		        var sCookie = $.cookie('goodDetail');//获取cookie  
			    var  bGood = false;  //代表没有信息  
			      if (sCookie==""||sCookie==undefined) {//无商品信息
			      		var aCookie = [];
			      		var newgood = {"title":sefl.title,data:obj,num:anum}//新的完整的产品信息
			      		aCookie.push(newgood);
			      		
			      	} else{//该网站已经有商品过
//			      		[{title:商品名称,data:{title:title,price:price,img:url},num:购买的数量},{}]
			      		var aCookie = JSON.parse(sCookie);//将字符串转化为对象
			      	    $.each(aCookie,function(){
								//如果在cookie里面能够找到产品信息  
								//对数量+1 num+1
								if(this.title ==sefl.title){
									var num = parseInt(this.num)+anum;   //为了防止num是字符串 将字符串转换成int
									this.num = num;
									bGood =true  ;  //表示产品有信息
								}
							})
	                  //cookie存在产品信息 但是没有当前购买的产品的信息
							if(bGood==false){
								//生成新的商品信息
								var newGood = {"title":sefl.title,data:obj,num:anum}//新的完整的产品信息
								aCookie.push(newGood);
							}
			       } 
			      	
			 $.cookie('goodDetail',JSON.stringify(aCookie),{expires:7 , path:"/"});
			   console.log($.cookie("goodDetail"));
	 
	         }) 
	         }    
//	    
	    
	    
	    
	    
	             //放大镜
	           var $smallpic = $('.tb_pic');
				
				var $pos   = $('.tb_pic .zoomMask');
				
				var  $bigpic = $('.zoomDiv img');
					
				$(document).mousemove(function(e){
					//e.pageX  e.pageY ; //鼠标位置
					//$('#smallpic').offset(); 小框的位置
//					
					var smallOffset = $smallpic.offset();
//					console.log(smallOffset.left+","+smallOffset.top);
						if(e.pageY >= smallOffset.top &&e.pageX>=smallOffset.left && e.pageX<= smallOffset.left + $smallpic.outerWidth() && e.pageY <= smallOffset.top + $smallpic.outerHeight()){
							$pos.show();
							$(".zoomDiv").show();
							//算出 遮罩的位置
							
							//1 一般情况下是 鼠标的左上角
//							console.log(e.pageX+","+e.pageY);
//					        console.log($pos.outerWidth()/2+","+$pos.outerHeight()/2);
							//设置小框的位置
							$pos.css({
								top:e.pageY-parseInt($pos.height()/2)-$smallpic.offset().top,
								left:e.pageX-parseInt($pos.width()/2)-$smallpic.offset().left,
							})
//						
//							
//							//防止小灰块移除右边
							if(e.pageX>=smallOffset.left + $smallpic.width()-$pos.width()/2){
								
								$pos.css({
									left:parseInt($pos.width())
								})
							}
//							
//							//防止小灰块移除下边
							if(e.pageY>=smallOffset.top + $smallpic.height()-$pos.height()/2){
								
								$pos.css({
									top:parseInt($pos.height())
								})
							}
//							
//							//防止移除上边框
							if(e.pageY<=(smallOffset.top + parseInt($pos.height()/2))){  
								$pos.css({
									top:0
								})
							}
							
							//防止出左边
//							console.log($pos.offset().left+","+e.pageX+","+($pos.width()/2)+","+smallOffset.left);
							
							if(e.pageX<=(smallOffset.left+parseInt($pos.width()/2))){
								$pos.css({ 
									left:0
//               
								})
             	}
//							
							//last
//							
//							//改变大框的偏移量
//							console.log($pos.position().top,$pos.position().left);
							$bigpic.css({
								top: -$pos.position().top*2 ,
								left: -$pos.position().left*2 ,
							})
								
						}else{
						
							//移开小框的范围
							$pos.hide();
							$(".zoomDiv").hide();
						}
						
						
						
				})
	
	
	//点击立即购买
	var $goodBuy=$(".buy");
	$goodBuy.click(function(){
		var sCookie = $.cookie('login'); 
		console.log("df");
//		var aCookie = JSON.parse(sCookie);//字符串转化为数组对象
		if (sCookie==""||sCookie==undefined) {
			window.location.href = "login.html";
//     
		} 
	})

	
	
})
