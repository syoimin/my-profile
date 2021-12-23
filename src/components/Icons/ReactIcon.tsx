import React from "react";
import SvgIcon from "@mui/material/SvgIcon";

interface svgProps {
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  viewBox: string;
}

const ReactIcon = (props: svgProps) => {
  console.log(props.icon);
  return (
    <SvgIcon
      component={props.icon}
      sx={{ fontSize: 80 }}
      viewBox={props.viewBox}
    />
  );
};

export default ReactIcon;
