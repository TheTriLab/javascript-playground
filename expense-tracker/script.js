
const form = document.getElementById('transaction-form')
const historySectionContent = document.getElementById('transaction-history')
const totalIncomeEl = document.getElementById('total-income')
const totalExpenseEl = document.getElementById('total-expense')
const totalBalanceEl = document.getElementById('total-balance')

const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'))
const localStorageIncome = JSON.parse(localStorage.getItem('total-income'))
const localStorageExpense = JSON.parse(localStorage.getItem('total-expense'))


let transactionHistoryItems = localStorage.getItem('transactions') !== null ? localStorageTransactions : []
let totalIncome = !isNaN(localStorageIncome) ? +localStorageIncome : 0
let totalExpense = !isNaN(localStorageExpense) ? +localStorageExpense : 0


function addTransaction(e) {
    
    e.preventDefault()
    const transactionTitle = document.getElementById('transaction-title').value
    const transactionAmount = document.getElementById('transaction-amount').value

    if (!transactionTitle && !transactionAmount) {
        alert('Please add a text and amount')
    } else if (!transactionTitle) {
        alert('Please add a text');
    } else if (!transactionAmount) {
        alert('Please add a amount');
    } else {
        const newItem = {
            title: transactionTitle.trim(),
            amount: +transactionAmount.trim()
        }

        transactionHistoryItems.push(newItem)
        if (newItem.amount > 0) {
            totalIncome += newItem.amount
        }

        if (newItem.amount < 0) {
            totalExpense += newItem.amount
        }


        updateLocalStorage()
        addTransactionDOM(newItem)
        updateAmountDOM()

        // Reset inputs after item is added to the list
        e.target.reset()
    }
}

// Add transaction to DOM list
function addTransactionDOM(transaction) {
    // Delete no history message before adding the first item
    if (transactionHistoryItems.length === 0) {
        const noHistoryEl =  historySectionContent.getElementsByTagName('p')[0]
        noHistoryEl ? noHistoryEl.remove() : null
    }
    
    // Get sign
    const sign = transaction.amount < 0 ? '-' : '+'

    // Create history item
    const item = document.createElement('div')
    item.classList.add(
        'history-item',
        'card',
        'small-card',
        transaction.amount < 0 ? 'history-minus' : 'history-plus'
    )

    item.innerHTML = `
        <span class="close">x</span>
        <span>${transaction.title}</span>
        <span>${sign}${Math.abs(transaction.amount)}</span>
    `
    // Insert new transaction items to history UI
    historySectionContent.appendChild(item)
}

// Update amount UI
function updateAmountDOM() {
    renderIncome()
    renderExpense()
    renderBalance()
}

// Update local storage
function updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactionHistoryItems))
    localStorage.setItem('total-income', totalIncome)
    localStorage.setItem('total-expense', totalExpense)
}

// Render income
function renderIncome() {
    totalIncomeEl.innerText = `$${totalIncome}`
}

// Render expense
function renderExpense() {
    totalExpenseEl.innerText = `$${totalExpense}`
}

// Render balance
function renderBalance() {
    totalBalanceEl.innerText = `$${totalIncome + totalExpense}`
}

// Render and init expense tracker at the beginning
function initExpenseTracker() {

    // Render transaction history
    if (transactionHistoryItems.length > 0) {
        transactionHistoryItems.forEach((e) => {
            addTransactionDOM(e)
        })
    } else {
        const noHistory = document.createElement('p')
        noHistory.innerText = 'No transaction history'

        historySectionContent.append(noHistory)
    }
    
    // Render income, expense, balance
    updateAmountDOM()
}


initExpenseTracker()
form.addEventListener('submit', addTransaction)