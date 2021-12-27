import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { fontWeight } from "@mui/system";
import React from "react";

const toolsData = [
  {
    title: "OS",
    tools: "AmazonLinux1,2 / AlpineLinux / Debian / CentOS6,7 / FreeBSD",
  },
  {
    title: "コンテナ 開発環境",
    tools: "Docker",
  },
  {
    title: "プロジェクト管理",
    tools: "Jira / backlog",
  },
  {
    title: "バージョン管理システム",
    tools: "GitHub / GitLab",
  },
  {
    title: "コミュニケーションツール",
    tools: "Slack / Chatwork / Miro",
  },
  {
    title: "エディタ・統合開発環境",
    tools: "Visual Stuidio Code / vi",
  },
  {
    title: "CI /CD ツール",
    tools: "GitHubActions / gitlab-ci / CodeBuild / CodePipeline",
  },
];

const SkillsList = () => {
  return (
    <>
      {toolsData.map((data, index) => (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
          pt={3}
          key={index}
        >
          <Typography
            variant="body2"
            sx={{
              fontWeight: "100",
            }}
          >{`${data.title}： `}</Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
            }}
          >
            {data.tools}
          </Typography>
        </Grid>
      ))}
    </>
  );
};

export default SkillsList;
