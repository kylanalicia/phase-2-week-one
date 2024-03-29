# phase-2-week-one
# Bank of Flatiron
Welcome to the Bank of Flatiron, where you can trust us with all your financial data! Use the below gif as an example of how the app should function.


# Instructions
For this project, you’ll be building out a React application that displays a list of your recent bank transactions, among other features.

Part of what this code challenge is testing is your ability to follow given instructions. While you will definitely have a significant amount of freedom in how you implement the features, be sure to carefully read the directions for setting up the application.

# Setup
After unbundling the project:

Run npm install in your terminal.
Run npm run server. This will run your backend on port 8001.
In a new terminal, run npm start. This will run your React app on port 8000.
Make sure to open http://localhost:8001/transactions in the browser to verify that your backend is working before you proceed!

The app uses Semantic UI for styling. If you see any unfamiliar classNames on some components, don't sweat! That's coming from Semantic UI and you shouldn't need to touch it.

If you are unfamiliar with HTML tables, take a look at the docs with an example here

# Endpoints
The base URL for your backend is: http://localhost:8001

# Core Deliverables
As a user, I should be able to:

# See a table of the transactions.
Fill out and submit the form to add a new transaction. This should add the new transaction to the table as well as post the new transaction to the backend API for persistence.
Filter transactions by typing into the search bar. Only transactions with a description matching the search term should be shown in the transactions table.
Endpoints for Core Deliverables
GET /transactions
Example Response:

[
  {
    "id": 1,
    "date": "2019-12-01",
    "description": "Paycheck from Bob's Burgers",
    "category": "Income",
    "amount": 1000
  },
  {
    "id": 2,
    "date": "2019-12-01",
    "description": "South by Southwest Quinoa Bowl at Fresh & Co",
    "category": "Food",
    "amount": -10.55
  }
]
POST /transactions
Required Headers:

{
  "Content-Type": "application/json"
}
Request Object:

{
  "date": "string",
  "description": "string",
  "category": "string",
  "amount": number
}
Example Response:

{
  "id": 1,
  "date": "2019-12-01",
  "description": "Paycheck from Bob's Burgers",
  "category": "Income",
  "amount": 1000
}
# Advanced Deliverables
These deliverables are not required to pass the code challenge, but if you have the extra time, or even after the code challenge, they are a great way to stretch your skills.

Note: If you are going to attempt these advanced deliverables, please be sure to have a working commit with all the Core Deliverables first!

As a user, I should be able to:

Sort transactions alphabetically by category or description.
Delete a transaction which will remove it from the table and delete it from the backend.
Endpoints for Advanced Deliverables
DELETE /transactions/:id
Example Response:

{}