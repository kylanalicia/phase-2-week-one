import React from "react";

//SearchTransaction component which receives two props: searchParam and onTransactionSearch
function SearchTransaction({ searchParam, onTransactionSearch }) {
  //Function to handle the search transaction event
  function handleTransactionSearch(e) {
    // Call the onTransactionSearch function, passing the updated value of the input field
    onTransactionSearch(e.target.value);
  }

  // Render the component UI
  return (
    <div className="ui large fluid icon input">
      {/* Render an input field */}
      <input
        type="text"
        name="searchParam"
        value={searchParam}
        placeholder="Search your recent transactions"
        onChange={handleTransactionSearch}
      />
      {/* Render a search icon */}
      <i className="circular search link icon"></i>
    </div>
  );
}

// Export the SearchTransaction component
export default SearchTransaction;

