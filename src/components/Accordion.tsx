import * as React from "react";
import MuiAccordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const resumeData = [
  {
    skills: [],
    title: "マルチテナントの会員登録ページの認証システムの設計・開発",
    contents: `ノーコードで会員登録ページを作成できるサービスのマルチテナント認証方式の設計・開発
    認証サービスとして Cognito を採用し、マルチテナントに対応するためマルチユーザプール型を採用。`,
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
