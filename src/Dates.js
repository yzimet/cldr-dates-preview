import React, { useState } from "react";

import DateFormatGroup from "./DateFormatGroup";
import DateSelector from "./DateSelector";
import LocaleSelector from "./LocaleSelector";
import TimeSelector from "./TimeSelector";
import useFetch from "./utils/useFetch";

const BASE_URL = "/api/locales";
const DEFAULT_LOCALE = "en";

function Dates() {
  const today_iso = new Date().toISOString(); // 2020-03-25T20:17:43.701Z
  const today_iso_date = today_iso.split("T")[0]; // 2020-03-25
  const today_iso_time = today_iso.split("T")[1].substring(0, 8); // 20:17:43
  const [locale, setLocale] = useState(DEFAULT_LOCALE);
  const [date, setDate] = useState(today_iso_date);
  const [time, setTime] = useState(today_iso_time);
  const url = `${BASE_URL}/${locale}?datetime=${date}T${time}Z`;
  const { data, loading } = useFetch(url);

  if (loading) {
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
      <table>
        <DateFormatGroup results={data.dateFormats} title="dateFormats" />
        <DateFormatGroup results={data.timeFormats} title="timeFormats" />
        <DateFormatGroup
          results={data.dateTimeFormats}
          title="dateTimeFormats"
        />
        <DateFormatGroup
          results={data.availableFormats}
          title="availableFormats"
        />
      </table>
    </div>
  );
}

export default Dates;
