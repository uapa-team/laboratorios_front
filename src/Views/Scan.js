import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import QrReader from "react-qr-reader";
import { Typography, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
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
export default withRouter(() => {
  const classes = useStyles();
  const [validButton, setValidButton] = useState(false);
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
          type="submit"
          variant="contained"
          color="primary"
          className={classes.textInput}
          disabled={!validButton}
        >
          Enviar formulario
        </Button>
      </Grid>
    </Grid>
  );
});
