import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import { useFetch } from "react-hooks-async";

const BASE_URL: string = "/api/locales";
const DEFAULT_AVAILABLE_LOCALE: LocaleDetails = {
  locale: "en",
  name: "English"
};

interface LocaleDetails {
  locale: string;
  name: string;
}

interface LocalesResponse {
  metadata: {};
  availableLocales: LocaleDetails[];
}

type Props = {
  locale: string;
  onChange: (value: string) => void;
};

function LocaleSelector(props: Props) {
  const { locale, onChange } = props;
  const url: string = BASE_URL;
  const { pending, result } = useFetch<LocalesResponse>(url);

  let locales: LocaleDetails[] = [DEFAULT_AVAILABLE_LOCALE];
  let localeDetails: LocaleDetails = DEFAULT_AVAILABLE_LOCALE;
  if (result && !pending) {
    locales = result.availableLocales;
    localeDetails =
      result.availableLocales.find(
        availableLocale => availableLocale.locale === locale
      ) || DEFAULT_AVAILABLE_LOCALE;
  }

  return (
    <FormControl>
      <Autocomplete
        id="locale"
        disableClearable
        options={locales as LocaleDetails[]}
        getOptionLabel={(locale: LocaleDetails) => {
          let label: string = locale.locale;
          if (locale.name) {
            label += `: ${locale.name}`;
          }
          return label;
        }}
        onChange={(event: any, newValue: LocaleDetails | null) => {
          if (newValue) {
            onChange(newValue.locale);
          }
        }}
        style={{ width: 300 }}
        renderInput={(params: any) => (
          <TextField {...params} label="Locale" variant="outlined" />
        )}
        value={localeDetails}
      />
    </FormControl>
  );
}

export default LocaleSelector;
