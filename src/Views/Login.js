import React, { useState } from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
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
  const handleUsername = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const handleSubmit = () => {
    console.log([username, password]);
    props.history.push("/form");
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
    </Grid>
  );
});
