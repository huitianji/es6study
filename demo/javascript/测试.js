
//2如果有一个大的数组，都是整型，怎么找出最大的前10个数

var arr = [10,20,30,40,50,1,2,3,4,8,60];

var newArr = arr.sort(function(a,b){return b-a});
var maxStack = [];
for (var i = 0; i<newArr.length;i++) {
    if ( i<10 ) {
        maxStack.push(newArr[i])
    }
}

//3说说C++,Java，JavaScript这三种语言的区别

/*
 相同点：都是基于面向对象语言，语法结构大同小异


 C++最擅长的是用来做系统。它的效率高

 JAVA效率偏低，适合用来中小程序，特别是小程序，比如现在的手机上使用的程序和网页上的小程序

 而javascript是一种脚本，一般用于网站建设当中~


* */

//4.知道数据结构里面的常见的数据结构

/*
 JS内置了Array和object。

 - 可变长的普通数组
 - tuple（固定长度的短数组）
 - stack（push/pop）
 - queue（push/shift 或 unshift/pop）

 此外，JS的对象是基于原型的，所以天然支持 Prototype 模式。
 ES6 增加了 Typed Array 和 ArrayBuffer，可以视作连续的内存块。
 ES6 还增加了 Map、Set、WeakMap、WeakSet 等数据结构。未来 JS 可能会支持基于 ArrayBuffer 的 Struct。



* */


//6-display：table和本身的table有什么区别

/*



 display：table和本身的table有什么区别


 1、用DIV+CSS编写出来的文件k数比用table写出来的要小，不信你在页面中放1000个table和1000个div比比看哪个文件大

 2、table必须在页面完全加载后才显示，没有加载完毕前，table为一片空白，也就是说，需要页面完毕才显示，而div是逐行显示，
 不需要页面完全加载完毕，就可以一边加载一边显示

 3、非表格内容用table来装，不符合标签语义化要求，不利于SEO

 4、table的嵌套性太多，用DIV代码会比较简洁




* */


//7--position属性的值有哪些及其区别

/*

 static
 元素框正常生成

 relative
 元素框偏移某个距离

 absolute
 元素框从文档流完全删除，并相对于其包含块定位。


 fixed
 元素框的表现类似于将 position 设置为 absolute，不过其包含块是视窗本身。

* */

//8--HTML5新增的元素

/*
 1、标签语义化，比如header，footer，nav，aside，article，section,<mark><progress><time>等，
 新增了很多表单元素，入email，url等，除去了center等样式标签，还有除去了有性能问题的frame，frameset等标签

 number/tel/search/color/range/date、month、week、time、datatime

 2、音视频元素，video，audio的增加使得我们不需要在依赖外部的插件就可以往网页中加入音视频元素。

 3、新增很多api，比如获取用户地理位置的window.navigator.geoloaction，

 4、websocket

 websocket是一种协议，可以让我们建立客户端到服务器端的全双工通信，这就意味着服务器端可以主动推送数据到客户端，

 5、webstorage，webstorage是本地存储，存储在客户端，包括localeStorage和sessionStorage，localeStorage是持久化存储在客户端，
 只要用户不主动删除，就不会消失，sessionStorage也是存储在客户端，
 但是他的存在时间是一个回话，一旦浏览器的关于该回话的页面关闭了，sessionStorage就消失了，

* */

//9-操作系统里面进程和线程的区别
/*
 线程是指进程内的一个执行单元,也是进程内的可调度实体

 进程内的一个执行单元;进程至少有一个线程;

 线程是处理器调度的基本单位,但进程不是.

 资源拥有:进程是资源分配和拥有的单位,同一个进程内的线程共享进程的资源
* */




//--react---vue  区别。。
/*
 总结一下，我们发现的，Vue的优势是：

 模板和渲染函数的弹性选择
 简单的语法和项目配置
 更快的渲染速度和更小的体积
 React的优势是：

 更适合大型应用和更好的可测试性
 Web端和移动端原生APP通吃
 更大的生态系统，更多的支持和好用的工具
 然而，React和Vue都是很优秀的框架，它们之间的相似之处多过不同之处，并且大部分的优秀功能是相通的：

 用虚拟DOM实现快速渲染
 轻量级
 响应式组件
 服务端渲染
 集成路由工具，打包工具，状态管理工具的难度低
 优秀的支持和社区
* */


