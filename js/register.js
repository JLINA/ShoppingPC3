                     var CartCookie =JSON.parse($.cookie("good"));
						 console.log($.cookie("good"));
						 $.each(CartCookie, function(){
						 	        var $li = $('<li/>');
								    var Title1 ="<span class='tit'>"+this.data.title1+"</span>";								    
									var img = "<img src="+this.data.img+" alt='' />";
									var Price = "<span class='Price'>"+this.data.price+"</span>";
									var dele = "<span class='dele'>删除</span>";
									$li.html(Title1+img+Price+dele).appendTo($('#mycart'));
			            })
			            $(".dele").click(function(e){
			            	    $(this).closest('li').remove();
			            	    var title11 = $(e.target).parent().find('.tit').html();
			            	     $.each(CartCookie,function(index,ele){
										if(this.title1 ==title11){										
											CartCookie.splice(index,1);
										}
							       })
			            		$.cookie("good",JSON.stringify(CartCookie),{expires:7 , path:"/"});
			            		console.log($.cookie('good'))   
						})		
