import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.primary.light
    }
  })
);

export default function DateFormatGroup(props: Props) {
  const { results, title } = props;
  const classes = useStyles();

  return (
    <>
      <TableHead className={classes.head}>
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