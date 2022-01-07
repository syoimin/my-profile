import Accordion from "../components/Accordion";
import React from "react";
import TemplateDefault from "../templates/Default";
import { Typography } from "@mui/material";

const description = `${"　"}人手不足で １ ~ ３名での開発が多く、ほとんどすべての開発で、インフラ、フロント、バックエンドのコード設計・基盤を一人で作る場合が多いです。
したがって、ここで挙げられているスキルは少しさわったレベルではなくほぼ自力で 1 から業務レベルまで落としこめる程度にマスターしています。
${"　"}特に強みは、IAM、CI/CD、IaaC、コード設計、開発環境、コンテナインフラ環境、EC2インフラ構築、各種 AWS ネットワーク周です。 
弱いところは、今デファクトスタンダードな Kubernetes の経験 と クリーンアーキテクチャの経験がないことです。
DB 周りでは、 NoSQL の経験が少ないので NoSQL DB サービスの選定や設計などの経験がしてみたいです。
RDBMS では、小規模・中規模案件の SQL チューニングやテーブル設計の工夫の経験はあるので、大規模な DB チューニングも経験してみたいです。`;

const Resume = () => {
  return (
    <TemplateDefault className="resume" bgColor="primary.bgLight2">
      <Typography variant="h4" color="primary.contrastText2" p={3}>
        経歴・履歴（最新順）
      </Typography>
      <Typography variant="body2" p={3}>
        {description}
      </Typography>
      <Typography variant="body1" color="red">
        ↓ 赤ボーダーは技術レベルの上がった注目案件
      </Typography>
      <Accordion />
    </TemplateDefault>
  );
};

export default Resume;
