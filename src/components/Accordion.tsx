import React from "react";
import MuiAccordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";

import Link from "@mui/material/Link";
import { useLocation } from "react-router-dom";
import "../css/Resume.css";

const resumeData = [
  {
    skills: ["React", "Typescript", "AWS Amplify", "Cognito"],
    title: "マルチテナントの会員登録ページの認証システムの設計・開発",
    contents: `・ノーコードで会員登録ページを作成できるサービスのマルチテナント認証方式の設計・開発を担当。
    ・認証サービスとして Cognito を採用。マルチテナントに対応するためマルチユーザプール型を採用。
    ・React + Amplify を使って Amplify UI コンポーネントを使わず独自カスタマイズで認証画面を作成。
    ・Dynamo へのアクセスコントロール制御として IAM の Sub を用いた認証コントロールを設計。`,
    thoughts: `マルチテナントを Cognito で実装するパターンは複数あるが、今回はビジネス要件を確認し、クライアントのセキュリティ要件に満たすためにユーザプールを分ける形で実装しました。ユーザプールを分ける場合、各クライアントごとにユーザプールを特定する必要があるため、実装を工夫しました。`,
    date: "2021年 12月 ~ 現在",
    link: "",
    member: 3,
    assign: ["認証設計", "フロント開発"],
    scale: "ゼロイチ開発",
    feat: true,
  },
  {
    skills: [
      "golang",
      "gin フレームワーク",
      "Swagger",
      "AWS SAM",
      "Cognito",
      "Docker",
      "GitHub Actions",
    ],
    title: "Go + RESTFull API を利用したサーバレスな管理画面の API 設計・開発",
    contents: `・各マイクロサービスを管理するプラットフォームの管理画面の API 設計・開発を担当。
    ・認証サービスに Cognito を、認証方式に JWT を採用。
    ・API のフレームワークは Gin フレームワークを採用し、コード設計に３層アーキテクチャ、MVC モデルを採用し、デザインパターンにサービス・レポジトリパターンと依存注入を独自実装。
    ・本番環境は完全サーバレスで AWS SAM を使って API Gateway + lambda を構築。
    ・開発環境は SAM を DooD (Dcker outside of Docker) 環境で実行するように構築`,
    thoughts: `初めて golang を業務で利用した開発でした。Gin フレームワークは、ルーティングとミドルウェアのみしか提供されていないのでその他必要なコード設計はオレオレフレームワークにならないように一般的なコード設計・デザインパターンを採用し設計しました。
    ${"　"}過去に経験したフレームワークの知見を活かし、小・中規模で開発速度がある程度早く、スケールしてもコードが煩雑にならないようなデザインパターンを採用しました。
    社内初の golang の業務だったので、作成したコード設計のテンプレートを社内のナレッジとして共有しました。`,
    date: "2021年 5月 ~ 2021年 11月",
    link: "",
    member: 4,
    assign: [
      "DB 設計",
      "API 設計",
      "API 開発",
      "ユニットテスト",
      "コードレビュー",
    ],
    scale: "ゼロイチ開発",
    feat: true,
  },
  {
    skills: [
      "Laravel",
      "Cognito",
      "Docker",
      "Aurora",
      "Athena",
      "Kinesis Data Firehose",
      "Tailwind CSS",
      "CodePipeline",
    ],
    title: "SMS 二段階認証 サービス 管理画面開発",
    contents: `・SMS 二段階認証サービスのユーザ管理と SMS 送信 API の管理システムを設計・開発。
    ・フレームワークに Laravel、認証サービスに Cognito、本番環境は EC2 Autoscaling。
    ・デザインパターンに、サービス・レポジトリパターンを導入
    ・CI/CD を CodePipeline で構築
    ・Athena、Kinesis Data Firehose を使った CloudWatch のログ集計バッチ`,

    thoughts: `開発期間が短かったので慣れているフレームワークを採用しました。
    Laravel のバージョンアップに伴いBootstrap を使わず Tailwind CSS で React のようなコンポーネント指向で HTML のパーツを作成しました。
    ${"　"}チームメンバーにコード設計の意図の意思疎通があまりできず、最初は意図しないコンポーネントの分け方でコミットするメンバーもいましたがコードレビューすることで徐々にチームメンバーと認識が揃うようになりました。`,
    date: "2020年 11月 ~ 2021年 4月",
    link: "https://www.showcase-tv.com/pressrelease/202120531sms/",
    member: 3,
    assign: ["DB 設計", "開発", "CI/CD 構築", "コードレビュー"],
    scale: "ゼロイチ開発",
    feat: true,
  },
  {
    skills: [
      "NodeJs",
      "Lambda",
      "AWS SAM",
      "CodePipeline",
      "Cloudformation",
      "Swagger",
      "Redis",
    ],
    title: "SMS 二段階認証サービス SMS 送信 API 開発",
    contents: `・二段階認証サービスの SMS 送信 API を実装。
    ・日本では、AWS SES や AWS SNS は、キャリアによって SMS が弾かれてしまうため、日本の SMS 送信サービスを利用。
    ・SAM を利用して 素の nodejs と Lambda で API を作成
    ・SAM の CI/CD 環境を CodePipeline で作成。SAM 自体のビルドとデプロイをコンテナ上で実行する Dockerfile と BuildSpec を作成
    ・CodePipeline の環境は Cloudfromation で構成管理し作成`,
    thoughts: `Serverless Framework は過去に利用したことがあったが今回業務ではじめて SAM を採用しました。SAM を使ったコードの開発は Serverless Framework とあまり変わらず
    開発できました。Codepipeline 上で承認プロセスを入れた SAM のビルド/デプロイ環境の構築に苦戦しました。`,
    date: "2020年 12月 ~ 2021年 4月",
    link: "https://www.showcase-tv.com/pressrelease/202120531sms/",
    member: 1,
    assign: ["DB 設計", "開発", "CI/CD 構築", "API 設計", "API 開発", "テスト"],
    scale: "ゼロイチ開発",
    feat: true,
  },
  {
    skills: ["Amplify", "Iot Core", "NuxtJS"],
    title: "オンライン展示会用 デジタル展示会プラットフォーム開発",
    contents: `・Nuxt + Dynamo + Python を使ったオンライン展示会を実現する統合サービスを作成。
    ・ユーザはこのオンラインサービス上のブースから製品紹介を閲覧可能。
    ・興味のある製品をより詳しく知りたい場合、クライアントとユーザが直接やり取りできるオンラインチャットに接続可能。`,
    thoughts: `副業で触ってた Vue.js の知見を活かしてオンラインチャットサービスの画面を NuxtJS で作成。
    期間が短かったため双方向通信部分の技術は Amplify SDK の Iot Core 部分を利用しました。
    vuex をステート管理に利用しましたが、開発終盤につれてステートを追うのが大変になってきたためステートの管理方針が重要だなと気付かされた開発でした。
    `,
    date: "2020年 10月 ~ 2020年 11月",
    link: "https://www.cri-mw.co.jp/business/product/web/dxexpo/",
    member: 4,
    assign: ["コンポーネント設計", "フロント開発"],
    scale: "ゼロイチ開発",
    feat: true,
  },
  {
    skills: [
      "Vanilla js",
      "Lambda",
      "Laravel",
      "CodePipeline",
      "Cloudformation",
      "s3",
    ],
    title:
      "タグ挿入でデザインを変更できるサービスの管理画面と仕組み自体のリプレイス開発",
    contents: `・js タグを挿入するだけで、クライアントページのデザインを変更できるサービス。
    ・挿入する js タグのグローバル汚染の修正とデータ容量の圧縮、管理画面を Laravel でリプレイス。
    ・管理画面の EC2 デプロイパイプラインの実装
    ・js のビルドとアーティファクトを S3 へデプロイするパイプライン実装。`,
    thoughts: `管理画面は元のコードが古く、素のPHPで記述されていたため Laravel に移行しました。
    タグから展開される js のグローバル変数がグローバル汚染していたため、グローバル汚染しないように１つのオブジェクトにまとめる工夫を行いました。

    ${"　"}お客様のページに埋め込むので、影響範囲を最小限に抑えるために js のフレームワークは使わず Vanila js で全て記述し、容量を減らすため Webpack で圧縮しました。
    ${"　"}特に目新しい技術は使ってないものの、お客様のページに影響を与えずデザイン変更できるように工夫したり、CI/CD を導入し、なるべく運用コストが低くなるように工夫しました。`,
    date: "2020年 4月 ~ 2020年 9月",
    link: "",
    member: 2,
    assign: ["開発", "リプレイス調査", "CI/CD構築"],
    scale: "リプレイス",
    feat: false,
  },
  {
    skills: ["Virtual Private Gateway", "Lambda"],
    title: "新人研修 カリキュラム作成と講師",
    contents: `・新人研修の講師役を担当し、今年入社する 3名の研修を行う。
    ・座学では Web 開発の基礎から開発方法論、デザインパターンやオブジェクト指向についての講義を行う。
    ・実践研修では、Laravel を使った EC サイトの構築を指導し実践開発を行ってもらった。`,
    thoughts: `コロナの時期で、対面ではなくオンラインで研修することになったが、リモートを活かしてビデオ通話で個々人にサポートすることができた。
    実践研修中は全員通話状態にし、常に講師の自分に質問ができるような状態にしたおかげで新人のスキルアップの速度が早かった。`,
    date: "2020年 3月 ~ 2020年 4月",
    link: "",
    member: 1,
    assign: ["講師", "資料作成"],
    scale: "講師",
    feat: false,
  },
  {
    skills: ["Virtual Private Gateway", "Lambda"],
    title:
      "クライアント DC と弊社 AWS との Site to Site VPN 接続の設計・設定サポート",
    contents: `クライアントデータセンターと弊社 AWS とのVPCに対して サイト間 VPN 接続の設計とサポート`,
    thoughts: `ソリューションアーキテクトの資格でしか触れてなかったので、この案件で実際に触れたのが良かった。`,
    date: "2020年 3月 ~ 2020年 3月",
    link: "",
    member: 2,
    assign: ["インフラ"],
    scale: "サポート",
    feat: false,
  },
  {
    skills: ["Nginx PHP7 CloudFormation", "Ansible", "IaC"],
    title: "オンプレサーバを AWS へ移設",
    contents: `・オンプレサーバを EC2 へ移設
    ・構成の提案、設計、構築、設定、バックアッ プの導入、監視の導入、移設作業。
    ・IaCを導入し、サーバ構成管理には Ansible、EC２、ALB、RDSなどは CloudFormation で管理。`,
    thoughts: `予算の関係でコードの改修はせずレガシーな 構成のままAWSに移設するためオートスケールなしの固定台数の EC2 を数台負荷分散させた。`,
    date: "2019年 8月 ~ 2020年 3月",
    link: "",
    member: 2,
    assign: ["インフラ設計", "インフラ構築"],
    scale: "サーバ移設",
    feat: false,
  },
  {
    skills: [
      "Lambda",
      "Webpack",
      "Docker",
      "CloudFront",
      "Serverless Framework",
    ],
    title: "BtoBtoC 入力フォーム支援サービスプロジェクト",
    contents: `・S3、Lambda、CloudFront のサーバレスアーキテクチャで構築
    ・開発からテスト、リリースに CI/CD を導入しており、GitLab の マージリクエストから gitlab-ci で静的解析、ビルド、最終的に S3 へデプロイ後 CloudFront のキャッシュを削除する lambda を実行など一連のリリース作業の自動化を実現した。
    ・ローカル開発環境として Docker を 利用した javascript の開発環境を開発者にレクチャーした。`,
    thoughts: `マイクロサービスの一つだったので、なるべくサーバレスで運用コストを少なくできたプロジェクトだった。
    js + lambda を使ったサーバレスアプリケーションの CI/CD を一通り自身で実装できたのがいい経験になった。`,
    date: "2019年 4月 ~ 2020年 7月",
    link: "",
    member: 2,
    assign: ["サーバレス設計", "CI/CD構築"],
    scale: "ゼロイチ開発",
    feat: false,
  },
];

