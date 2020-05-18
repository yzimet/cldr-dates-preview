import React from "react";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import { useFetch } from "react-hooks-async";

import DateFormatGroup from "./DateFormatGroup";

const BASE_URL: string = "/api/locales";

interface LocalesResponse {
  metadata: {
    locale: string;
    rtl: boolean;
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

type Props = {
  locale: string;
  date: string;
  time: string;
};

function Dates(props: Props) {
  const { locale, date, time } = props;
  const url = `${BASE_URL}/${locale}?datetime=${date}T${time}Z`;
  const { pending, result } = useFetch<LocalesResponse>(url);

  if (pending || !result) {
    return <div>Loading</div>;
  }

  const { rtl } = result.metadata;

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="Date formats">
        <DateFormatGroup
          results={result.dateFormats}
          title="dateFormats"
          rtl={rtl}
        />
        <DateFormatGroup
          results={result.timeFormats}
          title="timeFormats"
          rtl={rtl}
        />
        <DateFormatGroup
          results={result.dateTimeFormats}
          title="dateTimeFormats"
          rtl={rtl}
        />
        <DateFormatGroup
          results={result.availableFormats}
          title="availableFormats"
          rtl={rtl}
        />
      </Table>
    </TableContainer>
  );
}

export default Dates;
