 $(function(){
	 	$(".main-header").load("hearder.html");
         
	 	var  index = 0;  //当前显示的图片下标
		show();  //动画显示当前的图片
	    
			function show(){
			 if(index==$('.bd .list-1').find('li').length){
					index = 0;//显示第一张图片
				
				}else if(index<0){
					index = $('.bd .list-1').find('li').length-1;
				}
			 //显示当前index的图隐藏其它
			 $('.bd ul').find('li').eq(index).stop().animate({'opacity':1},200).siblings().stop().animate({'opacity':0},500);
			}
			var timer = setInterval(fAnimate,2000)//实现每2秒变换一次图
			//fAnimate 执行动画的函数
			function fAnimate(){
				index++;
				show();
				colorLi();
				//超出li lenght
			}
			
			
			$('.banner').hover(function(){//鼠标移入则停止定时器
				clearInterval(timer);
			},function(){
				timer = setInterval(fAnimate,2000);//离开后则启动定时器
			})
			$(".next").click(function(){
				index++;//图片往下动
				show();
				colorLi();
			})
			$(".prev").click(function(){
				index--;//图片向上移动
			    show();
				colorLi();
			})
			$(".hd ul").find("li").click(function(){
				index = $(this).index();
				show();
				colorLi();
			}) 
			function colorLi(){//让小圆的变化与图片的变化相对应
				$(".hd ul").find($("li")).css("background","white");
             
				$(".hd ul").find($("li")).eq(index).css("background","red");
				
			}
			//--------------------向左轮播-----------------------------//
			Carousel(0);
			Carousel(1);
            //--------------向左轮播插件-----------//
           // btn是（true）使用切换按钮
           // plus  minus 按钮
            $('.cxslide_x').eq(0).cxSlide({btn:true,speed:1000,time:2000,plus:true,minus:true});
             $('.cxslide_x').eq(1).cxSlide({btn:true,speed:1000,time:2000,plus:true,minus:true});
              $('.cxslide_x').eq(2).cxSlide({btn:true,speed:1000,time:2000,plus:true,minus:true});
             $('.cxslide_x').eq(3).cxSlide({btn:true,speed:1000,time:2000,plus:true,minus:true});
              $('.cxslide_x').eq(4).cxSlide({btn:true,speed:1000,time:2000,plus:true,minus:true});
             $('.cxslide_x').eq(5).cxSlide({btn:true,speed:1000,time:2000,plus:true,minus:true});
              $('.cxslide_x').eq(6).cxSlide({btn:true,speed:1000,time:2000,plus:true,minus:true});
            
            $(".plus").html("&lt;");//<div class="plus">&lt;</div>
            $(".minus").html("&gt;");//<div class="plus">&lt;</div>
              //----------------------------------------------------//
              var bClick = false ;   //表示点击
				
				$(".floatCtro p").click(function(){//右边的导航栏中的p
					bClick = true ;   //表示点击
					//$(this).index   //对应的楼层   $('.popular')的index
					var _top = $('.popular').eq($(this).index()).offset().top;
					$('html,body').animate({
						scrollTop:_top
					},1000,function(){
						bClick = false ;   //表示点击的动画结束 
					});
					//修改nav的样式
				   //给对应$(".floatCtro p")添加样式 并且移除其他的样式
					$(this).addClass('cur').siblings().removeClass('cur');
                     
				})
                $(".floatCtro a").click(function(){//点击top
                	$('html,body').animate({
						scrollTop:0
                	})
                	$(".floatCtro p").removeClass("cur");
                })
              $(window).scroll(function(){
				
				var _top = $(document).scrollTop();
				
				if(_top>=200){
					$(".site-header").css({//显示搜索栏在浏览器中
						"position": "fixed",
						"top": 0,
						"left":0,
						"right":0,
						"z-index":99,
						"opacity":0.8,
					    
					     
					})  
//				
				}else{
					$(".site-header").css({//将搜索栏恢复原位
						"position":" relative",
						"top": 0,
						"opacity":1,
						"padding-top": 35,
						"height": 75,
						"background": "#FFFFFF",
					})	
				}
				if (_top>=2200) {
					$(".floatCtro").show();//显示右边的导航栏
				} else{
					$(".floatCtro").hide();
				}
				
						if(!bClick){
						$('.popular').each(function(idx,ele){//
						if(_top >= $(ele).offset().top &&_top<= $(ele).offset().top + $(ele).outerHeight()/2){
							//console.log(idx);
							$(".floatCtro p").removeClass("cur").eq(idx).addClass("cur");//右边的导航栏的各个p与.popular相对应
							
						}
						
					});
					}
			})
              
		
	 	$("#main-footer").load("footer.html");
	 })