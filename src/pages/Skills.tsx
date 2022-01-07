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
import { ReactComponent as DockerIcon } from "../icons/docker.svg";
import { ReactComponent as CodepipelineIcon } from "../icons/aws-codepipeline.svg";
import { ReactComponent as PythonIcon } from "../icons/python.svg";
import { ReactComponent as KubernatesIcon } from "../icons/kubernetes.svg";
import { ReactComponent as CIcon } from "../icons/c.svg";

const skillsData = [
  {
    icon: SvgLaravelIcon,
    skil: "Laravel",
    others: ["Laravel 5,7,8"],
    rating: 5,
    viewBox: "0 0 256 264",
    description: "殆どの管理システムを Laravel で作成。仕様は熟知。",
    projects: [
      {
        title: "SMS 二段階認証 サービス 管理画面開発",
        link: "http://localhost:3001/my-profile/resume#SMS 二段階認証 サービス 管理画面開発",
      },
      {
        title:
          "タグ挿入でデザインを変更できるサービスの管理画面 リプレイス開発",
        link: "http://localhost:3001/my-profile/resume#タグ挿入でデザインを変更できるサービスの管理画面 リプレイス開発",
      },
      {
        title: "新人研修 カリキュラム作成と講師",
        link: "http://localhost:3001/my-profile/resume#新人研修 カリキュラム作成と講師",
      },
      {
        title: "クリニックのアプリ予約情報管理システムと予約情報閲覧アプリ",
        link: "http://localhost:3001/my-profile/resume#クリニックのアプリ予約情報管理システムと予約情報閲覧アプリ",
      },
    ],
  },
  {
    icon: DockerIcon,
    skil: "Docker",
    others: ["docker-compose", "Dockerfile"],
    rating: 5,
    viewBox: "0 0 256 185",
    description: "基本すべて Docker で開発中。Dockerfile もかけるよ。",
    projects: [
      {
        title:
          "Go + RESTFull API を利用したサーバレスな管理画面の API 設計・開発",
        link: "http://localhost:3001/my-profile/resume#Go + RESTFull API を利用したサーバレスな管理画面の API 設計・開発",
      },
      {
        title: "SMS 二段階認証 サービス 管理画面開発",
        link: "http://localhost:3001/my-profile/resume#SMS 二段階認証 サービス 管理画面開発",
      },
      {
        title: "SMS 二段階認証サービス SMS 送信 API 開発",
        link: "http://localhost:3001/my-profile/resume#SMS 二段階認証サービス SMS 送信 API 開発",
      },
      {
        title:
          "タグ挿入でデザインを変更できるサービスの管理画面 リプレイス開発",
        link: "http://localhost:3001/my-profile/resume#タグ挿入でデザインを変更できるサービスの管理画面 リプレイス開発",
      },
      {
        title: "BtoBtoC 入力フォーム支援サービス開発プロジェクト",
        link: "http://localhost:3001/my-profile/resume#BtoBtoC 入力フォーム支援サービス開発プロジェクト",
      },
      {
        title: "クリニックのアプリ予約情報管理システムと予約情報閲覧アプリ",
        link: "http://localhost:3001/my-profile/resume#クリニックのアプリ予約情報管理システムと予約情報閲覧アプリ",
      },
    ],
  },
  {
    icon: SvgGoIcon,
    skil: "Go",
    others: ["gin", "gorm"],
    rating: 4,
    viewBox: "0 0 256 348",
    description: "利用中。go でクリーンアーキテクチャ組みたいな。",
    projects: [
      {
        title:
          "Go + RESTFull API を利用したサーバレスな管理画面の API 設計・開発",
        link: "http://localhost:3001/my-profile/resume#Go + RESTFull API を利用したサーバレスな管理画面の API 設計・開発",
      },
    ],
  },
  {
    icon: AwsCloudformationIcon,
    skil: "AWS Cloudformation",
    others: ["AWS SAM"],
    rating: 4,
    viewBox: "0 0 256 312",
    description: "インフラ環境は基本これ！！API 開発は SAMで。",
    projects: [
      {
        title:
          "タグ挿入でデザインを変更できるサービスの管理画面 リプレイス開発",
        link: "http://localhost:3001/my-profile/resume#タグ挿入でデザインを変更できるサービスの管理画面 リプレイス開発",
      },
      {
        title: "SMS 二段階認証サービス SMS 送信 API 開発",
        link: "http://localhost:3001/my-profile/resume#SMS 二段階認証サービス SMS 送信 API 開発",
      },
      {
        title: "オンプレサーバを AWS へ移設",
        link: "http://localhost:3001/my-profile/resume#オンプレサーバを AWS へ移設",
      },
      {
        title: "クリニックのアプリ予約情報管理システムと予約情報閲覧アプリ",
        link: "http://localhost:3001/my-profile/resume#クリニックのアプリ予約情報管理システムと予約情報閲覧アプリ",
      },
      {
        title:
          "Go + RESTFull API を利用したサーバレスな管理画面の API 設計・開発",
        link: "http://localhost:3001/my-profile/resume#Go + RESTFull API を利用したサーバレスな管理画面の API 設計・開発",
      },
    ],
  },
  {
    icon: CodepipelineIcon,
    skil: "AWS CodePipeline",
    others: ["CodeDeploy", "CodeBuild"],
    rating: 4,
    viewBox: "0 0 74.375 85",
    description: "いつもお世話になっております。CI/CD といえばこれ！！",
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
    description: "Cognito 認証は Amplify SDK を利用。",
    projects: [
      {
        title: "○○案件の管理画面作成プロジェクト",
        link: "https://google.com",
      },
    ],
  },
  {
    icon: SvgReactIcon,
    skil: "React",
    others: ["React Native", "Expo"],
    rating: 3,
    viewBox: "0 0 256 228",
    description: "このポートフォリは React + Typescript で実装",
    projects: [
      {
        title: "○○案件の管理画面作成プロジェクト",
        link: "http://localhost:3001/my-profile/resume#%E3%83%86%E3%82%B9%E3%83%884",
      },
      {
        title: "○○案件の管理画面作成プロジェクト",
        link: "http://localhost:3001/my-profile/resume#%E3%83%86%E3%82%B9%E3%83%883",
      },
    ],
  },
  {
    icon: SvgVueIcon,
    skil: "Vue",
    others: ["Vue3", "Composition API", "Vue2", "Vuex", "NuxtJS"],
    rating: 3,
    viewBox: "0 0 256 221",
    description: "業務で Vue2, Vue3 両方経験。Vuex は最悪",
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
    description: "SIer 時代に利用。ここ４年 Java は触れてません。",
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
    description: "SAM を使う前はこっち。また戻ってくるかも",
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
    description: "EC2 立ててたときはベース環境をこれで作成",
    projects: [
      {
        title: "○○案件の管理画面作成プロジェクト",
        link: "https://google.com",
      },
    ],
  },
  {
    icon: PythonIcon,
    skil: "Python",
    others: ["Numpy", "scikit-learn", "SVM", "自然言語処理", "CNN"],
    rating: 2,
    viewBox: "0 0 256 255",
    description: "趣味と学部時代の研究開発で利用。業務経験はなし",
    projects: [
      {
        title: "卒業論文: サポートベクターマシンを用いた株価予測",
        link: "https://www.lab.kochi-tech.ac.jp/yoshilab/thesis/1160318.pdf",
      },
      {
        title: "英字 pdf から 文字列を抽出し、翻訳するツール",
        link: "https://github.com/syoimin/pdftotext",
      },
    ],
  },
  {
    icon: CIcon,
    skil: "C 言語",
    others: ["アセンブリ言語"],
    rating: 2,
    viewBox: "0 0 128 128",
    description: "競技プログラミングで利用。ポインタはこれでマスター！！",
    projects: [
      {
        title: "ACM ICPC 国際大学対抗プログラミングコンテスト 過去問",
        link: "https://icpc.iisf.or.jp/past/",
      },
    ],
  },
  {
    icon: KubernatesIcon,
    skil: "Kubernetes",
    others: [],
    rating: 1,
    viewBox: "0 0 256 249",
    description: "公式チュートリアルを一通り実施。今後伸ばしたい！！",
    projects: [
      {
        title: "Kubernetesの基本を学ぶ",
        link: "https://kubernetes.io/ja/docs/tutorials/kubernetes-basics/",
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
    <TemplateDefault className="skills" bgColor="primary.bgLight2">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        pt={3}
      >
        <Grid item>
          <Typography variant="h4"> 経験スキル（趣味も含む） </Typography>
        </Grid>
        <Grid item>
          <SkilsCard skillsData={skillsData} />
        </Grid>
        <Grid item>
          <Typography variant="h4"> 業務で利用したツール </Typography>
        </Grid>
        <Grid item>
          <SkillsList toolsData={toolsData} />
        </Grid>
      </Grid>
    </TemplateDefault>
  );
};

export default Skills;
