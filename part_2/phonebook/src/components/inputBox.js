import React from "react";

function InputBox({ text, defaultVal, onChange }) {
  return (
    <div>
      {text}:
      <input value={defaultVal} onChange={onChange} />
    </div>
  );
}

export default InputBox;
