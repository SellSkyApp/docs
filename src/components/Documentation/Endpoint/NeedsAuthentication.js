import React from "react";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

const NeedsAuthentication = ({ data }) =>
  !data ? null : data === "admin" ? (
    <VpnKeyIcon style={{ fontSize: 30, color: "red" }} />
  ) : (
    <VpnKeyIcon style={{ fontSize: 30, color: "rgb(113, 154, 89)" }} />
  );

export default NeedsAuthentication;