//攻击---
/*
 XSS

 一：【跨站脚本攻击-通过向某网站写入js脚本来实现攻击-SQL注入】

 1. 非持久型攻击
   ...
     如搜狗搜索xss：https://www.sogou.com/web?query=xss。

     那么网页中将存在会大量的a标签中带有query=xss。
     假如搜狗不给参数做任何安全处理，此时只要把query=xss改成query=xss"a/><script>alert('XSS')</script>
    那么再打开此链接，就会直接执行alert。当然搜狗肯定是做了安全处理了。
    ..这种攻击都是一次性的，得先找到漏洞地址后，设置好url，然后发给别人，诱使别人点击，从而通过执行脚本，获取对方的cookie。
    你得到对方的cookie后，就可以为所欲为了。

 2. 持久性攻击

    ..而是直接把注入代码写到网站数据库中

     有些网站呢，是内容生成网站，比如很多的博客站，有非常多的用户输入页。用户敲了一篇博客，存到网站数据库，然后网站读出内容，呈现给其他用户。

     此时，如果不对用户输出的内容加以过滤，就可以注入一些js脚本内容。这样，别人看到这篇博客时，已经在执行他写的js脚本了。

     之前新浪微博就爆发过这样的漏洞，一些大V先是中了招，然后自动向粉丝发送被攻击的页面地址，于是不断循环。


 如何防范:

 1. 过滤用户输入

 千万不要相信用户的任何输入，不要认为用户都是无害的。他们会想尽办法的绕弯来攻击。所以，任何用户的任何输出，都是不可信的。
 对于网站上有用户输入的部分，如各种表单内容、富文本内容，
 都应该对【js脚本进行过滤，直接去除或者替换修改。】

 2. 对不可信输出编码

 虽然已经过滤了用户输入，但总有可能百密一疏。所以还是不能相信任何用户输入的内容。如果网站需要将这些内容输出到页面上，
 必须得对这些数据先进行    【转义、编码】。
 3. 安全Cookie

 之所以XSS能干很多坏事，有一部分是因为获取到了其他用户的cookie。
 【所以将cookie设置HttpOnly后，】js就无法获取到该网站的cookie。
 自然也没办法将其他用户的隐私信息传到自己的服务器。

 4. 提高防范意识、多测试

 如XSS、CSRF这样的攻击，已经有了很多成熟的防范手段，相信大家随便搜搜都能找到。
 但重点还是得培养这个防范意识，对于任何有可能执行脚本的地方，都应该多提防。
 对于任何用户输入的地方，都应该多测试，现在也有很多XSS测试工具。


 二：CSRF
 CSRF全称跨站请求伪造（Cross-site request forgery）。
 一听好像跟XSS没什么差，确实XSS也是实现CSRF的一种手段。XSS点是在于跨站注入脚本，进而干坏事。
 CSRF点在于利用各种手段，实现伪造其他网站请求，不一定是通过XSS


 常见攻击途径：
 1. 通过GET请求
 。。《1》. 假如某博客网站发布留言的请求是 get: http://www.blog.com/message?content=留言内容。

 现在我登录了此博客网站A，然后又访问了另外一个网站B，B网站直接跳转到:http://www.blog.com/message?content=嘿嘿嘿。
 那么你就在A网站自动的留言了一条“嘿嘿嘿”这样的内容。

 所以说一切操作资源的请求，都不应该是GET请求。

 《2》. 通过XSS

 之前也阐述过，如果cookie设置的不安全，就可以通过xss获取他人的cookie，
 有了别人的cookie，服务端再也分不清我是敌是友了，便可以为所欲为。
 切记，通过xss获取到cookie，发起的CSRF攻击，理论上无法防御。
 但可以通过一些手段提高技术门槛。

 防御手段：
 1.规范请求类型。

 任何资源操作的请求，必须是POST、PUT、DELETE，总之不能是GET

 2.检查Referer

 即检查请求头中的来源网站，从而保证此次请求来源于信任的网站。

 3.设置请求Token

 当我访问页面时，服务端会在页面写入一个随机token值,并设置token生命周期。之后我的请求就必须带上此次token值，
 请求过的token就会失效，无法再用。更加安全性的页面，如登录页面，应该加验证码。

 4.防住第一道防线-XSS

 再次强调，如果cookie被别人拿走，任何防御都将在理论上失效。上述的防御手段仅仅是提高攻击门槛。有了你的cookie，
 我可以直接请求你的页面，获取你的token，获取你的验证码图片并解析出来，然后再发起请求。而服务器还以为这是你本人。


* */

