exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var listOfFiles = [];
    var dirs = [];

    function processDir(dir) {
      var i;
      var len;
      var file;
      var files = dir.files;

      dirs.push( dir.dir );

      for (i = 0, len = files.length; i < len; i++) {
        file = files[i];
        if (typeof file === 'string') {
          if (!dirName || dirs.indexOf(dirName) > -1) {
            listOfFiles.push(files[i]);
          }
        } else {
          processDir(files[i]);
        }
      }

      dirs.pop();
    }

    processDir(data);


    return listOfFiles;
  },

  permute: function(arr) {
    // http://stackoverflow.com/a/11509565/54468
    var temp = [];
    var answer = [];

    function logResult() {
      answer.push(
        // make a copy of temp using .slice()
        // so we can continue to work with temp
        temp.slice()
      );
    }

    function doIt() {
      var i;
      var len;
      var item;

      for (i = 0, len = arr.length; i < len; i++) {
        // remove the item at index i
        item = arr.splice(i, 1)[0];

        // add that item to the array we're building up
        temp.push(item);

        if (arr.length) {
          // if there's still anything left in the array,
          // recurse over what's left
          doIt();
        } else {
          // otherwise, log the result and move on
          logResult();
        }

        // restore the item we removed at index i
        // and remove it from our temp array
        arr.splice(i, 0, item);
        temp.pop();
      }

      return answer;
    }

    return doIt();
  },

  fibonacci: function(n) {
    function fib(n) {
      if (n <= 1)
         return n;
      return fib(n-1) + fib(n-2);
    }

    return fib(n);
  },

  validParentheses: function(n) {
    if(n<1){
      return [];
    }else if(n === 1){
      return ['()'];
    }else{
      var comboMap = {};
      var innerCombo = this.validParentheses(n-1);

      for(var i=0;i<innerCombo.length;i++){
        var curInnerCombo = innerCombo[i];

        comboMap['(' + curInnerCombo + ')'] = true;
        comboMap['()' + curInnerCombo] = true;
        comboMap[curInnerCombo + '()'] = true;
      }

      var comboList = [];
      for(var combo in comboMap){
        if(comboMap.hasOwnProperty(combo)){
          comboList.push(combo);
        }
      }

      return comboList;
    }
  }
};