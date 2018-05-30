//缓存--
//https://blog.csdn.net/shenmill/article/details/71080926
/*
 为什么要使用缓存？

 提高访问速度：缓存相对服务端离用户更近，所以在请求过程中从缓存中取内容比在源服务器上取的内容用的时间更少，加快了用户体验。
 降低网络传输：副本被重复使用，大大降低了用户的带宽使用，其实也是一种变相的省钱（如果流量要付费的话），同时保证了带宽请求在一个低水平上，更容易维护了。

 缓存的种类
 缓存种类很多，像是浏览器缓存，cdn缓存等都是我们比较熟悉的，当然还有代理服务器缓存，网关缓存等，这里我主要介绍一下前两种

 浏览器缓存
 一个页面的缓存状态可以通过这两种方法去设置，meta标签和http header。
 meta标签常见以下几种用法
 <meta http-equiv="pragma" content="no-cache">

 pragma与no-cache用于定义页面缓存
 <meta http-equiv="cache-control" content="no-cache">

 常见的取值有private、no-cache、max-age、must-revalidate等，默认为private

 <meta http-equiv="Expires" content="0">
 指定Expires值为一个早已过去的时间，那么访问此网时若重复在地址栏按回车，那么每次都会重复访问


 Cache-Control 有几种属性：

 private：表示它只应该存在本地缓存
 public：表示它既可以存在共享缓存，也可以被存在本地缓存
 no-cache：表示不论是本地缓存还是共享缓存，在使用它以前必须用缓存里的值来重新验证
 no-store：表示不允许被缓存。
 max-age=：设置缓存时间，设置单位为秒。本地缓存和共享缓存都可以
 s-maxage=：覆盖 max-age 属性。只在共享缓存中起作用。
 immutable：表示文档是不能更改的。
 must-revalidate：表示客户端（浏览器）必须检查代理服务器上是否存在，即使它已经本地缓存了也要检查。
 proxy-revalidata：表示共享缓存（CDN）必须要检查源是否存在，即使已经有缓存。



 设置header

 一般是设置这几个header：

 cache-control
 expires
 last-modified
 etags
 处理流程一般如下：




 h5中的离线存储

 HTML5 引入了应用程序缓存，这意味着 web 应用可进行缓存，并可在没有因特网连接时进行访问。
 应用程序缓存为应用带来三个优势：

 离线浏览 - 用户可在应用离线时使用它们
 速度 - 已缓存资源加载得更快
 减少服务器负载 - 浏览器将只从服务器下载更新过或更改过的资源。

 <html lang="en" manifest="demo.manifest">
 ...
 </html>

* */


//2--递归。。

var f = function (x) {
    if (x === 1) {
        return 1;
    } else {
        return x * f(x - 1);
    }
};
//柯里化

function currying(fn) {
    var slice = Array.prototype.slice,
        __args = slice.call(arguments, 1);
    return function () {
        var __inargs = slice.call(arguments);
        return fn.apply(null, __args.concat(__inargs));
    };
}
//1
function fn() {
    return 20;
}

console.log(fn + 10); ///10
//2
function fn() {
    return 20;
}

fn.toString = function() {
    return 10;
}

console.log(fn + 10);//===20
//3
function fn() {
    return 20;
}

fn.toString = function() {
    return 10;
}

fn.valueOf = function() {
    return 5;
}

console.log(fn + 10);///15

//4

function add() {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    var _args = [].slice.call(arguments);

    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
    var adder = function () {
        var _adder = function() {
            [].push.apply(_args, [].slice.call(arguments));
            return _adder;
        };

        // 利用隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
        _adder.toString = function () {
            return _args.reduce(function (a, b) {
                return a + b;
            });
        }

        return _adder;
    }
    return adder.apply(null, [].slice.call(arguments));
}

// 输出结果，可自由组合的参数
console.log(add(1, 2, 3, 4, 5));  // 15
console.log(add(1, 2, 3, 4)(5));  // 15
console.log(add(1)(2)(3)(4)(5));  // 15


///

var currying = function(fn) {
    var args = [].slice.call(arguments, 1);

    return function() {
        // 主要还是收集所有需要的参数到一个数组中，便于统一计算
        var _args = args.concat([].slice.call(arguments));
        return fn.apply(null, _args);
    }
}

var sum = currying(function() {
    var args = [].slice.call(arguments);
    return args.reduce(function(a, b) {
        return a + b;
    })
}, 10)

console.log(sum(20, 10));  // 40
console.log(sum(10, 5));

/*

 (function() {
 console.log(arguments instanceof Array)
 })();

 结果：false
 arguments 并非数组

* */

//
//1》实现NumberStack的解答


function NumberStack(){
    this.stack=[];//存储栈
    this.maxStack=[];//辅助栈，从小到大的排序
}
NumberStack.prototype.push=function(num){
    if(Object.prototype.toString.call(num)!="object Number") return false;
    this.stack.push(num);
    if(!this.maxStack.length){
        this.maxStack.push(num);
    }else{
        let len=his.maxStack.length;
        for(let i=0;i<len;i++){
            if(num<this.maxStack[i]){
                this.maxStack.splice(i,0,num);//将num插入maxStack到合适的位置
                break;
            }
        }
    }
}
NumberStack.prototype.pop=function(){
    let num=this.stack.pop();
    this.maxStack.splice(this.maxStack.indexOf(num),1);//将num从maxStack中删除 
    return num;
}

NumberStack.prototype.max=function(n){
    if(n<1||n>this.maxStack.length) return false;
    return this.maxStack[this.maxStack.length-n];
}


















