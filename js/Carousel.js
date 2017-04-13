function Carousel(iTarget){
			var $ul = $(".picList").eq(iTarget).children().eq(0).clone();//复制第一张图到最后则为六张图
			$(".picList").eq(iTarget).append($ul);
			var Width = $(".picList").eq(iTarget).children().eq(0).width()*$(".picList ul").length;//ul的宽度发生改变
			$(".picList").eq(iTarget).css("width",Width);
            var timer = setInterval(move,5000);//图片向左轮播
			var i=0; 
			function move(){ 
				i++; 
			    $(".picList").eq(iTarget).animate({
						"left":-i*$(".picList").eq(iTarget).children().eq(0).width()	
				},function(){
					if(i==$(".picList").eq(iTarget).children().length-1){//当运动到最后一张图时
						i=0;
						$(".picList").eq(iTarget).css("left",0);
						$(".hd1") .eq(iTarget).children().find($("li")).eq(0).css("background","red");
					};
				})
                 colorUl();
			}
		
		function colorUl(){//让小圆的变化与图片的变化相对应
				$(".hd1") .eq(iTarget).children().find($("li")).css("background","white");
             
				$(".hd1") .eq(iTarget).children().find($("li")).eq(i).css("background","red");
				
			}	
       //给按钮来添加事件
       $(".hd1") .eq(iTarget).children().find($("li")).each(function(index,ele){//遍历小圆
       	    $(".hd1") .eq(iTarget).children().find($("li")).eq(index).click(function(){
       	    	i = $(this).index()-1;//前边有i++
       	    	btnMove()
       	    })
       })
			
				//点击切换图片			
				function btnMove(){
					move(); //调用move 执行移动
					
					//点击之后，让图片间隔3秒后再进行切换
					clearInterval(timer);
					timer = setInterval(move,2000);
				}
				
			$(".picList").eq(iTarget).hover(function(){//当鼠标移入时
				clearInterval(timer)
			},function(){//当鼠标移出时
				timer = setInterval(move,5000)
			})
				
		}		