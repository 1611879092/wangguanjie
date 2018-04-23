/**
 * Created by user on 2018/1/16.
 */
$(function(){
    $(".zhuanke  .kecheng:eq(0)").css("padding-top",0);
//导航部分
    var nowurl = window.location.href;
    //alert(nowurl);
    $(".nav").find("li").each(function(){
            if(nowurl.indexOf($(this).children("a").attr("href"))>0){
                $(this).addClass("on");
                $(this).siblings().removeClass("on");
            }
    })

//sss();
//  function sss(){
//      var flag=true;
//      for(var i=0;i<$(".kecheng").length;i++){
//          if(flag){
//              $(".kecheng:last").css("padding-bottom",0);
//              $(".kecheng:eq(-2)").css({
//                  "padding-bottom":0,
//                  "border-bottom":"1px solid #fff"
//              })
//              flag=false;
//          } else{
//              alert("ddd")
//              $(".kecheng:last").css("border-right",0)
//              $(".kecheng:eq(-2)").css({
//                  "border-bottom":"1px solid #e8e8e8"
//              })
//              flag=true;
//          }
//
//      }
//  }

    //if(nowurl.indexOf("/portal/organization/")>=0){
    //    var nowli = $(".nav").find("li").eq(1);
    //    $(nowli).addClass("on");
    //    $(nowli).siblings().removeClass("on");
    //}else if(nowurl.indexOf("/portal/course")>=0){
    //    var nowli = $(".nav").find("li").eq(2);
    //    $(nowli).addClass("on");
    //    $(nowli).siblings().removeClass("on");
    //}
    //else if(nowurl.indexOf("/portal/weike")>=0){
    //    var nowli = $(".nav").find("li").eq(3);
    //    $(nowli).addClass("on");
    //    $(nowli).siblings().removeClass("on");
    //}
    //else if(nowurl.indexOf("/portal/resourcecenter")>=0){
    //    var nowli = $(".nav").find("li").eq(4);
    //    $(nowli).addClass("on");
    //    $(nowli).siblings().removeClass("on");
    //}
    //else if(nowurl.indexOf("/portal/mokuai")>=0){
    //    var nowli = $(".nav").find("li").eq(5);
    //    $(nowli).addClass("on");
    //    $(nowli).siblings().removeClass("on");
    //}
    //else if(nowurl.indexOf("/portal/featureresource")>=0){
    //    var nowli = $(".nav").find("li").eq(6);
    //    $(nowli).addClass("on");
    //    $(nowli).siblings().removeClass("on");
    //}
    //else if(nowurl.indexOf("/portal/organization2/")>=0){
    //    var nowli = $(".nav").find("li").eq(7);
    //    $(nowli).addClass("on");
    //    $(nowli).siblings().removeClass("on");
    //}
    //else if(nowurl.indexOf("/portal/organization3/")>=0){
    //    var nowli = $(".nav").find("li").eq(8);
    //    $(nowli).addClass("on");
    //    $(nowli).siblings().removeClass("on");
    //}
    //else if(nowurl.indexOf("/portal/organization4/")>=0){
    //    var nowli = $(".nav").find("li").eq(9);
    //    $(nowli).addClass("on");
    //    $(nowli).siblings().removeClass("on");
    //}
    //else{
    //    var nowli = $(".nav").find("li").eq(0);
    //    $(nowli).addClass("on");
    //    $(nowli).siblings().removeClass("on");
    //}
    //鼠标经过事件
    $(".nav li .xiala .xiaL  li").removeClass("on");
    $(".nav li ").mouseenter(function(){
        $(this).children(".xiala").show();
    }).mouseleave(function(){
        $(this).children(".xiala").hide();

    })




    //var  key=null;
    //$(".subnav li").click(function(event) {
    //    key=$(this).index();   /*当我们点击的li 的时候，屏幕开始滑动*/
    //    $("body,html").stop().animate({"scrollTop":$(".w").eq(key).offset().top},2000);
    //
    //})
    //特色资源下拉"scrollTop":$(".teseTab").eq(teseKey).offset().top
    var teseKey=null;
    $(".xiala .xiaL  li").click(function(){
        teseKey=$(this).index();
        $("body,html").stop().animate({"scrollTop":$(".teseTab").eq(teseKey).offset().top},1000);
        return false;

    })



   //频道入口
    //遍历所有的
    //var PinNum=null;
    //$(".IncontC  .pindao ul li").each(function(index,el){
    //    PinNum=-index*98;
    //    $(el).find(".PicImg").css("background-position",0+"px "+PinNum+"px");
    //})

    $(".IncontC  .pindao ul li").hover(function(index){
        var index=$(this).index()+1;
        $(this).find("img").attr("src","asstes/images/pindaoH_0"+index+".png")
    },function(index){
        index=$(this).index()+1
        $(this).find("img").attr("src","asstes/images/pindao_0"+index+".png")
    })

//动态排行
      function paihangTab(Alltabs,abs){
          var $jiaoCurrent=null; //记录当前的操作对象
          var $jiaoTimer=null;
          $(Alltabs).each(function(index,el){
                  $(this).click(function(el){
                   $jiaoCurrent=$(this);//把当前的给$jiaoTimer
                      $jiaoTimer=setTimeout(jiaoFun,30);
                     function jiaoFun(){
                        $jiaoCurrent.addClass("on").siblings("a").removeClass("on");
                          $(abs).eq(index).show().siblings("ul").hide();
                     }
               })
             })
      }

    paihangTab(".IncontC  .jiaoshiW .jiao",".dongtaiCon ul");
    paihangTab(".tuijian .jiaoshiW .jiao",".tuijianCont ul.courseList");





    //做带定时器的tab切换，必须借助于each遍历
    //var $jiaoCurrent=null; //记录当前的操作对象
    //var $jiaoTimer=null;
    //$(".dongtai .jiaoshiW .jiao").each(function(index,el){
    //     $(this).click(function(el){
    //         $jiaoCurrent=$(this);//把当前的给$jiaoTimer
    //         $jiaoTimer=setTimeout(jiaoFun,30);
    //         function jiaoFun(){
    //             $jiaoCurrent.addClass("on").siblings("a").removeClass("on");
    //             $(".dongtaiCon ul").eq(index).show().siblings("ul").hide();
    //         }
    //     })
    //})

//课程中心

    function  zhankai(abjs,Height){
        //$(abjs).children("ul").css("height","60px")
        var $zhanflag=true;
        var space=600;
        $(".yuanxiaoAll .zhankai").click(function(){
            //$(abjs ).stop().slideToggle();
            if($zhanflag){

                $(this).parents(abjs).children(".yy-kk").stop().animate({"height":"100%"},space);
                $(this).find("img").attr("src","asstes/images/zhankaiP.png")
                $(this).find("p").html("隐藏");
                $zhanflag=false;
            } else{
                //alert("ddd");
                $(this).parents(abjs).children(".yy-kk").stop().animate({"height":Height},space);
                $(this).find("img").attr("src","asstes/images/zhankaiU.png");
                $(this).find("p").html("展开");
                $zhanflag=true;
            }
        })
    }

    zhankai("#oness","70px")
    zhankai("#yuanxiao","70px");


    //弹框
    $(".xuanze").click(function(){

        $(".xuexiao_Bg").stop().fadeTo(500,1);
        $(".xuexiao_wrap").stop().fadeTo(600,1);
    })

    //关闭弹框
    $(".xuexiao_wrap #guanbi").click(function(){
        $(".xuexiao_Bg").stop().fadeTo(600,0).css("display","none");
        $(".xuexiao_wrap").stop().fadeTo(500,0).css("display","none");
    })


//添加

    //点击清除
    $(".yuanAllNameLab .clears").click(function(){
        $(this).prev().val('');
    })





      function subdata(){

        //document.conditionform.submit();
        var spoption='';
        var atoption='';
        var school='';
        var specialty='';
        var sfkoption = 0;
        // 选中回显处理
        // 学院
        var value = $('input:radio[name="school"]:checked').next().text();
        document.getElementById("school_name").value=value;
        //  专业
        var value1 = $('input:radio[name="spoptions"]:checked').next().text();
        document.getElementById("spoptions_name").value=value1;
        // 属性
        var value2 = $('input:radio[name="atoptions"]:checked').next().text();
        document.getElementById("atoptions_name").value=value2;
        // 类型
        var value3 = $('input:radio[name="sfkoptions"]:checked').next().text();
        document.getElementById("sfkoptions_name").value=value3;
        //标签
        var keywords = $('input:radio[name="keywords"]:checked').next().text();
        // 清空
          alert("dd")
        var radio=document.getElementsByName("spoptions");
        for(var i=0;i<radio.length;i++){
            if(radio[i].checked==true){
                spoption=radio[i].value;
                break;
            }
        }

        var radio1=document.getElementsByName("atoptions");
        for(var i=0;i<radio1.length;i++){
            if(radio1[i].checked==true){
                atoption=radio1[i].value;
                break;
            }
        }

        var radio2=document.getElementsByName("school");
        for(var i=0;i<radio2.length;i++){
            if(radio2[i].checked==true){
                school=radio2[i].value;
                break;
            }
        }

        var radio3=document.getElementsByName("specialty");
        for(var i=0;i<radio3.length;i++){
            if(radio3[i].checked==true){
                specialty=radio3[i].value;
                break;
            }
        }

        //alert("Data Loaded: " + spoption+"@@@@@"+atoption);
        var content=$("#searchcontent").val();
        if(content==""){
            content=0;
        }
         //alert(school);
        var radio4=document.getElementsByName("sfkoptions");
        for(var i=0;i<radio4.length;i++){
            if(radio4[i].checked==true){
                sfkoption=radio4[i].value;
                break;
            }
        }


        $.ajax({
            url: '/portal/coursecenter/index/spid/'+spoption+"/atid/"+atoption+"/content/"+content+"/keywords/"+keywords+"/school/"+school+"/sfkid/"+sfkoption+".html",
            type: 'get',
            data: '&rm='+Math.random(),
            dataType: "html",
            success: function(data){
                //alert("Data Loaded: " + data);
                //console.log(data);
                $("#row1").html(data);
            },
            error: function(){
                alert("系统错误，请联系管理员");
            }
        });



    }

})


