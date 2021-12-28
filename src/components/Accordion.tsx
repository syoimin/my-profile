import * as React from "react";
import MuiAccordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import AssignIcon from "./Icons/AssignIcon";

const resumeData = [
  {
    skills: ["React", "Typescript", "AWS Amplify", "Cognito"],
    title: "マルチテナントの会員登録ページの認証システムの設計・開発",
    contents: `・ノーコードで会員登録ページを作成できるサービスのマルチテナント認証方式の設計・開発を担当。
    ・認証サービスとして Cognito を採用し、マルチテナントに対応するためマルチユーザプール型を採用。
    ・React + Amplify を使って Amplify UI コンポーネントを使わず独自カスタマイズで認証画面を作成。
    ・Dynamo へのアクセスコントロール制御として IAM の Sub を用いた認証コントロールを設計。`,
    thoughts: `マルチテナントを Cognito で実装するパターンは複数あるが、今回はビジネス要件を確認し、クライアントのセキュリティ要件に満たすためにユーザプールを分ける形で実装しました。ユーザプールを分ける場合、各クライアントごとにユーザプールを特定する必要があるため、実装を工夫しました。`,
    date: "2021年 12月 ~ 現在",
    member: 3,
    assign: ["認証設計", "フロント開発"],
    scale: "ゼロイチ開発",
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
    過去に経験したフレームワークの知見を活かし、小・中規模で開発速度がある程度早く、スケールしてもコードが煩雑にならないようなデザインパターンを採用しました。
    社内初の golang の業務だったので、作成したコード設計のテンプレートを社内のナレッジとして共有しました。`,
    date: "2021年 5月 ~ 2021年 11月",
    member: 3,
    assign: [
      "DB 設計",
      "API 設計",
      "API 開発",
      "ユニットテスト",
      "コードレビュー",
    ],
    scale: "ゼロイチ開発",
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
    title: "SMS 二段階認証 サービス 管理画面作成",
    contents: `・SMS 二段階認証サービスのユーザ管理と SMS 送信 API の管理システムを設計・開発。
    ・フレームワークに Laravel、認証サービスに Cognito、本番環境は EC2 Autoscaling。
    ・デザインパターンに、サービス・レポジトリパターンを導入
    ・CI/CD を CodePipeline で構築
    ・Athena、Kinesis Data Firehose を使った CloudWatch のログ集計バッチ`,

    thoughts: `開発期間が短かったので慣れているフレームワークを採用しました。Laravel のバージョンアップに伴い
    Bootstrap を使わず Tailwind CSS で React のようなコンポーネント指向で HTML のパーツを作成しました。
    チームメンバーにコード設計の意図の意思疎通があまりできず、最初は意図しないコンポーネントの分け方でコミットするメンバーもいましたがコードレビューすることで徐々にチームメンバーと認識が揃うようになりました。`,
    date: "2020年 11月 ~ 2021年 4月",
    member: 3,
    assign: ["DB 設計", "開発", "CI/CD 構築", "コードレビュー"],
    scale: "ゼロイチ開発",
  },
  {
    skills: ["NodeJs", "Lambda"],
    title: "SMS 二段階認証サービス SMS 送信 API 作成",
    contents: `・各マイクロサービスを管理するプラットフォームの管理画面の API 設計・開発を担当。
    ・認証サービスに Cognito を、認証方式に JWT を採用。
    ・API のフレームワークは Gin フレームワークを採用し、コード設計に３層アーキテクチャ、MVC モデルを採用し、デザインパターンにサービス・レポジトリパターンと依存注入を独自実装。`,
    thoughts: `初めて golang を業務で利用した開発でした。Gin フレームワークは、ルーティングとミドルウェアのみしか提供されていないのでその他必要なコード設計はすべて独自で設計しました。
    過去に経験したフレームワークの知見を活かし、小・中規模で開発速度がある程度早く、スケールしてもコードが煩雑にならないようなデザインパターンを採用しました。
    社内で初 golang の業務だったので、作成したコード設計のテンプレートを社内のナレッジとして共有しました。`,
    date: "2020年 11月 ~ 2021年 4月",
    member: 3,
    assign: [],
    scale: "ゼロイチ開発",
  },
];

const Accordion = () => {
  return (
    <>
      {resumeData.map((data, index) => (
        <MuiAccordion key={index}>
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
                </Typography>
              </Grid>
            </Grid>
          </AccordionSummary>
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
                <Typography color="primary.fontColorDark">
                  {data.thoughts}
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
