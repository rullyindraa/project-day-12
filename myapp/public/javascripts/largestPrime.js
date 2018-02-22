function largestPrime() {
  var a = document.getElementById("a").value;
  var factor = 2;
    while (a != factor) {
      if (a % factor === 0) {
        a = a / factor; 
      } else {
        factor++;
      }
    }
    //return factor;
    document.getElementById("result").value="the answer is " + factor;
}

