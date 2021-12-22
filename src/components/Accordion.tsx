import * as React from "react";
import MuiAccordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const resumeData = [
  {
    title: "管理画面の作成",
    contents: `管理画面を作成`,
  },
];

const Accordion = () => {
  return (
    <div>
      {resumeData.map((data, index) => (
        <MuiAccordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6">{data.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{data.contents}</Typography>
          </AccordionDetails>
        </MuiAccordion>
      ))}
    </div>
  );
};
export default Accordion;
