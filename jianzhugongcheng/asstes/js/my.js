$(function() {
	/*用jq写的，用jq语法，则一定要有jq包   my.js 一定在 jq包下面*/
	/*alert("你好吗");*/
	/*我们需要一个全局的变量，来控制图片的播放张数*/ 
	var $key=0; /*我的变量的前面加了一个$符号 就像强哥 喜欢吃面一样 个人习惯*/ 
	/*钥匙*/   /*the point of a praise*/ 
	/*alert($key);*/
   /*右侧按钮开始*/
    $(".right").click(function(event) {
         autoplay();  /*调用函数*/
    });
    /*左侧按钮 */

      $(".left").click(function(event) {
    	$(".banner_wap ul li").eq($key).fadeOut(600);  /*第一张图片 淡出 */
    	$key--;  /*后++*/   /*个人经验，一般情况下，先++后判断再执行*/
    	/*因为我们现在已经很处于第一张， 点击之后，看到第二张 所以先++*/
		$key=$key%$(".banner_wap ul li").length;  /*比较好的写法  利用取余的出来的*/

    	$(".banner_wap ul li").eq($key).fadeIn(600);   /*而张图片 淡出 */

        $(".banner_wap ol li").eq($key).addClass('on').siblings().removeClass('on');

    });

      /*定时器开始*/

       /*定时器实际上就点击右侧按钮*/
      /*  右侧的点击按钮需要人工服务   定时器，不需要人点，自己就执行  他们两个执行的是相同的命令*/
       var timer=setInterval(autoplay, 2000);  /*开启定时器*/
       function autoplay(){
	       	$(".banner_wap ul li").eq($key).fadeOut(600);  /*第一张图片 淡出 */
	    	$key++;  /*后++*/   /*个人经验，一般情况下，先++后判断再执行*/
	    	/*因为我们现在已经很处于第一张， 点击之后，看到第二张 所以先++*/

			$key=$key%$(".banner_wap ul li").length;  /*比较好的写法  利用取余的出来的*/

	    	$(".banner_wap ul li").eq($key).fadeIn(600);   /*而张图片 淡出 */

	        $(".banner_wap ol li").eq($key).addClass('on').siblings().removeClass('on');
       }
       /*当鼠标经过这个大盒子的时候，要关闭定时器*/

       $(".banner_wap").hover(function() {
          $(".left,.right").show();
          clearInterval(timer);
          timer=null;   /*节省内存*/
       }, function() {
         $(".left,.right").hide();
         /*一般开启定时器之前，首先先清除定时器*/
         clearInterval(timer);  
         timer=setInterval(autoplay, 2000);  
       });


      $(".banner_wap ol li").click(function(event) {
      	$(".banner_wap ul li").eq($key).fadeOut(600);  /*因为 我们不知道当前播放了第几张 当我们点击了这个ol li 的时候，把当前的那个隐藏起来*/
      	/*console.log($key);*/
      	$key=$(this).index();/* 把当前的索引号给$key 更该图片xuhao*/
      	$(this).addClass('on').siblings().removeClass("on");
      	/*console.log($key);*/
      	$(".banner_wap ul li").eq($key).fadeIn(600); /*显示出你点击的那个*/

        });
});