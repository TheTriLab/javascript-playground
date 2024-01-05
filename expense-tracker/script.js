
const form = document.getElementById('transaction-form')


const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'))
let transactionHistoryItems = localStorage.getItem('transactions') !== null ? localStorageTransactions : []


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
            amount: transactionAmount.trim()
        }

        transactionHistoryItems.push(newItem)
        updateLocalStorage()

        addTransactionDOM(newItem)

        // Reset inputs after item is added to the list
        e.target.reset()
    }
}

// Add transaction to DOM list
function addTransactionDOM(transaction) {
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
    const historySectionContent = document.getElementById('transaction-history')
    historySectionContent.appendChild(item)
}

// Update local storage
function updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactionHistoryItems))
}

form.addEventListener('submit', addTransaction)