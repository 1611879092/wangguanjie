
$(function(){

   var  $Key=0;
   var  $Timer=null;

 //给li指定宽度
 //   $(".Inbanner ul li ").width($(window).width());
 //   $(".Inbanner ul li img").width($(window).width());
 //
 //    var ssss=$(".Inbanner ul li img").height();
 //   $(".Inbanner").height(ssss);
    //当窗口改变的时候，将此时的窗口宽度也要赋值给li
    //autoplay()
    ssddf()
    function ssddf(){

        $(".Inbanner ul li ").width($(window).width());
        $(".Inbanner ul li img").width($(window).width());

        var ssss=$(".Inbanner ul li img").height();
        $(".Inbanner").height(ssss);

    }
$(window).resize(function(){
    ssddf()
    autoplay()
})






    //点击右侧按钮
    $(".right").click(function(){
        autoplay();
    })

    //点击左侧按钮
    $(".left").click(function(){
        $(".Inbanner ul li").eq($Key).fadeOut(600);
        $Key--;
        $Key=$Key%$(".Inbanner ul li").length;
        $(".Inbanner ul li").eq($Key).fadeIn(600);
        $(".Inbanner ol li").eq($Key).addClass("on").siblings().removeClass("on");
    })


    $Timer=setInterval(autoplay,2000);
    function autoplay(){

        $(".Inbanner ul li").eq($Key).fadeOut(600);
        $Key++;
       $Key=$Key%$(".Inbanner ul li").length;
        $(".Inbanner ul li").eq($Key).fadeIn(600);
        $(".Inbanner ol li").eq($Key).addClass("on").siblings().removeClass("on");
    }


    //鼠标经过
    $(".Inbanner").hover(function(){
        clearInterval($Timer);
        $(".arrow a.right,.arrow a.left").show()
    },function(){
        clearInterval($Timer);
        $(".arrow a.right,.arrow a.left").hide();
        $Timer=setInterval(autoplay, 2000);
    })




    $(".Inbanner ol li").click(function(event){

        $(".Inbanner ul li").eq($Key).fadeOut(600);
        $Key=$(this).index();
        $(this).addClass('on').siblings().removeClass("on");
        $(".Inbanner ul li").eq($Key).fadeIn(600);

    })


})