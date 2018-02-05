console.log('====module pattern====');

var APP = (function (){

    console.log('start...');
    var box = {};

    box.count = 0;
    box.addCount = function(){
       return box.count += 1;
    }
    box.resertCount = function(){
        
        return box.count = 0;
    }

    return {add:box.addCount};
})();