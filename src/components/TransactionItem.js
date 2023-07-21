import React from "react";

function TransactionItem({ transaction,onDeleteTransaction }) {
    let { date,desription,category,amount } = transaction;

    function handleTransactionDelete() {
        fetch(` http://localhost:8000/transactions/${transaction.id}`,{
            method:"DELETE"
        })
        .then(response => response.json())
        .then(() => onDeleteTransaction(transaction));
    }
    return (
        <tbody>
            <tr>
                <td>{date}</td>
                <td>{desription}</td>
                <td>{category}</td>
                <td>{amount}</td>
                <td>
                    <button style={{color: "blue" }} onClick={handleTransactionDelete}>DELETE</button>
                </td>
            </tr>
        </tbody>
    )
}