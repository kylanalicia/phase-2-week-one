import React, { useEffect, useState } from "react";
import TransactionItem from "./TransactionItem";
import SearchTransaction from "./SearchTransaction";
import AddTransactionForm from "./AddTransactionForm";

function TransactionList() {
  const [transactions, setTransactions] = useState([]);
  const [searchParam, setSearchParam] = useState("");

  // Fetch the transactions from the server 
  useEffect(() => {
    fetch(`http://localhost:8000/transactions`)
      .then((response) => response.json())
      .then((transactions) => setTransactions(transactions));
  }, []);

  // Function to handle adding a new transaction
  function handleAddTransaction(newTransaction) {
    setTransactions([...transactions, newTransaction]);
  }

  // Function to handle deleting a transaction
  function handleTransactionDelete(deletedTransaction) {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== deletedTransaction.id
    );
    setTransactions(updatedTransactions);
  }

  // Filter the transactions based on the search parameter
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description?.toLowerCase().includes(searchParam.toLowerCase())
  );

  return (
    <div>
      {/* Render the search transaction component */}
      <SearchTransaction
        searchParam={searchParam}
        onTransactionSearch={setSearchParam}
      />

      {/* Render the add transaction form */}
      <AddTransactionForm onAddTransaction={handleAddTransaction} />

      {/* Render the table with transaction items */}
      <table className="ui celled striped padded table">
        <thead className="ui center aligned header">
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>DELETE?</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              onDeleteTransaction={() => handleTransactionDelete(transaction)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;
