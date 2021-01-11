import React from "react";
import {CssBaseline, Container} from '@material-ui/core';
import Repository from "./Repository";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Repository name="cosmos-sdk" owner="cosmos" />
      </Container>
    </React.Fragment>
  );
}

export default App;
