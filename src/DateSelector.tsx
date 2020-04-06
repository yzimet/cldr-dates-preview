import React from "react";
import TextField from "@material-ui/core/TextField";

type Props = {
  date: string;
  onChange: (value: string) => void;
};

function DateSelector(props: Props) {
  const { date, onChange } = props;
  return (
    <TextField
      id="date"
      label="Date"
      type="date"
      defaultValue={date}
      onChange={e => onChange(e.target.value)}
      InputLabelProps={{
        shrink: true
      }}
    />
  );
}

export default DateSelector;
