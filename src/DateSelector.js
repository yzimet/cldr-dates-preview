import React from "react";

function DateSelector({ date, onChange }) {
  return (
    <label>
      Date:{" "}
      <input
        type="date"
        value={date}
        onChange={e => onChange(e.target.value)}
      />
    </label>
  );
}

export default DateSelector;
