import React from "react";

function TransactionItem({ transaction, onDeleteTransaction }) {
    let { date, description, category, amount } = transaction;

    // Function to handle deleting a transaction
    function handleTransactionDelete() {
        // Send a DELETE request to the server to delete the transaction
        fetch(`http://localhost:8000/transactions/${transaction.id}`, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(() => onDeleteTransaction(transaction));
    }

    return (
        <tbody>
            <tr>
                {/* Render the transaction details */}
                <td>{date}</td>
                <td>{description}</td>
                <td>{category}</td>
                <td>{amount}</td>

                {/* Render the button to delete the transaction */}
                <td>
                    <button style={{ color: "blue" }} onClick={handleTransactionDelete}>
                        DELETE
                    </button>
                </td>
            </tr>
        </tbody>
    )
}

export default TransactionItem;
