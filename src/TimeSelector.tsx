import React from "react";
import TextField from "@material-ui/core/TextField";

type Props = {
  time: string;
  onChange: (value: string) => void;
};

function TimeSelector(props: Props) {
  const { time, onChange } = props;
  return (
    <TextField
      id="time"
      label="Time (UTC)"
      type="time"
      defaultValue={time}
      onChange={e => onChange(e.target.value)}
      InputLabelProps={{
        shrink: true
      }}
    />
  );
}

export default TimeSelector;
