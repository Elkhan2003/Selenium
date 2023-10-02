"use client";
import React, { FC, ReactNode } from "react";
import scss from "@/src/components/layout/Layout.module.scss";
import Header from "@/src/components/layout/header/Header";
import Footer from "@/src/components/layout/footer/Footer";

interface layoutType {
  children: ReactNode;
}

const LayoutPage: FC<layoutType> = ({ children }) => {
  return (
    <>
      <div className={scss.layout}>
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};
export default LayoutPage;