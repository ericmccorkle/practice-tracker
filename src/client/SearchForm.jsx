import React, { useState } from "react";

const GUITARS = ["Taylor Acoustic 115c", "1972 Stratocaster"];

const SearchForm = () => {
  const [guitar, setGuitar] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h1>Practice Session</h1>
      <div>Log New Practice Session</div>
      <label>
        Instrument Used
        <select
          value={guitar}
          onChange={(e) => {
            setGuitar(e.target.value);
          }}
          onBlur={(e) => {
            setGuitar(e.target.value);
          }}
        >
          <option />
          {GUITARS.map((guitar) => (
            <option key={guitar} value={guitar}>
              {guitar}
            </option>
          ))}
        </select>
      </label>
      <button>Submit</button>
    </form>
  );
};

export default SearchForm;
