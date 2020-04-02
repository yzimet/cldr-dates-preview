import React from "react";

function TimeSelector({ time, onChange }) {
  return (
    <label>
      Time:{" "}
      <input
        type="time"
        value={time}
        onChange={e => onChange(e.target.value)}
      />
      (UTC)
    </label>
  );
}

export default TimeSelector;
