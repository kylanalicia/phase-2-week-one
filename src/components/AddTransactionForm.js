import React, { useState } from "react";

//AddTransactionForm component which receives a prop onAddTransaction
function AddTransactionForm({ onAddTransaction }) {

    // Define state using the useState hook to manage the form data
    const [formData, setFormData] = useState({
        date: "",
        description: "",
        category: "",
        amount: 0.0,
    });

    // Define a function to handle input changes and update the form data
    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value });
    }

    // Define a function to handle form submission
    function handleFormSubmit(e) {
        e.preventDefault();

        // Create an object containing the transaction data from the form
        const transactionData = {
            date: formData.date,
            description: formData.description,
            category: formData.category,
            amount: formData.amount,
        };

        // Configure options for the POST request
        const fetchPOSTOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(transactionData),
        };

        // Send a POST request to the server with the transaction data
        fetch('http://localhost:8000/transactions', fetchPOSTOptions)
            .then((response) => response.json())
            .then((newTransaction) => onAddTransaction(newTransaction));

        // Reset the form data
        setFormData({
            date: '',
            description: '',
            category: '',
            amount: 0,
        });
    }

    // Render the component UI
    return (
        <div className="ui segment">
            <form className="ui form" onSubmit={handleFormSubmit}>
                <div className="inline fields">
                    {/* Render a date input field */}
                    <label id="date">
                        Date:
                        <input
                            type="date"
                            name="date"
                            aria-labelledby="date"
                            value={formData.date}
                            onChange={handleChange}
                        />
                    </label>
                    {/* Render a text input field for description */}
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        placeholder="Description..."
                        onChange={handleChange}
                    />
                    {/* Render a text input field for category */}
                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        placeholder="Category..."
                        onChange={handleChange}
                    />
                    {/* Render a numeric input field for amount */}
                    <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        placeholder="Amount"
                        onChange={handleChange}
                    />
                </div>
                {/* Render a button to submit the form */}
                <button className="ui button" type="submit" style={{ color: "green" }}>AddTransaction</button>
            </form>
        </div>
    );
}

// Export the AddTransactionForm component
export default AddTransactionForm;
