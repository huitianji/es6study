/**
 在工作过程中，经常会遇到按需加载的需求，即在脚本加载完成后，
 返回一个回调函数，在回调函数中进行相关操作，那如何去判断脚本是否加载完成了呢？

 可以对加载的js对象使用onload来判断，jsDom.onload

 //  ie6、7不支持js.onload方法，使用js.onreadystatechange来解决
 js.onreadystatechange来跟踪每个状态的变化（loading、loaded、interactive、complete），
 当返回状态为loaded或者complete时，表示加载完成，返回回调函数.

 */
function loadJsAsync(url){
    var body = document.getElementsByTagName('body')[0];
    var jsNode = document.createElement('script');

    jsNode.setAttribute('type', 'text/javascript');
    jsNode.setAttribute('src', url);
    body.appendChild(jsNode);

    if (jsNode.onload) {
        jsNode.onload = function() {
            // do something
        }
    } else {
        // ie6, ie7不支持onload的情况
        jsNode.onreadystatechange = function() {
            if(jsNode.readyState == 'loaded' || jsNode.readyState == 'complete') {
                // 异步js加载完毕
                // do something执行操作
            }
        }
    }
}

//

function loadScript(url,callback){
    var script=document.createElement('script');
    script.type='text/javascript';
    script.async='async';
    script.src=url;
    document.body.appendChild(script);
    if(script.readyState){   //IE
        script.onreadystatechange=function(){
            if(script.readyState=='complete'||script.readyState=='loaded'){
                script.onreadystatechange=null;
                callback();
            }
        }
    }else{    //非IE
        script.onload=function(){callback();}
    }
}

///

$.holdReady(true);    //hold住，等待a.js加载，后续代码不能执行
$.getScript('http://www.90758.com/js/m_public_53k.js',function(){
    console.log(111);
    $.holdReady(false);     //释放，a.js加载完成，继续执行后续代码
});