import React from "react";
import Header from "../components/Header";

interface DefaultTemplateProps {
  title: string;
  children: React.ReactNode;
}

const Default: React.FC<DefaultTemplateProps> = ({ children, title }) => {
  return (
    <div className="template-default">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Default;
