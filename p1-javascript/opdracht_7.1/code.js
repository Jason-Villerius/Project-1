budget = 50; 
product = 60;

if (product < budget ) {
  product = "U heeft genoeg geld!";
} else {
  product = "Helaas, te weinig geldt";
}

document.getElementById("demo").innerHTML = product;