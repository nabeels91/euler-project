var num1 = 1;
var num2 = 2;

function fun(i) {
  var sum = sum;
  if (num2 < i || num1 < i) {
    sum = 0;
    for (num2 || num1; num2 < i && num1 < i; num1 || num2) {
      var counter = 1;
      console.log( num1);
      console.log( num2);
      if (num1 % 2 === 0) {
        sum += num1;
      }
      if (num2 % 2 === 0) {
        sum += num2;
      }
      num1 += num2;
      num2 += num1;
    }
    console.log('the sum of the even fib numbers below' + i + ' = ' + sum);
  }
}
fun(4000000);