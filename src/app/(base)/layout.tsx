import React, { FC, ReactNode } from "react";
import LayoutPage from "@/src/components/layout/LayoutPage";

interface layoutType {
  children: ReactNode;
}

const Layout: FC<layoutType> = ({ children }) => {
  return (
    <>
      <LayoutPage>{children}</LayoutPage>
    </>
  );
};
export default Layout;