//nodejs --java  看法
/*

 nodejs强在IO上，但对CPU利用率不高
 IO强是因为它是单线程非阻塞模式

 事实情况是javascript要成为java

 node有子进程模块，可以fork出多个进程，充分利用多核CPU。


 nodejs 可以往全栈发展，js作为一门脚本语言，写起来是很方便的。


 前期开发，据说使用nodejs的速度更快，但是到了一定量的代码之后，可维护性不如java。(毕竟java是静态语言，以上是据说。)
 性能方面，据说使用NodeJS会比Java快一些。但是我相信Java也可以得到同样的效率，只是付出的代价要大一些。
 构建方面，Java项目使用的maven,gradle构建，其构建语言都不是java。nodejs的构建使用的就是javascript语言。

 库方面，java这么多年，库比javascript要多，比如一些图像处理的库java有javascript就没有啊。各种工具都比较成熟，比如openstack，RabbitMQ等。
 当然nodejs的库也不少，尤其是用于网站开发的库。
    path,fs,require


 【对目前的前端和以前的jsp的看法】

 1.jsp上动态资源和静态资源全部耦合在一起，服务器压力大，因为服务器会收到各种静态资源的http请求，动态代码的等等，除非你使用nginx。
 万一你的java代码出现了bug，你的页面是显示不出来的，直接蹦到了5xx页面，用户体验极差。

 2.前端工程师做好html后，需要由后端的java工程师来将html修改成jsp页面，包括各种文件的路径，出错率较高

 3.jsp必须要在支持java的web服务器里运行（例如tomcat/resin/jboss/weblogic等），性能提不上来。

 4.第一次请求jsp，必须要在web服务器中编译成servlet，第一次运行会较慢。

 5.每次请求jsp都是访问servlet再用输出流输出的html页面，效率没有直接使用html高（记住是每次哟~~~内存哟，IO哟）。


 6.如果在生产环境中，发现了前端的bug，让前端工程师来调试bug，这个时候的页面已经很混乱了，呵呵，他会遇到很多痛点。

 7.如果jsp中的内容很多，页面响应会很慢，因为是同步加载。



 新的方式是：


 1.浏览器发送请求
 2.直接到达html页面（路由规则由前端制定，整个项目开发的权重前移）
 3.html页面负责调用服务端接口产生数据（通过ajax等等，后台返回json格式数据）
 4.填充html，展现动态效果，在页面上进行解析并操作DOM。

 这样做的好处是：
 1.可以实现真正的前后端解耦，前端服务器使用nginx。
 2.发现bug，可以快速定位是谁的问题，不会出现互相踢皮球的现象。
 3.在大并发情况下，我可以同时水平扩展前后端服务器，比如淘宝的一个首页就需要2000+台前端服务器做集群来抗住日均多少亿+的日均pv。
 4.减少后端服务器的并发压力，除了接口以外的其他所有http请求全部转移到前端nginx上。
 5.即使后端服务暂时超时或者宕机了，前端页面也会正常访问，只不过数据刷不出来而已。
 6.也许你也需要有微信相关的轻应用，那样你的接口完全可以共用，如果也有app相关的服务，那么只要通过一些代码重构，也可以大量复用接口，提升效率
 7.页面显示的东西再多也不怕，因为是异步加载。

* */

//堆栈问题 abcd
/**
 1.在原序列中相对位置比他小的,必须为逆序.
 2.在原序列中相对位置比他大的,顺序无要求.
 3.上1点与2点可以互相插入.
 */

/*
 将json字符串'{"a": 1, "b": "str", "c":[2, 3], "d":{"e": 4}}'
 转化为如下格式：
 {
     "a": 1,
     "b": "str",
     "c": [
         2,
         3
     ],
     "d": {
         "e": 4
     }
 }
* */
/*
*
* */

let obj=JSON.parse('{"a": 1, "b": "str", "c":[2, 3], "d":{"e": 4}}');
let s="";
s+="{\n"+solve(obj,1)+"}";
function solve(obj,tab) {//没有缩进版本的
    let tmp="";
    if(Array.isArray(obj)){
        tab++;
        for(let i in obj){
            tmp+=addEmpty(tab)+i+",\n";
        }
    }
    else{
        for(let i in obj){
            tmp+=addEmpty(tab);
            if(typeof obj[i]!="object"){
                if(typeof obj[i]=="string"){
                    tmp+='\"'+i+'\":\"'+obj[i]+'\"';
                }else{
                    tmp+='\"'+i+'\":'+obj[i];
                }
            }else if(Array.isArray(obj[i])){
                tmp+='\"'+i+'\":'+"[\n"+solve(obj[i],tab)+addEmpty(tab)+"]";
            }else{
                tmp+='\"'+i+'\":'+"{\n"+addEmpty(tab)+solve(obj[i],tab)+addEmpty(tab)+"}";
            };
            tmp+=",\n";//这里还需要处理下，因为最后一项是没有逗号的,但是我的是每一项有逗号。
        }
    }
    return tmp;
}
function addEmpty(tab){
    let tmp="";
    for(let i=0;i<tab;i++){
        tmp+="     ";
    }
    return tmp;
}
console.log(s);
//
//测试










































