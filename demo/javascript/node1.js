//console.log(this == global );
(function(){
    var root=this,
        isBrowserSide=false;
    if(typeof window !=="undefined" && root===window){
        isBrowserSide=true;
    }
}).call(this);