import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
interface DefaultTemplateProps {
  title: string;
  children: React.ReactNode;
}

const Default: React.FC<DefaultTemplateProps> = ({ children, title }) => {
  return (
    <div className="template-default">
      <main>
        <Header />
        <h1>{title} </h1>
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default Default;
