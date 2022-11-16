import React, { useState } from "react";
import { FcSearch } from "react-icons/fc";

const Form = ({ newLocation }) => {
  const [city, setCity] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ city });
    if (city === "" || !city) return;

    newLocation(city);
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="input-group mb-3 mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Enter City"
            onChange={(e) => setCity(e.target.value)}
          />
          <button className="btn btn-dark input-group-text" type="submit">
            <FcSearch />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
