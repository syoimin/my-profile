import React from "react";
import MuiSvgIcon from "@mui/material/SvgIcon";

interface svgProps {
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  viewBox: string;
}

const SvgIcon = (props: svgProps) => {
  console.log(props.icon);
  return (
    <MuiSvgIcon
      component={props.icon}
      sx={{ fontSize: 80 }}
      viewBox={props.viewBox}
    />
  );
};

export default SvgIcon;
