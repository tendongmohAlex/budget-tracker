let expenses = [];
let totalAmount = 0;
let categorySelect = document.getElementById('category_select');
let amountInput = document.getElementById('amount_input');
let dateIput = document.getElementById('date_input');
let addBtn = document.getElementById('add_btn');
let expensesTable_boby = document.getElementById('expensestable_body');
let totalAmountCell = document.getElementById('total_amount');


addBtn.addEventListener('click', function(e){
    e.preventDefault();
    
    let category = categorySelect.value;
    let amount = Number(amountInput.value); 
    let date = dateIput.value;

    console.log(e);

    if(category ===''){
        alert ('please select a category');
        return;
    }
    if(isNaN(amount) || amount <= 0){
        alert('please enter the valid amount');
        return;
    }
    if(date ===''){
        alert('please select a date')
        return;
    }
    
    expenses.push({category,amount,date})
    totalAmount += amount;
    totalAmountCell.textContent=totalAmount;

    const newRow = expensesTable_body.insertRow();

    const categoryCell =newRow.insertCell();
    const Amountcell =newRow.insertCell();
    const dateCell =newRow.insertCell();
    const deleteCell =newRow.insertCell();

    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete';

    deleteBtn.classList.add('delete_btn');
    deleteBtn.addEventListener('click',function(){
        expenses.splioce(expenses.indexOf(expenses),1);

        totalAmount -=expenses.amount;
        totalAmountCell.textContent = totalAmount;

        expensesTable_Body.removeChild(newRow);
    })
    const expenses =expenses[expenses.length - 1];
    categoryCell.textContent=expenses.category;
    Amountcell.textContent=expenses.amount;
    dateCell.textContent=expenses.date;
    deleteCell.appendChild(deleteBtn)

})
for(const amount of expenses){
    totalAmount += amount;
    totalAmountCell.textContent=totalAmount;

    const newRow = expensesTable_Body.insertRow();

    const categoryCell =newRow.insertCell();
    const Amountcell =newRow.insertCell();
    const dateCell =newRow.insertCell();
    const deleteCell =newRow.insertCell();

    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete';

    deleteBtn.classList.add('delete_btn');
    deleteBtn.addEventListener('click',function(){
        expenses.splioce(expenses.indexOf(expenses),1);

        totalAmount -=expenses.amount;
        totalAmountCell.textContent = totalAmount;

        expensesTable_Body.removechild(newRow);
    })
    const expenses =expenses[expenses.length - 1];
    categoryCell.textContent=expenses.category;
    Amountcell.textContent=expenses.amount;
    dateCell.textContent=expenses.date;
    deleteCell.appendchild(deleteBtn);

}