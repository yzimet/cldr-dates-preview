import React from "react";
import locales from "./utils/locales";

function LocaleSelector({ locale, onChange }) {
  return (
    <label>
      Locale:{" "}
      <select value={locale} onChange={e => onChange(e.target.value)}>
        {locales.map(locale => (
          <option key={locale} value={locale}>
            {locale}
          </option>
        ))}
      </select>
    </label>
  );
}

export default LocaleSelector;
