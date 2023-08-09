import "./globals.scss";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { TabsProvider } from "./providers/TabsProvider";
import MaterialUiProvider from "./providers/MaterialUiProvider";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "WeDevX",
	description: "Selenium by WeDevX"
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={font.className}>
				<TabsProvider>
					<MaterialUiProvider>{children}</MaterialUiProvider>
				</TabsProvider>
			</body>
		</html>
	);
}
