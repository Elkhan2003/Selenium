"use client";
import React, { FC, ReactNode } from "react";
import MaterialUiProvider from "@/src/providers/MaterialUiProvider";
import { TabsProvider } from "@/src/providers/TabsProvider";

interface RootLayoutClientType {
	children: ReactNode;
}

const RootLayoutClient: FC<RootLayoutClientType> = ({ children }) => {
	return (
		<>
			<MaterialUiProvider>
				<TabsProvider>{children}</TabsProvider>
			</MaterialUiProvider>
		</>
	);
};

export default RootLayoutClient;
