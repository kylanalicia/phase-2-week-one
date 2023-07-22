import React, {useState} from "react";

function AddTransactionForm({ onAddTransaction }) {
    const [formData, setFormData] = useState({
        data:"",
        description:"",
        category:"",
        amount:0.0,
    });

    function handleChange(e) {
        const name=e.target.name;
        const value= e.target.value;
        setFormData({...FormData, [name]: value })
}

function handleFormSubmit(e) {
    e.preventDefault(); 
    const transactionData = {
        data:formData.date,
        description: formData.description,
        category: formData.category,
        amount: formData.amount,
    };

    const fetchPOSTOptions = {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
    },
    body: JSON.stringify(transactionData),
};
fetch(' http://localhost:8000/transactions', fetchPOSTOptions)
.then((response)=> response.json())
.then((newTransaction) => onAddTransaction(newTransaction));

setFormData({
    date:'',
    description:'',
    category:'',
    amount: 0,
});
}

return (
    <div className="ui segment">
        <form className="ui form" onSubmit={handleFormSubmit}>
            <div className="inline fields">
                <label id="date">
                    Date:
                    <input type="date" 
                    name="date" 
                    aria-labelledby="date" 
                    value={formData.date} 
                    onChange={handleChange} 
                    />
                </label>
                <input type="text"
                name="description"
                value={formData.description}
                placeholder="Description..."
                onChange={handleChange}
                />
                <input 
                type="text"
                name="category"
                value={formData.category}
                placeholder="Category..."
                onChange={handleChange}
                />
                <input
                 type="number"
                 name="amount"
                 value={formData.amount}
                 placeholder="Amount"
                 onChange={handleChange}
                 />
            </div>
            <button className="ui button" type="submit" style={{ color:"green"}}>AddTransaction</button>
        </form>
    </div>
);
}

export default AddTransactionForm;