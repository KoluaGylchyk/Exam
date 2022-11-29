import React, { useState } from "react";
import "./Home.css/";

const Home = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handOnChange = (e) => {
    setInputValue(e.target.value);
    if (error.length > 0) {
      setError("");
    }
  };

  const handOnClick = () => {
    if (inputValue.length >= 0) {
      if (inputValue.length >= 3) {
        props.message2(inputValue);
        setInputValue("");
        setError("");
      } else {
        setError("- Message min length 3 chars");
      }
    }
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className="home__message">
          <h3>
            <span className="home__span">message:</span>
            {props.message}
          </h3>
        </div>
        <div className="home__content">
          <h3>Type new MESSAGE:</h3>
          <input
            type="text"
            className="home__input__one"
            value={inputValue}
            onChange={handOnChange}
          />
          <div className="home__input__error">{error.length > 0 ? error : ""}</div>
          
          <button className="home__button__one" onClick={handOnClick}>
            Set new message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
