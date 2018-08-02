let values = [3,4,2,12,145];


// PRE: an array in any order
// POST: an array in increasing order
function inOrder(vals){
  vals.sort(function(a,b){
     return a>b;
   });
}

function findMin(target){
  var answer = [];
  for(var i = values.length-1; i>=0; i--){
     while(target>=values[i]){
       target -= values[i];
       answer.push(values[i]);
     }
  }
  for(var p = 0;p<answer.length;p++){
    console.log(answer[p]);
  }
  return answer;
}

var ran = Math.floor(Math.random()*300);
console.log("target: " + ran)
inOrder(values);
console.log("values: " + values);
var sum = (findMin(ran).reduce(function(a,b){return a+b;}));
console.log("="+sum);
