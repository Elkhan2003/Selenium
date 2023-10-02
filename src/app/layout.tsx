import "./globals.scss";
import type { Metadata } from "next";
import RootLayoutClient from "@/src/app/layout.c";
import { Montserrat } from "next/font/google";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "WeDevX",
	description: "Selenium by WeDevX",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={font.className}>
				<RootLayoutClient>{children}</RootLayoutClient>
			</body>
		</html>
	);
}
