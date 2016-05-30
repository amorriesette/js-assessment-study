exports = (typeof window === 'undefined') ? global : window;

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
    var sec = functionFunction();
  },

  makeClosures : function(arr, fn) {

  },

  partial : function(fn, str1, str2) {

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
    console.log(fn);
  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
