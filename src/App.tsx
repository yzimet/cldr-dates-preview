import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import "typeface-roboto";

import Header from "./Header";
import Dates from "./Dates";
import DateSelector from "./DateSelector";
import LocaleSelector from "./LocaleSelector";
import TimeSelector from "./TimeSelector";
import Introduction from "./Introduction";

const DEFAULT_LOCALE: string = "en";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    body: {
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(2)
    }
  })
);

function App() {
  const today_iso = new Date().toISOString(); // 2020-03-25T20:17:43.701Z
  const today_iso_date = today_iso.substring(0, 10); // 2020-03-25
  const today_iso_time = today_iso.substring(11, 19); // 20:17:43
  const [locale, setLocale] = useState(DEFAULT_LOCALE);
  const [date, setDate] = useState(today_iso_date);
  const [time, setTime] = useState(today_iso_time);

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Container maxWidth="md">
        <Paper className={classes.body}>
          <Introduction />
          <LocaleSelector locale={locale} onChange={setLocale} />
          <DateSelector date={date} onChange={setDate} />
          <TimeSelector time={time} onChange={setTime} />
          <Dates locale={locale} date={date} time={time} />
        </Paper>
      </Container>
    </React.Fragment>
  );
}

export default App;
