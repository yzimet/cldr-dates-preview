import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import { useFetch } from "react-hooks-async";

import DateFormatGroup from "./DateFormatGroup";
import DateSelector from "./DateSelector";
import LocaleSelector from "./LocaleSelector";
import TimeSelector from "./TimeSelector";
// import useFetch from "./utils/useFetch";

const BASE_URL: string = "/api/locales";
const DEFAULT_LOCALE: string = "en";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

interface LocalesResponse {
  metadata: {
    locale: string;
  };
  dateFormats: {
    name: string;
    path: string;
    skeleton: string;
    value: string;
  }[];
  timeFormats: {
    name: string;
    path: string;
    skeleton: string;
    value: string;
  }[];
  dateTimeFormats: {
    name: string;
    path: string;
    skeleton: string;
    value: string;
  }[];
  availableFormats: {
    name: string;
    path: string;
    skeleton: string;
    value: string;
    errorMessage?: string;
  }[];
}

function Dates() {
  const classes = useStyles();

  const today_iso = new Date().toISOString(); // 2020-03-25T20:17:43.701Z
  const today_iso_date = today_iso.substring(0, 10); // 2020-03-25
  const today_iso_time = today_iso.substring(11, 19); // 20:17:43
  const [locale, setLocale] = useState(DEFAULT_LOCALE);
  const [date, setDate] = useState(today_iso_date);
  const [time, setTime] = useState(today_iso_time);
  const url = `${BASE_URL}/${locale}?datetime=${date}T${time}Z`;
  const { pending, result } = useFetch<LocalesResponse>(url);

  if (pending || !result) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <div>
        <LocaleSelector locale={locale} onChange={setLocale} />
      </div>
      <div>
        <DateSelector date={date} onChange={setDate} />
      </div>
      <div>
        <TimeSelector time={time} onChange={setTime} />
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="Date formats">
          <DateFormatGroup results={result.dateFormats} title="dateFormats" />
          <DateFormatGroup results={result.timeFormats} title="timeFormats" />
          <DateFormatGroup
            results={result.dateTimeFormats}
            title="dateTimeFormats"
          />
          <DateFormatGroup
            results={result.availableFormats}
            title="availableFormats"
          />
        </Table>
      </TableContainer>
    </div>
  );
}

export default Dates;
