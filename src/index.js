import React from "react";
import ReactDOM from "react-dom";
import MaterialUiTheme from "./material_theme";
import UnalCanvas from "./Components/UnalTemplate/UnalCanvas";
import Login from "./Views/Login";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { register } from "./serviceWorker";
ReactDOM.render(
  <ThemeProvider theme={MaterialUiTheme}>
    <BrowserRouter>
      <UnalCanvas>
        <Switch>
          <Route exact path="/" component={Login} />
          {/* <Route exact path="/video/:id" component={Video} /> */}
        </Switch>
      </UnalCanvas>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);
register();