const Accordion = () => {
  const location = useLocation(); // アンカーから直リンクされた時にアコーディオンを開くために利用

  return (
    <>
      {resumeData.map((data, index) => (
        <MuiAccordion
          TransitionProps={{ unmountOnExit: false }}
          key={index}
          expanded={
            decodeURI(location.hash) === `#${data.title}` ? true : false
          }
          id={data.title}
          className={data.feat ? "feat" : ""}
        >
          <Link underline="none" href={`#${data.title}`}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ bgcolor: "primary.bgLight" }}
            >
              <Grid container direction="row" spacing={1}>
                <Grid container spacing={1} p={2}>
                  <Stack direction="row" spacing={1}>
                    <Grid container justifyContent="center" spacing={1}>
                      {data.skills.map((skill, index) => (
                        <Grid item key={index}>
                          <Chip label={skill} color="primary" size="small" />
                        </Grid>
                      ))}
                    </Grid>
                  </Stack>
                </Grid>

                <Grid>
                  <Typography variant="h6" pl={2} color="primary.fontColorDark">
                    {data.title}
                    {data.feat}
                  </Typography>
                </Grid>
              </Grid>
            </AccordionSummary>
          </Link>
          <AccordionDetails>
            <Grid container alignItems="center">
              <Grid item xs={9} p={1}>
                <Typography
                  color="primary.fontColorDark"
                  fontWeight="bold"
                  pt={1}
                >
                  内容：
                </Typography>
                <Typography color="primary.fontColorDark">
                  {data.contents}
                </Typography>
                <Typography
                  color="primary.fontColorDark"
                  fontWeight="bold"
                  pt={1}
                >
                  感想：
                </Typography>
                <Typography color="primary.fontColorDark" className="thoughts">
                  {data.thoughts}
                </Typography>
                <Typography
                  color="primary.fontColorDark"
                  fontWeight="bold"
                  pt={1}
                >
                  <Link
                    href={data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.link}
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={3} justifyContent="center" p={2}>
                <Stack direction="row" spacing={1}>
                  <Grid container justifyContent="center" spacing={1}>
                    {data.assign.map((assign, index) => (
                      <Grid item key={index}>
                        <Chip label={assign} color="primary" size="small" />
                      </Grid>
                    ))}
                  </Grid>
                </Stack>
                <Stack
                  direction="row"
                  spacing={1}
                  justifyContent="center"
                  p={2}
                >
                  <Chip label={data.scale} color="success" size="small" />
                </Stack>
              </Grid>
            </Grid>
          </AccordionDetails>
        </MuiAccordion>
      ))}
    </>
  );
};
export default Accordion;
