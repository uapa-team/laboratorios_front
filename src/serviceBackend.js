export default class Backend {
  //static backEndUrl = 'https://ingenieria.bogota.unal.edu.co/actas-api/';
  static backEndUrl = "https://ingenieria.bogota.unal.edu.co/apoyo_apilab/";

  static openLink(url) {
    window.open(this.backEndUrl + url, "_blank");
  }

  static sendRequest(method, path, body) {
    return this._request(
      method,
      path,
      {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Token " + localStorage.getItem("jwt"),
      },
      body
    );
  }

  static sendLogin(username, password) {
    return this._request(
      "POST",
      "login",
      {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      {
        username: username,
        password: password,
      }
    );
  }

  static _request(method, path, headers, body) {
    return fetch(this.backEndUrl + path, {
      method: method,
      headers: headers,
      body: JSON.stringify(body),
    });
  }
}