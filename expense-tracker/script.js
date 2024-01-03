
const form = document.getElementById('transaction-form')
let transactionHistoryItems = []


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
        transactionHistoryItems.push(
            {
                title: transactionTitle,
                amount: transactionAmount
            }
        )
    }
}

form.addEventListener('submit', addTransaction)