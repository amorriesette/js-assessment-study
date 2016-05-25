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
    functionFunction();
    var answer = function(){
      var hiString = str + " ," + str + " ?";
      return hiString;
    }
    return answer;
  },

  makeClosures : function(arr, fn) {

  },

  partial : function(fn, str1, str2) {

  },

  useArguments : function() {

  },

  callIt : function(fn) {

  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
