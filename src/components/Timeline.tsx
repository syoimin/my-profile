import Box from "@mui/material/Box";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "./Icons/SchoolIcon";

// interface data {
//   className: string;
//   contentStyle: object;
//   contentArrowStyle: object;
//   date: string;
//   iconStyle: object;
//   icon: JSX.Element;
//   title: string;
//   subTitle: string;
//   contents: string;
// }

// interface homeProps {
//   dataList: data[];
// }
const oddColor = {
  background: "#ffffff",
};

const evenColor = {
  background: "#ffffff",
};

const historyData = [
  {
    className: "vertical-timeline-element--work",
    contentStyle: {
      background: oddColor.background,
    },
    contentArrowStyle: { borderRight: `7px solid  ${oddColor.background}` },
    date: "2021 年 10月 ~ 現在",
    iconStyle: { background: "rgb(40, 150, 100)", color: "#fff" },
    icon: <SchoolIcon />,
    title: "クラウドネイティブな Web エンジニアへの道へ",
    subTitle: "",
    contents: `開発エンジニアとして従事したいことを上司に報告。
    ReactNative を利用した予約サービスのモバイルアプリ、
    Laravel を使った開発などを通して、徐々にフルスタックエンジニアとしてのキャリアを進んでいく。
    今ではAWS を利用したクラウドネイティブなアーキテクトの設計からバックエンドの開発
    環境構築、フロントエンドの開発など、開発フローのほとんどの領域を一人でこなすことができるようになる。`,
  },
  {
    className: "vertical-timeline-element--work",
    contentStyle: {
      background: oddColor.background,
    },
    contentArrowStyle: { borderRight: `7px solid  ${oddColor.background}` },
    date: "2021 年 10月 ~ 現在",
    iconStyle: { background: "rgb(40, 150, 100)", color: "#fff" },
    icon: <SchoolIcon />,
    title: "技術書典の執筆活動",
    subTitle: "オムライス本だよ",
    contents: `技術書典８、９にてAWS入門の本を執筆。
    CI/CD や AWS のサービスについて、実務で実装した設計・構成を踏まえて、技術書典で販売。
    2回出展し、1回目は 140 ページの本 が 300 冊 売れ行は好調。
    2回目で調子乗って 600冊印刷したが、100冊で終了、ギリギリ黒字。
    合計売り上げ約 60 万円 / 400 冊 売り上げた。 
    `,
  },
  {
    className: "vertical-timeline-element--work",
    contentStyle: {
      background: oddColor.background,
    },
    contentArrowStyle: { borderRight: `7px solid  ${oddColor.background}` },
    date: "2021 年 10月 ~ 現在",
    iconStyle: { background: "rgb(40, 150, 100)", color: "#fff" },
    icon: <SchoolIcon />,
    title: "SPAJAM 2019予選出場 (優秀賞受賞)",
    subTitle: "",
    contents: `Twitter の自身の投稿を電車の中吊り広告風の Gif 画像を自動生成するアプリを作成。
    利用技術は React と AWS サービスの Cognito、S3 などなど。
    最後まで完成できなかったが、技術の無駄遣い賞として優秀賞を受賞。`,
  },
  {
    className: "vertical-timeline-element--work",
    contentStyle: {
      background: oddColor.background,
    },
    contentArrowStyle: { borderRight: `7px solid  ${oddColor.background}` },
    date: "2021 年 10月 ~ 現在",
    iconStyle: { background: "rgb(40, 150, 100)", color: "#fff" },
    icon: <SchoolIcon />,
    title: "SPAJAM 2017 予選出場 (優秀賞受賞)",
    subTitle: "",
    contents: `新卒 1 年目でハッカソンに出場。
    テーマは、「夏」でビールのベストな注ぎ具合を教えてくれるモバイルアプリを開発した。
    利用技術は、Monaca と HTML、CSS、js。画像認識を利用し、
    ビール泡のベストな比率を測定し、結果を評価・SNSに投稿するアプリを開発。`,
  },
  {
    className: "vertical-timeline-element--work",
    contentStyle: {
      background: oddColor.background,
    },
    contentArrowStyle: { borderRight: `7px solid  ${oddColor.background}` },
    date: "2021 年 10月 ~ 現在",
    iconStyle: { background: "rgb(40, 150, 100)", color: "#fff" },
    icon: <SchoolIcon />,
    title: "転職後のインフラエンジニア",
    subTitle: "",
    contents: `転職後、インフラエンジニアとして、データセンターからAWSへのサーバマイグレーションの案件を行う。
    AWSソリューションアーキテクトを取得。
    クラウドネイティブなネットワークの設計、Ansibleを用いたサーバの構築、CloudFormationを用いた IaC の導入を行う。`,
  },
  {
    className: "vertical-timeline-element--work",
    contentStyle: {
      background: oddColor.background,
    },
    contentArrowStyle: { borderRight: `7px solid  ${oddColor.background}` },
    date: "2021 年 10月 ~ 現在",
    iconStyle: { background: "rgb(40, 150, 100)", color: "#fff" },
    icon: <SchoolIcon />,
    title: "初めてのシステムエンジニア",
    subTitle: "",
    contents: `新卒で、システムエンジニアに就職し、有名転職サイトや公共事業のシステム開発をおこなう。
    メイン言語は Java。
    開発モデルはウォータフォール。
    中・大規模向けの管理システム、業務システムの設計・開発に携わる。
    変わった仕事としてシャープのロボホンを使ったアンドロイド開発のカリキュラム作成と講師を務める。
    一案件で d3.js を利用した案件でモダンな技術の開発の楽しさに気づき転職を決める。`,
  },
  {
    className: "vertical-timeline-element--school",
    contentStyle: {
      background: evenColor.background,
    },
    contentArrowStyle: { borderRight: `7px solid  ${evenColor.background}` },
    date: "2016 年卒業",
    iconStyle: { background: "rgb(40, 150, 100)", color: "#fff" },
    icon: <SchoolIcon />,
    title: "高知工科大学 情報学群 卒業",
    subTitle: "情報通信専攻 コンピュータサイエンス副専攻",
    contents: `パソコンが欲しく情報学部系の大学へ進学。
    生活費用を稼ぐため、Tex で数学教材の作成、公民館でExcel、Word、PowerPoint の使い方を教えながら生活。
    機械学習の研究室で、新聞記事から株価を予測する研究を行う。
    `,
  },
  {
    className: "vertical-timeline-element--school",
    contentStyle: {
      background: evenColor.background,
    },
    contentArrowStyle: { borderRight: `7px solid  ${evenColor.background}` },
    date: "",
    iconStyle: { background: "rgb(40, 150, 100)", color: "#fff" },
    icon: <SchoolIcon />,
    title: "競技プログラミングの出場",
    subTitle: "プログラミングサークル",
    contents: `プログラミングサークルで初めてプログラムを行う
    競技プログラミングの出場を通して、プログラムの組み立て方、アルゴリズムを学びやがて部長へ。新入生への指導を行う`,
  },
];

const Timeline = () => {
  return (
    <Box sx={{ bgcolor: "#EDF2F6" }}>
      <VerticalTimeline>
        {historyData.map((data, index) => (
          <VerticalTimelineElement
            key={index}
            className={data.className}
            contentStyle={data.contentStyle}
            contentArrowStyle={data.contentArrowStyle}
            date={data.date}
            iconStyle={data.iconStyle}
            icon={data.icon}
          >
            <h3 className="vertical-timeline-element-title">{data.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {data.subTitle}
            </h4>
            <p className="vertical-timeline-element-text">{data.contents}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Box>
  );
};

export default Timeline;