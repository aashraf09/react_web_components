import React from "react";

const TextInput = () => {
  return (
    <>
      <div className="input-container">
        <label className="text-label" htmlFor="name">
          Name
        </label>
        <input type="text" name="name" className="text-input" />
      </div>
    </>
  );
};

export default TextInput;
