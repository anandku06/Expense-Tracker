const transactions = [
    {
        id : Date.now(),
        description : "Monthly Salary",
        amount : 1500,
        type : 'income'
    },
    {
        id : Date.now(),
        description : "Freelance Writing",
        amount : -500,
        type : 'expense'
    }
]


class BudgetTracker{
    constructor(){
        this.transactions = this.loadTransactions()
        this.form = document.getElementById('transactionForm')
        this.transactionList = document.getElementById('transactionList')
        this.balanceElement = document.getElementById('balance')

        this.initEventListeners()
        this.renderTransactions()
        this.updateBalance()
    }

    loadTransactions(){
        return transactions
    }

    initEventListeners(){}

    renderTransactions(){
        this.transactionList.innerHTML = ''
        this.transactions.slice().sort((a, b) => b.id - a.id).forEach((transactions) => {
            const transactionDiv = document.createElement('div')
            transactionDiv.classList.add("transaction", transactions.type)
            transactionDiv.innerHTML = `
            <span>${transactions.description}</span>
                <span class="amount-container"> ₹ ${Math.abs(transactions.amount).toFixed(2)} <button class="delete-btn" data-id="${transactions.id}">Delete</button></span>
            `
            this.transactionList.appendChild(transactionDiv)
        })
        // here data-id is used as a custom class for specificity of delete btn
        // sort method: used to sort the array and modifies the original array; takes a callback function according to which sorting is done ; ensures the sequence is descending
    }

    deleteTransaction(id){}

    updateBalance(){}
}

const budgetTracker = new BudgetTracker()