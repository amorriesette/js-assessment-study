exports = (typeof window === 'undefined') ? global : window;

 exports.arraysAnswers = {

   indexOf : function(arr, item) {
     //'you should be able to determine the location of an item in an array'
     return arr.indexOf(item);

   },

   sum : function(arr) {
     //'you should be able to add the values of an array'
     var total=0;
     for(var i=0; i<arr.length; i++){
       total += arr[i];
     }
     return total;
   },

   remove : function(arr, item) {
     for(var i=0;i<arr.length;i++){
       if(item == arr[i]){
         arr.splice(i,1);
       }
     }
     return arr;
   },

   removeWithoutCopy : function(arr, item) {
     //you should be able to remove all instances of a value from an array, returning the original array'
     for(var i=0;i<arr.length;i++){
       if(item == arr[i]){
         arr.splice(i,1);
         i--;
       }
     }
     return arr;
   },

   append : function(arr, item) {
     arr.push(item);
     return arr;
   },

   truncate : function(arr) {
     arr.pop();
     return arr;
   },

   prepend : function(arr, item) {
     arr.unshift(item);
     return arr;
   },

   curtail : function(arr) {
     arr.splice(0,1);
     return arr;
   },

   concat : function(arr1, arr2) {
     var newArray = arr1.concat(arr2);
     return newArray;
   },

   insert : function(arr, item, index) {
     arr.splice(index,0,item);
     return arr;
   },

   count : function(arr, item) {
     var count = 0;
     for(var i=0; i< arr.length;i++){
       if(arr[i] == item){
         count++;
       }
     }
     return count;
   },

   duplicates : function(arr) {
     var dupArray = [];
     arr = arr.sort();
     for(var i=0;i<arr.length; i++){
       if((arr[i] == arr[i+1]) && (arr[i] != arr[i-1])){
         dupArray.push(arr[i]);
       }
     }
     return dupArray;
   },

   square : function(arr) {
     for(var i=0; i<arr.length;i++){
       arr[i] = arr[i] * arr[i];
     }

     return(arr);
   },

   findAllOccurrences : function(arr, target) {
     //you should be able to find all occurrences of an item in an array
     var i = 0, total = 0, here=[];
     while(i != arr.length){
       if(arr[i] == target){
         here.push(i);
       }
       i++;
     }

     return here;
   }
 };
