import React, { useState } from "react";
import { Typography, Grid, Button, Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import Backend from "../serviceBackend";
const useStyles = makeStyles({
  title: {
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  textInput: {
    marginTop: "5%",
  },
});

export default withRouter((props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showSnack, setShowSnack] = useState(false);
  const [snackProp, setSnackProp] = useState("");
  const handleUsername = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const handleSubmit = () => {
    Backend.sendLogin(username, password).then(async (res) => {
      if (res.status === 200) {
        let resJSON = await res.json();
        localStorage.setItem("jwt", resJSON.token);
        props.history.push("/form");
      } else if (res.status === 203) {
        setSnackProp("Usuario o contraseña incorrectos");
        setShowSnack(true);
      } else {
        setSnackProp("Error en el servidor");
        setShowSnack(true);
      }
    });
  };
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Typography variant="h6" className={classes.title}>
        Bienvenidos al formulario de ingreso a laboratorios
      </Typography>
      <img alt="lab" width="100%" src={require("./lab.svg")} />
      <ValidatorForm className={classes.form} onSubmit={handleSubmit}>
        <TextValidator
          className={classes.textInput}
          label="Usuario Institucional"
          onChange={handleUsername}
          name="username"
          value={username}
          autoComplete="off"
          validators={["required"]}
          errorMessages={["Este campo es requerido"]}
          variant="outlined"
        />
        <TextValidator
          className={classes.textInput}
          label="Contraseña"
          onChange={handlePassword}
          name="password"
          type="password"
          variant="outlined"
          validators={["required"]}
          errorMessages={["Este campo es requerido"]}
          value={password}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.textInput}
        >
          Ingresar
        </Button>
      </ValidatorForm>

      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={showSnack}
        autoHideDuration={6000}
        onClose={() => setShowSnack(false)}
      >
        <Alert
          onClose={() => setShowSnack(false)}
          severity="error"
          variant="filled"
        >
          {snackProp}
        </Alert>
      </Snackbar>
    </Grid>
  );
});
