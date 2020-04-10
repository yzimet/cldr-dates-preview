import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Container maxWidth="md">
          <Typography variant="h5">CLDR Dates Preview</Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
