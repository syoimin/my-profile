import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

const icons = [
  {
    icon: <DeleteIcon />,
    title: "Qiita",
  },
  {
    icon: <SendIcon />,
    title: "Github",
  },
];
const IconLabel = () => {
  return (
    <Stack direction="row" spacing={2}>
      {icons.map((data, index) => (
        <Button
          variant="contained"
          size="large"
          startIcon={data.icon}
          key={index}
        >
          {data.title}
        </Button>
      ))}
    </Stack>
  );
};

export default IconLabel;
