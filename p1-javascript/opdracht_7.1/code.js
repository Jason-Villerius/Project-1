let product = 100;
//let budget = 10;
let budget = prompt("Hoeveel geld heb je?", 0)

let ResultP = document.getElementById("demo");

if (product >= budget) {
  ResultP.innerHTML = "Helaas, te weinig geldt";
  ResultP.style.color = "red";
} 
else {
  ResultP.innerHTML = "U heeft genoeg geld!";
  ResultP.style.color = "green";
}
