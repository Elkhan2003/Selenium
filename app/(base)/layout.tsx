"use client";
import React, { FC, ReactNode } from "react";
import scss from "./layout.module.scss";
import Header from "@/app/components/layout/header/Header";
import Footer from "@/app/components/layout/footer/Footer";

interface layoutType {
	children: ReactNode;
}

const Layout: FC<layoutType> = ({ children }) => {
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
export default Layout;
