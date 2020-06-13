import React from "react";
import { Typography } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import QrReader from "react-qr-reader";
export default withRouter(() => {
  return (
    <>
      <QrReader
        delay={300}
        onError={(err) => alert(err)}
        onScan={(data) => (data ? alert(data) : null)}
        style={{ width: "100%" }}
      />
    </>
  );
});
