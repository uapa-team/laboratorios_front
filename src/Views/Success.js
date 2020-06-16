import React, { useEffect } from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import Backend from "../serviceBackend";
const useStyles = makeStyles({
  title: {
    textAlign: "center",
    marginBottom: "10%",
    marginTop: "10%",
  },
  textInput: {
    marginBottom: "10%",
    marginTop: "10%",
  },
});
export default withRouter((props) => {
  const classes = useStyles();
  const handleClosSession = () => {
    localStorage.removeItem("jwt");
    props.history.push("/");
  };
  useEffect(() => {
    Backend.verifyToken().then((valid) => {
      if (!valid) {
        handleClosSession();
      }
    });
    // eslint-disable-next-line
  }, []);
  return (
    <Grid container direction="column">
      <Typography variant="h6" className={classes.title}>
        Tu información se envió correctamente
      </Typography>
      <img alt="lab" width="100%" src={require("./ready.svg")} />
      <Button
        variant="contained"
        color="primary"
        className={classes.textInput}
        onClick={handleClosSession}
      >
        Cerrar sesión
      </Button>
    </Grid>
  );
});
