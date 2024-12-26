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
            
        })
        // ensures the sequence is descending
        // sort method: used to sort the array and modifies the original array; takes a callback function according to which sorting is done
    }

    deleteTransaction(id){}

    updateBalance(){}
}

const budgetTracker = new BudgetTracker()