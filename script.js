const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	 const prices = document.querySelectorAll(".price");

    let total = 0;
    prices.forEach(cell => {
      total += parseFloat(cell.textContent);
    });
	
const table = document.querySelector("table");
const newRow = document.createElement("tr");
const labelCell = document.createElement("td");
labelCell.textContent = "Total";
labelCell.style.fontWeight = "bold";
const totalCell = document.createElement("td");
totalCell.textContent = total;
totalCell.style.fontWeight = "bold";
newRow.appendChild(labelCell);
newRow.appendChild(totalCell);
table.appendChild(newRow);
  
};

getSumBtn.addEventListener("click", getSum);

