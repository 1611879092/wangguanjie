/**
 * Created by user on 2018/1/10.
 */
window.onload=function(){


    //获取每个盒子的id
    function tab(obj){
                     var target=document.getElementById(obj);
                   //获取对应id下的标签
                    var spans=target.querySelectorAll(".dailyTab span");
                   var uls=target.getElementsByTagName("ul");
                    for(var i=0;i<spans.length;i++){
                          spans[i].index=i;//设置索引号
                           spans[i].onmouseover=function(){
                                   for(var j=0;j<spans.length;j++){
                                         //清除所有的 类
                                            uls[j].className="";
                                           spans[j].className="";

                                    }
                                   //显示当前点击的类
                                    this.className="on";
                               uls[this.index].className="show";//li利用spans.index,span和li对应起来
                           }
                         }
               }

    tab("paihang");

}