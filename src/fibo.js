function fibo(){
  //var num = 40;
  var num = document.getElementById("num").value;
  var j = [];
  var x = [1,2];
  var even = [];
  for (var i = 1;i<num;i++){
    j.push(i);
  }
  i = 1;
  while (i<num){
    var k = j[i] + j[i-1];
    j[i + 1]  = k;
    if (k < num){
      x.push(k);
    }
    i++;
  }
  var total = 0;
  for (w in x){
    if (x[w] %2 === 0){
      even.push(x[w]);
    }
  }
  //console.log("the answer is " + even );
  document.getElementById("result").value="the answer is " + even;
}
//console.log(fibo());




