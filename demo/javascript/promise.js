//https://www.cnblogs.com/whybxy/p/7645578.html

//1

var p = new Promise(function (resolve,reject){

    setTimeout(function(){
        console.log("执行完毕1");
        resolve("随便什么数据");
    },2000);

});
//2

function runAsync(){
    var p = new Promise(function (resolve,reject){
        setTimeout(function(){
            console.log("执行完毕1");
            resolve("随便什么数据");
        },2000);
    });
    return p;
}
function runAsync1(){
    var p = new Promise(function (resolve,reject){
        setTimeout(function(){
            console.log("执行完毕1");
            resolve("随便什么数据");
        },2000);
    });
    return p;
}
runAsync().then(function(data){
    console.log(data);
});

//3


function getNumber(){
    var p = new Promise(function (resolve,reject){
        setTimeout(function(){
            var num = Math.ceil(Math.random()*10);
            if ( num<=5  ) {
                console.log("执行完毕1");
                resolve("随便什么数据");
            }else{
                reject("数字太大了");
            }

        },1000);
    });
    return p;
};
getNumber().then(
    function (data){
        console.log(data);
        //console.log(ce);
    }
).catch(function (error){
    console.log(error);
});

/*
 all的用法

 Promise的all方法提供了并行执行异步操作的能力，并且在所有异步操作执行完后才执行回调。

 用Promise.all来执行，all接收一个数组参数，里面的值最终都算返回Promise对象。
 这样，三个异步操作的并行执行的，等到它们都执行完后才会进到then里面。那么，
 三个异步操作返回的数据哪里去了呢？都在then里面呢，all会把所有异步操作的结果放进一个数组中传给then，就是上面的results。


 有了all，你就可以并行执行多个异步操作，并且在一个回调中处理所有的返回数据，是不是很酷？有一个场景是很适合用这个的，
 一些游戏类的素材比较多的应用，打开网页时，预先加载需要用到的各种资源如图片、flash以及各种静态文件。
 所有的都加载完后，我们再进行页面的初始化。


 race的用法

 all方法的效果实际上是「谁跑的慢，以谁为准执行回调」，那么相对的就有另一个方法「谁跑的快，以谁为准执行回调」，
 这就是race方法，这个词本来就是赛跑的意思。

 这个race有什么用呢？使用场景还是很多的，比如我们可以用race给某个异步请求设置超时时间，
* */


Promise.all([runAsync(),runAsync1()]).then(function(results){
    console.log(results);
});



///-race

//请求某个图片资源
function requestImg(){
    var p = new Promise(function(resolve, reject){
        var img = new Image();
        img.onload = function(){
            resolve(img);
        }
        img.src = 'xxxxxx';
    });
    return p;
}

//延时函数，用于给请求计时
function timeout(){
    var p = new Promise(function(resolve, reject){
        setTimeout(function(){
            reject('图片请求超时');
        }, 5000);
    });
    return p;
}

Promise
    .race([requestImg(), timeout()])
    .then(function(results){
        console.log(results);
    })
    .catch(function(reason){
        console.log(reason);
    });


/*
 requestImg函数会异步请求一张图片，我把地址写为"xxxxxx"，所以肯定是无法成功请求到的。timeout函数是一个延时5秒的异步操作。
 我们把这两个返回Promise对象的函数放进race，于是他俩就会赛跑，如果5秒之内图片请求成功了，那么遍进入then方法，执行正常的流程。
 如果5秒钟图片还未成功返回，那么timeout就跑赢了，则进入catch，报出“图片请求超时”的信息。运行结果如下
* */


















