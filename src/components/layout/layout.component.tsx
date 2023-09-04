import React from "react";
import style from "./layout.module.scss";
import { MainNavigation } from "../layout";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout(props: LayoutProps) {
  return (
    <>
      <MainNavigation />
      <main className={style.main}>{props.children}</main>
    </>
  );
}

export default Layout;
