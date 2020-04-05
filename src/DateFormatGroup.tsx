import React from "react";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

type Props = {
  results: {
    name: string;
    skeleton: string;
    value: string;
  }[];
  title: string;
};

export default function DateFormatGroup(props: Props) {
  const { results, title } = props;
  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell colSpan={3}>{title}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {results.map(result => (
          <TableRow key={result.name}>
            <TableCell component="th" scope="row">
              {result.name}
            </TableCell>
            <TableCell>{result.skeleton}</TableCell>
            <TableCell>{result.value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
}
