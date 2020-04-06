import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import "typeface-roboto";

import Dates from "./Dates";
import DateSelector from "./DateSelector";
import LocaleSelector from "./LocaleSelector";
import TimeSelector from "./TimeSelector";

const DEFAULT_LOCALE: string = "en";

function App() {
  const today_iso = new Date().toISOString(); // 2020-03-25T20:17:43.701Z
  const today_iso_date = today_iso.substring(0, 10); // 2020-03-25
  const today_iso_time = today_iso.substring(11, 19); // 20:17:43
  const [locale, setLocale] = useState(DEFAULT_LOCALE);
  const [date, setDate] = useState(today_iso_date);
  const [time, setTime] = useState(today_iso_time);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <div>
          <LocaleSelector locale={locale} onChange={setLocale} />
        </div>
        <div>
          <DateSelector date={date} onChange={setDate} />
        </div>
        <div>
          <TimeSelector time={time} onChange={setTime} />
        </div>
        <Dates locale={locale} date={date} time={time} />
      </Container>
    </React.Fragment>
  );
}

export default App;
