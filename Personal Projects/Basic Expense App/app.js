const placeInput = document.getElementById("placeInput");
const costInput = document.getElementById('costInput');

const addBtn = document.getElementById('addBtn')

const expenseArray = []

const expenseListElement = document.getElementById('expenseList')

function addExpense() {
    const placeValue = placeInput.value;
    const costValue = parseFloat(costInput.value);

    const expense = { place: placeValue, cost: costValue.toFixed(2) };
    expenseArray.push(expense);
    console.log(expenseArray);

    // console.log(`Place: ${placeValue} | Cost: $${costValue.toFixed(2)}`)
    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>Place: ${placeValue}</span><span class="cost">Cost: ($${costValue.toFixed(2)})<span>`;
    listItem.classList.add('expense-item');

    expenseListElement.appendChild(listItem);

    addTotal();
    placeInput.value = '';
    costInput.value = '';
}

function addTotal() {
    const totalCost = expenseArray.reduce((sum, item) => sum + parseFloat(item.cost), 0);
    console.log(`Total Cost: $${totalCost.toFixed(2)}`);

    const totalCostElement = document.getElementById("totalCost");
    totalCostElement.textContent = `$${totalCost.toFixed(2)}`;
}

addBtn.addEventListener('click', addExpense);
