/*
 原生js的能力（有些稍微细的知识）
 string数组去重（时间复杂度&空间复杂度？）
 如何用原生js实现jquery中的addclass方法（包括去重）
 http协议的一些知识，包括浏览器的一些问题（数据存储啊啥啥啥的）
 二维码扫描登录的实现，包括业务以及技术实现


 用js闭包和继承来介绍自己
 页面高度为800px,用户浏览器为900px，怎么让浏览器背景也变成页面的颜色（这个我根本猜不到要靠什么，一脸懵逼）
 用最少的字节搞定一个样式，就是字体啊，加粗呀，等
 浏览器的跨域请求
 String的金额的转换，转成每3个一个逗号的那个
 一些基本常量的结果，什么typeof，是否==等等


 正常解决问题的方式，百度，谷歌，ask等
 是否关注前沿技术，怎么学习。可惜我关注了世界顶级的一些社区，可是都很少去看，哎
 是否学习过一些出名的js框架，我就没事看了一点underscore的源码，当时吹牛逼说看过了，然后大神问了很多，一个没答上来，尴尬！！
 对最新的前沿的技术的了解，什么amd等等的，本人听说过，却没有真正研究过，所以也吹了
 怎样更改一个插件，比如升级。如何正确升级和协助
 如何参与团队项目的协助和开发
* */

// 时间复杂度O（n^2）
function fn(arr) {
    return arr.filter((item, index, arr) => arr.indexOf(item) === index);
}
// 时间复杂度o（n）
function fn(arr) {
    let obj = {};
    arr.forEach((item) => {
        obj[item] = '';
    })

    return Object.keys(obj)
}

//addclass

function hasClass(obj,cls){
    return obj.className.match(new RegExp('(\\s|^)' + cls + "(\\s|$)"));
}

function addClass(obj,cls) {
    if (!hasClass(obj,cls)) {
        obj.className = " " + cls;
    }
};

function removeClass(obj,cls){
    if (hasClass(obj,cls)) {

        var reg = new RegExp("(\\s|^)"+ cls +"(\\s|$)");

        obj.className = obj.className.replace(reg,"");

    }
};

function toggleClass(obj,cls){
    if (hasClass(obj,cls)) {
        removeClass(obj,cls);

    }
    else{
        addClass(obj,cls);
    }
}
//
var reg = /\d(?=(?:\d{3})+\b)/g;

"12345".replace(reg,"$&,");
