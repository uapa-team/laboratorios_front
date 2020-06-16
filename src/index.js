import React from "react";
import ReactDOM from "react-dom";
import MaterialUiTheme from "./material_theme";
import UnalCanvas from "./Components/UnalTemplate/UnalCanvas";
import Login from "./Views/Login";
import Form from "./Views/Form";
import Scan from "./Views/Scan";
import Success from "./Views/Success";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { register } from "./serviceWorker";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
ReactDOM.render(
  <ThemeProvider theme={MaterialUiTheme}>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <BrowserRouter>
        <UnalCanvas>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/form" component={Form} />
            <Route exact path="/scan" component={Scan} />
            <Route exact path="/success" component={Success} />
          </Switch>
        </UnalCanvas>
      </BrowserRouter>
    </MuiPickersUtilsProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
register();
