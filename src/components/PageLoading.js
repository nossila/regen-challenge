import React from "react";
import {CircularProgress, withStyles} from "@material-ui/core";

function PageLoading({classes}) {
  return (<div className={classes.loadingContainer}>
    <CircularProgress style={{width: 80, height: 80}} />
  </div>);
}

export default withStyles((theme) => ({
  loadingContainer: {
    marginTop: theme.spacing(8),
    textAlign: "center",
  },
}))(PageLoading);
