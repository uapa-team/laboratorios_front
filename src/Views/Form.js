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
export default withRouter(() => {
  const [dni, setDni] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [building, setbuilding] = useState("");
  const [lab, setLab] = useState("");
  const [admissionTime, setAdmissionTime] = useState(null);
  const [departureTime, setDepartureTime] = useState(null);
  const [validRole, setValidRole] = useState(true);
  const [validBuilding, setValidBuilding] = useState(true);
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
  const handleSubmit = () => {
    console.log(role);
    setValidRole(role !== "");
    setValidBuilding(building !== "");
    setValidAdmissionTime(admissionTime !== null);
    setValidDepartureTime(departureTime !== null);
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
      <ValidatorForm className={classes.form} onSubmit={handleSubmit}>
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
          error={!validRole}
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
          error={!validBuilding}
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
          onChange={(v) => setAdmissionTime(v)}
        />
        <TimePicker
          className={classes.textInput}
          error={!validDeppartureTime}
          clearable
          autoOk
          label="Hora Estimada de Salida"
          value={departureTime}
          onChange={(v) => setDepartureTime(v)}
          inputVariant="outlined"
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
