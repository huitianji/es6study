//
/*
 1、HTML常见的行内元素?block inline-block inline的区别？
 (1) span,b,strong,em,i,label,input,select,textarea,button，img,a

 2、H5新增了哪些标签？input新增了哪些类型？
    (1):header,nav,section,aside,article,hgroup,video,audio,mark,progress,time,footer,canvas
    (2):email,url,number,tel,search,color,range,date,month,day,time,file

 3、什么是BFC？什么情况会产生BFC？

    BFC：块级格式化上下文，与外界元素互不影响，是一个隔离的独立容器

    (1、浮动元素  2、绝对定位  3、display：inline-block，table-cell，table-caption  flex  4、overflow不为visible)

 4、css实现两列容器等高布局，要求元素实际占用高度以两列中最高的为准

     1、子元素拥有相同高度：display：flex;  flex:1;

     2、左右元素浮动,padding-bottom:9999px,margin-bottom:-9999px,父元素：overflow：hidden


 5、垂直水平居中的方法：

     1、绝对定位。top:50%,left:50%,margin-left:-width/2,margin-top:-height/2

     2、绝对定位。left：50%，top：50%，transform:translateX（-50%） translateY（-50%）;

     3、flex布局。父元素：display:flex,justify-content:center,align-items:center

     4、table-cell 父元素：display:table-cell,text-align:center,vertical-align:middle

     5、绝对定位，margin:auto,top:0,bottom:0,left:0,right:0

 6、写出程序运行结果？

     typeof:Number,String,boolean,function,object,undefined

     console.log（typeof（null））:object

     console.log（typeof（undefined））:undefined

     console.log（typeof（NaN））："number"

     console.log（NAN == undefined）:NAN is not defined

     console.log（1+2+‘3’+4）：334

     var str = '12345f';

     console.log（typeof（str++））:number

     console.log（‘str’== new String（'str'））:false

 代码段1：
     var x=1,y=0,z=0;
     var add=function(x){
        return x = x+1;
     }
     y=add(x);
     function add(x){
        return x=x+3;
     }
     z = add(x);
     console.log(x,y,z);
     //输出1,2,2 原因：通过var声明的函数的引用不会被后面的函数改变

     var foo=function(){  console.log(1); }
     function foo(){  console.log(2); }
     foo();  //结果为1
     同样的，函数的定义也会到提升到最前面，上面的代码相当于
     function foo(){  console.log(2); }
     var foo;
     foo=funciton(){ console.log(1); }
     foo();   //1

 代码段2：
     var num=1;
     var myObject ={
         num :2,
         add:function(){
             this.num=3;
             (function(){
                 console.log(this.num);
                 this.num=4;
             })();
             console.log(this.num);
         },
         sub:function(){
             console.log(this.num);
         }
     }

     myObject.add(); //1   3

     console.log(myObject.num); //2
     console.log(num);  //1
     var sub = myObject.sub;
     sub();  // 1

 代码段3：
     var i=0;
     for(var i=0;i++<3;){
         setTimeout(function(){
             return function (){
             console.log(i);
         }
         }(),0);
     }


 7、js中new操作符具体做了什么，用代码解释

     例：var obj = new Base();

     该步一共做了三件事：即    var obj  = {}; obj.__proto__ = Base.prototype; Base.call(obj);

     第一行，我们创建了一个空对象obj

     第二行，我们将这个空对象的__proto__成员指向了Base函数对象prototype成员对象

     第三行，我们将Base函数对象的this指针替换成obj。

 8、合并两个升序数组为一个升序数组

     var a=[1,3,4,5,7,8,9];
     var b=[3,4,5,6,7,8,9];

     var c= a.concat(b);
         console.log(c);
         for(var i=0;i<c.length;i++){
             for(var j=i+1;j<c.length;j++){
                 if(c[i]==c[j]){
                 c.splice(j,1);
                 j--;
             }
         }
     }

     console.log(c);
     c.sort();
     console.log(c);
    方法2：
     var a=[1,3,4,5,7,8,9];
     var b=[3,4,5,6,7,8,9];

     var c= a.concat(b);

     var newArr = [];
     for (var i = 0;i<c.length;i++) {
         if ( newArr.indexOf(c[i]) != -1 ) {
            newArr.push(c[i]);
         }
     }
     newArr.sort(function (a,b){return b-a});


 9、实现全选框联动
 <div class="wrap">
 请选择爱好：<br/>
 <input type="checkbox" name="choose">跳舞
 <input type="checkbox" name="choose">跳水
 <input type="checkbox" name="choose"/>跳棋
 <input type="checkbox" name="choose"/>跑步<br/>
 <input type="checkbox" name="allChecked" id="allChecked" onclick="DoCheck()"/>全选/取消

* */
function DoCheck() {
    var ch=document.getElementsByName("choose");
    if(document.getElementsByName("allChecked")[0].checked==true) {
        for(var i=0;i<ch.length;i++)
        {
            ch[i].checked=true;
        }
    }else{
        for(var i=0;i<ch.length;i++)
        {
            ch[i].checked=false;
        }
    }
}













