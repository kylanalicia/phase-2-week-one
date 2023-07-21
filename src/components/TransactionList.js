import React, { useEffect, useState } from "react";
// import TransactionItem from "./TransactionItem";

function TransactionList() {
    const [transactions,setTransactions] = useState([]);
    const [searchParam,setSearchParam] = useState("");

    useEffect(() => {
        fetch(` http://localhost:8000/transactions`)
        .then((response) => response.json())
        .then((transactions) => setTransactions(transactions));
    },[]);
}

function handleAddTransaction(newTransaction) {
    setTransactions([transactions,newTransaction]);
}

const TransactionList = transactions.filter((transaction) => {
    return transaction.description
    .toLowerCase()
    .includes(searchParam.toLowerCase());
});