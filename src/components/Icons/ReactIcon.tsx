import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import { ReactComponent as SvgReactIcon } from "../../icons/react.svg";

function ReactIcon() {
  return (
    <SvgIcon
      component={SvgReactIcon}
      sx={{ fontSize: 80 }}
      viewBox="0 0 256 228"
    />
  );
}

export default ReactIcon;
