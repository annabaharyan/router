import React from "react";

export default function FormForAdd({ title, onChange, value }) {
  return (
    <div className="one-field-input">
      <label>{title}</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
}
