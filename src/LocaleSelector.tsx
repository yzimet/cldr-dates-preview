import React from "react";
import TextField from "@material-ui/core/TextField";

import locales from "./utils/locales.json";

type Props = {
  locale: string;
  onChange: (value: string) => void;
};

function LocaleSelector(props: Props) {
  const { locale, onChange } = props;

  return (
    <TextField
      id="locale"
      select
      label="Locale"
      value={locale}
      onChange={e => onChange(e.target.value)}
      SelectProps={{
        native: true
      }}
    >
      {locales.map(locale => (
        <option key={locale} value={locale}>
          {locale}
        </option>
      ))}
    </TextField>
  );
}

export default LocaleSelector;
