const ele = document.querySelectorAll('.price');
let total = 0;

for (let i = 0; i < ele.length; i++) {
  total += parseFloat(ele[i].textContent);
}

const totalRow = document.createElement("tr");
const totalCol1 = document.createElement("td");
totalCol1.textContent = "Total"; 

const totalCol2 = document.createElement("td");
totalCol2.textContent = total;
totalRow.appendChild(totalCol1);
totalRow.appendChild(totalCol2);
document.querySelector("table").appendChild(totalRow);
