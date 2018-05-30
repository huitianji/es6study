//如何消除一个数组里面重复的元素
var arr = [1,2,2,2,24];
var newArr = [];
for (var i = 0; i<arr.length; i++) {
    if (newArr.indexOf(arr[i]) == -1 ) {
        newArr.push(arr[i]);
    }
}
//
new Set(...[arr]);
Array.from(new Set(...[arr]));

//统计字符串中字母个数或统计最多字母数
var str = "aaabbbbccdf";
var obj = {};

for (var i = 0; i<str.length; i++) {
    var v = str.charAt(i);
    if (obj[v] && obj[v].value == v ) {
        ++obj[v].count;
    }else{
        obj[v] = {};
        obj[v].count = 1;
        obj[v].value = v;
    }
}
var obj2 = [];
//for ( var key in obj ) {
//    console.log(obj[key].value,obj[key].count);
//    //obj2[obj[key].value] = obj[key].count
//    obj2.push(obj[key]);
//
//}

for ( key in obj ) {
    (function (key){
        obj2.push(obj[key])
    })(key)
}
//{
//    "a":{count:1}
//}
//多obj排序
var arr2 = [
     {
        value:"a",
         count:1
     },
    {
        value:"b",
        count:3
    },
    {
        value:"c",
        count:2
    }
];

arr2.sort(function (a,b){
    var oa = a.count;
    var ob = b.count;
    return ob - oa;
});
//
function ajax() {
    var num = 1;
    var time = null;

    time = setInterval(function(){
        if ( num >=5 ) {
            clearInterval(time);
        };
        console.log(num,"fff")
        num++;
    },1000)
}








