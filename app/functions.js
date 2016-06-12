dexports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    var name = fn.apply(null,arr);
    return name;
  },

  speak : function(fn, obj) {
    var sayHello = fn.call(obj);
    return sayHello;
  },

  functionFunction : function(str) {
    return function(arg){
      return str + ', ' + arg;
    };
  },

  makeClosures : function(arr, fn) {
    var newArray = [];
    var newFn = function(val){
      return function(){
        return fn(val);
      };
    };
    for(var i=0; i<arr.length; i++){
      newArray.push(newFn(arr[i]));
    }

    return newArray;
  },

  partial : function(fn, str1, str2) {
    return function(str3){
      return fn(str1, str2, str3);
    };
  },

  useArguments : function() {
    var total=0;
    if(arguments.length > 1){
      for(var i=0; i<arguments.length; i++){
        total += arguments[i];
      }
      return total;
    }
    return arguments[0];
  },

  callIt : function(fn) {
    var arr = [];
    var number = arguments[0].length;
    for(var i=1; i<=number; i++){
      arr.push(arguments[i]);
    }
    return fn(arr);
  },

  partialUsingArguments : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    return function() {
      var moreArgs = args.concat(Array.prototype.slice.call(arguments));
      return fn.apply(null, moreArgs);
    };
  },

  curryIt : function(fn) {

  }
};
