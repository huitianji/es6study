var _listener = {};
var addEvent = function(type,fn){
//add
}
var fireEvent = function (type) {
    //触发
}

addEvent("alert",function () {
    alert("chufea");
});
fireEvent("alert");
//


///

var Event = {
    _listeners: {},
    // 添加
    addEvent: function(type, fn) {
        if (typeof this._listeners[type] === "undefined") {
            this._listeners[type] = [];
        }
        if (typeof fn === "function") {
            this._listeners[type].push(fn);
        }
        return this;
    },
    // 触发
    fireEvent: function(type) {
        var arrayEvent = this._listeners[type];
        if (arrayEvent instanceof Array) {
            for (var i=0, length=arrayEvent.length; i<length; i+=1) {
                if (typeof arrayEvent[i] === "function") {
                    arrayEvent[i]({ type: type });
                }
            }
        }
        return this;
    },
    // 删除
    removeEvent: function(type, fn) {
        var arrayEvent = this._listeners[type];
        if (typeof type === "string" && arrayEvent instanceof Array) {
            if (typeof fn === "function") {
                // 清除当前type类型事件下对应fn方法
                for (var i=0, length=arrayEvent.length; i<length; i+=1){
                    if (arrayEvent[i] === fn){
                        this._listeners[type].splice(i, 1);
                        break;
                    }
                }
            } else {
                // 如果仅仅参数type, 或参数fn邪魔外道，则所有type类型事件清除
                delete this._listeners[type];
            }
        }
        return this;
    }
};
Event.addEvent("alert", function() {
    alert("弹出！");
});

// 触发自定义alert事件
Event.fireEvent("alert");
///

var Event = {
    _listeners:{},
    addEvent:function (type,fn){
        if (this._listeners[type] === "undefined") {
            this._listeners[type] = [];
        };
        if (typeof  fn === "function") {
            this._listeners[type].push(fn);
        };
        return this;
    },
    fireEvent:function (type) {
        var arrayEvent = this._listeners[type];
        if (arrayEvent instanceof  Array) {
            for (var i = 0,len = arrayEvent.length;i<len; i++) {
                if (typeof arrayEvent[i] === "function") {
                    arrayEvent[i]({type:type});
                }
            }
        }
        return this;
    },
    removeEvent:function (type,fn){
        var arrayEvent = this._listeners[type];
        if (typeof type === "string" && arrayEvent instanceof Array) {
            if (typeof  fn === "function") {

                for (var i = 0,len = arrayEvent.length;i<len;i++) {
                    if ( arrayEvent[i] === fn ) {
                       this._listeners[type].splice(i,1);
                        break;
                    }
                }

            }else {
                delete this._listeners[type];
            }
        }
        return this;
    }
}


//


setTimeout(function(){
    alert(1);
    i();
},0)
function i(){
    alert(2)// 你要执行的代码。
}

///


var arr = [];
var obj = {};
for (var i=0;i<3;i++){
    arr.push({name:i})
}



























