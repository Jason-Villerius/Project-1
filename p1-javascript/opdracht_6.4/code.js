function calculate(...args) {
  let calculate = 0;
  for (let arg of args) calculate += arg;
  return calculate;
}

let x = calculate(1, 12);

document.getElementById("demo").innerHTML = x;
console.log(x)

function multiplyByFive(x, y = 7) {
   return x * y;
 }
 document.getElementById("test").innerHTML = multiplyByFive(5);
 console.log(multiplyByFive(5))

function calculateMinutes(x= 3600) {
  return x / 60;
}
document.getElementById("end").innerHTML = calculateMinutes();
console.log(calculateMinutes())