import React from "react";
import TemplateDefault from "../templates/Default";
import SkilsCard from "../components/SkillsCard";
import SkillsList from "../components/SkillsList";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { ReactComponent as SvgReactIcon } from "../icons/react.svg";
import { ReactComponent as SvgVueIcon } from "../icons/vue.svg";
import { ReactComponent as SvgLaravelIcon } from "../icons/laravel.svg";
import { ReactComponent as SvgAwsAmplifyIcon } from "../icons/aws-amplify.svg";
import { ReactComponent as SvgGoIcon } from "../icons/gopher.svg";
import { ReactComponent as AwsCloudformationIcon } from "../icons/aws-cloudformation.svg";
import { ReactComponent as AnsibleIcon } from "../icons/ansible.svg";
import { ReactComponent as ServerlessIcon } from "../icons/serverless.svg";
import { ReactComponent as JavaIcon } from "../icons/java.svg";

const skillsData = [
  {
    icon: SvgReactIcon,
    skil: "React",
    others: ["React Native", "Expo"],
    rating: 2,
    viewBox: "0 0 256 228",
    projects: [
      {
        title: "○○案件の管理画面作成プロジェクト",
        link: "https://google.com",
      },
      {
        title: "○○案件の管理画面作成プロジェクト",
        link: "https://google.com",
      },
    ],
  },
  {
    icon: SvgVueIcon,
    skil: "Vue",
    others: ["Vue3", "Composition API", "Vue2", "Vuex", "Vue Router", "NuxtJS"],
    rating: 3,
    viewBox: "0 0 256 221",
    projects: [
      {
        title: "○○案件の管理画面作成プロジェクト",
        link: "https://google.com",
      },
    ],
  },
  {
    icon: SvgLaravelIcon,
    skil: "Laravel",
    others: ["Laravel 5,7,8"],
    rating: 4,
    viewBox: "0 0 256 264",
    projects: [
      {
        title: "○○案件の管理画面作成プロジェクト",
        link: "https://google.com",
      },
    ],
  },
  {
    icon: SvgAwsAmplifyIcon,
    skil: "AWS Amplify",
    others: ["Amplify SDK", "Authenticator", "IoT Core"],
    rating: 4,
    viewBox: "0 0 256 191",
    projects: [
      {
        title: "○○案件の管理画面作成プロジェクト",
        link: "https://google.com",
      },
    ],
  },
  {
    icon: SvgGoIcon,
    skil: "Go",
    others: ["gin", "gorm"],
    rating: 4,
    viewBox: "0 0 256 348",
    projects: [
      {
        title: "○○案件の管理画面作成プロジェクト",
        link: "https://google.com",
      },
    ],
  },
  {
    icon: JavaIcon,
    skil: "Java",
    others: ["Apach Click", "Java6"],
    rating: 3,
    viewBox: "0 0 256 346",
    projects: [
      {
        title: "○○案件の管理画面作成プロジェクト",
        link: "https://google.com",
      },
    ],
  },
  {
    icon: AwsCloudformationIcon,
    skil: "AWS Cloudformation",
    others: ["AWS SAM"],
    rating: 4,
    viewBox: "0 0 256 312",
    projects: [
      {
        title: "○○案件の管理画面作成プロジェクト",
        link: "https://google.com",
      },
    ],
  },
  {
    icon: ServerlessIcon,
    skil: "Serverless Framework",
    others: [],
    rating: 3,
    viewBox: "0 0 256 204",
    projects: [
      {
        title: "○○案件の管理画面作成プロジェクト",
        link: "https://google.com",
      },
    ],
  },
  {
    icon: AnsibleIcon,
    skil: "Ansible",
    others: [],
    rating: 3,
    viewBox: "0 0 256 315",
    projects: [
      {
        title: "○○案件の管理画面作成プロジェクト",
        link: "https://google.com",
      },
    ],
  },
];

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
    title: "エディタ",
    tools: "Visual Stuidio Code / vi",
  },
  {
    title: "CI / CD",
    tools: "GitHubActions / gitlab-ci / CodeBuild / CodePipeline",
  },
];

const Skills = () => {
  return (
    <TemplateDefault className="skills">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        pt={3}
      >
        <Grid item>
          <Typography variant="h4"> {"Skills"} </Typography>
        </Grid>
        <Grid item>
          <SkilsCard skillsData={skillsData} />
        </Grid>
        <Grid item>
          <Typography variant="h4"> {"Tools"} </Typography>
        </Grid>
        <Grid item>
          <SkillsList toolsData={toolsData} />
        </Grid>
      </Grid>
    </TemplateDefault>
  );
};

export default Skills;
