import React, { useState } from "react";
import { Typography, Grid, Button, MenuItem } from "@material-ui/core";
import { DateTimePicker, TimePicker } from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";
import {
  ValidatorForm,
  TextValidator,
  SelectValidator,
} from "react-material-ui-form-validator";
import { withRouter } from "react-router-dom";
export default withRouter((props) => {
  const [dni, setDni] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [building, setbuilding] = useState("");
  const [lab, setLab] = useState("");
  const [admissionTime, setAdmissionTime] = useState(null);
  const [departureTime, setDepartureTime] = useState(null);
  const [validAdmissionTime, setValidAdmissionTime] = useState(true);
  const [validDeppartureTime, setValidDepartureTime] = useState(true);
  const handleDni = (e) => {
    e.preventDefault();
    setDni(e.target.value);
  };
  const handleName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleRole = (e) => {
    e.preventDefault();
    setRole(e.target.value);
  };
  const handleBuilding = (e) => {
    e.preventDefault();
    setbuilding(e.target.value);
  };
  const handleLab = (e) => {
    e.preventDefault();
    setLab(e.target.value);
  };
  const handleAdmissionTime = (v) => {
    setAdmissionTime(v);
    setValidAdmissionTime(v !== null);
  };
  const handleDepartureTime = (v) => {
    setDepartureTime(v);
    setValidDepartureTime(v !== null);
  };
  const handleSubmit = () => {
    setValidAdmissionTime(admissionTime !== null);
    setValidDepartureTime(departureTime !== null);
    if (
      !dni ||
      !name ||
      !role ||
      !building ||
      !lab ||
      !admissionTime ||
      !departureTime
    )
      return;
    props.history.push("/scan");
  };
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
  const classes = useStyles();
  return (
    <Grid>
      <Typography variant="h6" className={classes.title}>
        Por favor llene cada uno de estos campos cuidadosamente
      </Typography>
      <ValidatorForm
        className={classes.form}
        onSubmit={handleSubmit}
        onError={handleSubmit}
      >
        <TextValidator
          className={classes.textInput}
          label="Documento de identidad"
          onChange={handleDni}
          name="dni"
          value={dni}
          autoComplete="off"
          validators={["required"]}
          errorMessages={["Este campo es requerido"]}
          variant="outlined"
        />
        <TextValidator
          className={classes.textInput}
          label="Nombre Completo"
          autoComplete="off"
          onChange={handleName}
          name="name"
          variant="outlined"
          validators={["required"]}
          errorMessages={["Este campo es requerido"]}
          value={name}
        />
        <SelectValidator
          value={role}
          onChange={handleRole}
          label="Vinculación"
          className={classes.textInput}
          variant="outlined"
          validators={["required"]}
          errorMessages={["Este campo es requerido"]}
        >
          <MenuItem value={"student"}>Estudiante</MenuItem>
          <MenuItem value={"professor"}>Docente</MenuItem>
          <MenuItem value={"worker"}>Administrativo</MenuItem>
        </SelectValidator>
        <SelectValidator
          value={building}
          onChange={handleBuilding}
          label="Edificio"
          variant="outlined"
          className={classes.textInput}
          validators={["required"]}
          errorMessages={["Este campo es requerido"]}
        >
          <MenuItem value={"214"}>214 Antonio Nariño</MenuItem>
          <MenuItem value={"401"}>401 Insignia</MenuItem>
          <MenuItem value={"406"}>406 IEI</MenuItem>
          <MenuItem value={"407"}>407 Posgrados Materiales</MenuItem>
          <MenuItem value={"408"}>408 CADE</MenuItem>
          <MenuItem value={"408"}>408 Hidráulica</MenuItem>
          <MenuItem value={"409"}>409 Hidráulica</MenuItem>
          <MenuItem value={"411"}>411 Laboratorios de Ingeniería</MenuItem>
          <MenuItem value={"412"}>
            412 Laboratorio de Ingeniería Química
          </MenuItem>
          <MenuItem value={"453"}>453 Aulas de Ingeniería</MenuItem>
          <MenuItem value={"454"}>454 Ciencia y Tecnología</MenuItem>
        </SelectValidator>
        <TextValidator
          className={classes.textInput}
          label="Laboratorio"
          onChange={handleLab}
          name="lab"
          variant="outlined"
          validators={["required"]}
          errorMessages={["Este campo es requerido"]}
          value={lab}
        />
        <DateTimePicker
          className={classes.textInput}
          error={!validAdmissionTime}
          clearable
          autoOk
          format="dd/MM/yyyy HH:mm"
          label="Fecha y Hora de Ingreso"
          inputVariant="outlined"
          value={admissionTime}
          cancelLabel="CANCELAR"
          clearLabel="LIMPIAR"
          onChange={handleAdmissionTime}
          helperText={!validAdmissionTime && "Este campo es requerido"}
        />
        <TimePicker
          className={classes.textInput}
          error={!validDeppartureTime}
          clearable
          autoOk
          label="Hora Estimada de Salida"
          cancelLabel="CANCELAR"
          clearLabel="LIMPIAR"
          value={departureTime}
          onChange={handleDepartureTime}
          inputVariant="outlined"
          helperText={!validAdmissionTime && "Este campo es requerido"}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.textInput}
        >
          Siguiente
        </Button>
      </ValidatorForm>
    </Grid>
  );
});
