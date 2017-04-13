$(function($){
			$(".main-header").load("hearder.html"); 
			//顾客注册
		
			var $Iput1 = $(".Register").find(".item-ifo").eq(0).find("input");
			var $Iput2 = $(".Register").find(".item-ifo").eq(1).find("input");
			var $Iput3 = $(".Register").find(".item-ifo").eq(2).find("input");
			var TAG1 = false;
			var TAG2 = false;
			var TAG3 = false;
		
			$Iput1.blur(function(e){
				
				var nuMber = $(this).val(); 
				var iStrue1=/^\w{3,}@\w+(\.\w+)+$/.test(nuMber);
				var iStrue2= /^1\d{10}$/.test(nuMber);
				
			 if(iStrue1==true || iStrue2==true){ 
			
			 $(".Register").find(".item-ifo").eq(0).find("p").html("输入格式正确");
//			  
             TAG1 = true;
			 }else{
			 	 $(".Register").find(".item-ifo").eq(0).find("p").html("请输入正确的邮箱地址/手机号。");
			  
			 }
		  console.log("dsf"); 
//		  
			}) 
            
			$Iput2.blur(function(){

				var nuMber = $(this).val(); 
				
			  var iStrue=/^.{6,18}$/.test(nuMber);
			  var partn = /^[\S]*$/.test(nuMber);//如果存在空格则false
			
			 if((iStrue&partn) == true){ 
			 $(".Register").find(".item-ifo").eq(1).find("p").html("输入格式正确");
			   TAG2 = true;
			 }else{
			 	 $(".Register").find(".item-ifo").eq(1).find("p").html("密码为6-18位的字符，不能含空格,不能全为数字。");
			 
			 }
			 
			})
			
				
			$Iput3.blur(function(){
				var nuMber = $(this).val(); 
				var iStrue = (nuMber==1234)?true:false;
			 if(iStrue==true){ 
			 $(".Register").find(".item-ifo").eq(2).find("p").html("输入正确");
			   TAG3 = true;
			 }else{
			 	
			 	 $(".Register").find(".item-ifo").eq(2).find("p").html("请输入正确的验证码。");
			 }
			})
//			
//      console.log(TAG1);

            //保存cookie
           
			$(".Register").find(".item-ifo").eq(4).find("input").eq(0).click(function(){
			      var sUser=$Iput1.val();
			      var sPws = $Iput2.val();
			   
			   
			    if (TAG1==false||TAG2==false||TAG3==false) { 
			      	
			      $(".Register").find(".item-ifo").eq(0).find("p").html("请输入正确的邮箱地址/手机号。");
                  $(".Register").find(".item-ifo").eq(1).find("p").html("密码为6-18位的字符，不能含空格,不能全为数字。");
                  $(".Register").find(".item-ifo").eq(2).find("p").html("请输入正确的验证码。");

			      } else{
			      	
			      	var newUser = {"username":sUser,"Pws":sPws};//设置对象
			      	//获取cookie 
//			      	
                    var sCookie = $.cookie('user');  
			      	if (sCookie==""||sCookie==undefined) {//无用户信息
			      		var aCookie = [];
			      		aCookie.push(newUser);//[{{"username":sUser,"Pws":sPws}}]
			      		
			      	} else{//该网站已有用户注册过
			      		var aCookie = JSON.parse(sCookie);//将字符串转化为对象
			      		var  bReg  = false;  //表示用户没有被注册
			      		$.each(aCookie, function() {
			      			if(this.username==sUser){
			      				return bReg=true;
			      			}
			      		});
			      		
			      		if (bReg==true) {
			      			$(".Register").find(".item-ifo").eq(0).find("p").html("该邮箱地址/手机号已被注册。");
			      		} else{
			      			aCookie.push(newUser);
			      		} 
			      	}
			      }
			 $.cookie('user',JSON.stringify(aCookie),{expires:7 , path:"/"});
			   console.log($.cookie("user"));
			})
//			 
      
				
				
//                           登录
		$(".Signin").find(".item-ifo").eq(2).find("input").eq(0).click(function(){
			var $Input1 = $(".Signin").find(".item-ifo").eq(0).find("input").eq(0).val();
			var $Input2 = $(".Signin").find(".item-ifo").eq(1).find("input").eq(0).val();
			if ($Input1==""&&$Input2=="") {
				$(".Signin").find(".item-ifo").eq(0).find("p").html("内容不能为空");
				$(".Signin").find(".item-ifo").eq(1).find("p").html("内容不能为空");
			} else{
				$(".Signin").find(".item-ifo").eq(0).find("p").html("");
				$(".Signin").find(".item-ifo").eq(1).find("p").html("");
				var sCookie = $.cookie("user");
				if (sCookie==""||sCookie==undefined) {//该用户未注册
					var obj = {type:false};
				} else{
					var aCookie = JSON.parse(sCookie);//字符串转化为数组对象
					var bReg=true;//代表用户未注册
					$.each(aCookie,function(){
						
						if(this.username==$Input1&&this.Pws==$Input2){
					
							return bReg=false;//登录成功
						}
						
					})
					
					if (bReg==false) {
					var obj = {"type":true,"name":$Input1};//登录成功
					window.location.href = "index.html";
					
					}else{
						var obj = {"type":false};
						 
					}
				}
				$.cookie('login',JSON.stringify(obj),{expires:7 , path:"/"});//定义以login的cookie
				console.log($.cookie("login")); 
			} 
		})
	      
			
			$("#main-footer").load("footer.html");   //底部
		
  })  
