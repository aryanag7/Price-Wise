import { useState } from "react";
import "./Search.css";
import CircularProgress from '@mui/material/CircularProgress';



function Search() {
  const [formData, setFormData] = useState({ Email: "", Url: "", Price: 0 });
  const [msg, setMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    // Handle special case for 'Price' to ensure it remains a number
    const updatedValue = name === "Price" ? parsePriceValue(value) : value;
    // console.log(updatedValue);

    setFormData({ ...formData, [name]: updatedValue });
  };


  const parsePriceValue = (value) => {
    const parsedValue = parseInt(value);

    // Check if parsedValue is NaN or less than 0 (invalid)
    if (isNaN(parsedValue) || parsedValue < 0) {
      return ""; // Set to an empty string or other default value
    }

    return parsedValue; // Return valid parsed value
  };

  const handleClick = async (evt) => {
    evt.preventDefault();
    const { Url, Price, Email } = formData;
    setIsLoading(true);
    const allInputValues = { url: Url, price: Price, email: Email };
    const response = await fetch(`http://localhost:8080/submit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(allInputValues),
    });
    
    
    const data = await response.json();
    console.log(data.message);
    setMsg(data.message);
    setIsLoading(false); 
  };
  

  return (
    <div className="SearchContainer">
      <h1>Price Wise</h1>
      <form className="SearchForm" onSubmit={handleClick}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          placeholder="Enter your email"
          name="Email"
          value={formData.Email}
          onChange={handleInputChange}
          id="email"
        />

        <label htmlFor="product">Product Name or ID:</label>
        <input
          type="text"
          placeholder="Enter product name or ID"
          name="Url"
          value={formData.Url}
          onChange={handleInputChange}
          id="product"
        />

        <label htmlFor="price">Track Price (Rs):</label>
        <input
          type="number"
          placeholder="Enter desired price"
          name="Price"
          value={formData.Price}
          onChange={handleInputChange}
          id="price"
        />

        <button type="submit">Track</button>
      </form>

      {isLoading && (
        <div className="LoadingMessage">
          <p>Tracking prices</p>
          <div className="Spinner">
          <CircularProgress  size="1.5rem"/>
          </div>
        </div>
      )}

      {msg && <p className="Message">{msg}</p>}
    </div>
  );
}

export default Search;