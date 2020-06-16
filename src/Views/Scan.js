import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import QrReader from "react-qr-reader";
import { Typography, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Backend from "../serviceBackend";
const useStyles = makeStyles({
  title: {
    textAlign: "center",
    marginBottom: "10%",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  textInput: {
    marginTop: "15%",
  },
});
export default withRouter((props) => {
  const classes = useStyles();
  const [validButton, setValidButton] = useState(false);
  const handleSubmit = () => {
    Backend.sendRequest("POST", "register", {
      ...props.location.state,
      admission_time: props.location.state.admission_time.toLocaleString(),
      departure_time: props.location.state.departure_time.toLocaleTimeString(),
    }).then((res) => {
      if (res.status === 201) {
        props.history.push("/success");
      } else {
        console.log(res);
      }
    });
  };
  useEffect(() => {
    console.log(props.location.state);
    Backend.verifyToken().then((valid) => {
      if (!valid) {
        localStorage.removeItem("jwt");
        props.history.push("/");
      }
    });
    const {
      dni,
      full_name,
      role,
      building,
      lab,
      admission_time,
      departure_time,
    } = props.location.state;
    if (
      !dni ||
      !full_name ||
      !role ||
      !building ||
      !lab ||
      !admission_time ||
      !departure_time
    ) {
      props.history.push("/form");
    }
    // eslint-disable-next-line
  }, []);
  const handleData = (data) => {
    if (data) setValidButton(data === "~yfuH_#*f)^F)6`@");
  };
  return (
    <Grid>
      <Typography variant="h6" className={classes.title}>
        A continuación, escanee el código QR que se encuentra a la entrada del
        edificio al que desea ingresar
      </Typography>
      <Grid className={classes.form}>
        <QrReader
          delay={300}
          onError={(err) => alert(err)}
          onScan={handleData}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.textInput}
          disabled={!validButton}
          onClick={handleSubmit}
        >
          Enviar formulario
        </Button>
      </Grid>
    </Grid>
  );
});
