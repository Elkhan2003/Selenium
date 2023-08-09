"use client";
import React, { FC, useState, createContext, ReactNode, useMemo } from "react";
import { HtmlIcon } from "@/app/components/svgs";
import TextBox from "@/app/components/tabs/elements/pages/TextBox";
import CheckBox from "@/app/components/tabs/elements/pages/CheckBox";
import RadioButton from "@/app/components/tabs/elements/pages/RadioButton";
import WebTables from "../components/tabs/elements/pages/WebTables";
import Buttons from "../components/tabs/elements/pages/Buttons";
import Links from "../components/tabs/elements/pages/Links";
import BrokenLinks_Images from "../components/tabs/elements/pages/BrokenLinks_Images";
import DynamicProperties from "../components/tabs/elements/pages/DynamicProperties";

interface TabsProps {
	id: number;
	icon?: any;
	label: string;
	page?: any;
}

const tabs: TabsProps[] = [
	{
		id: 1,
		icon: <HtmlIcon />,
		label: "Text Box",
		page: <TextBox />
	},
	{
		id: 2,
		icon: <HtmlIcon />,
		label: "Check Box",
		page: <CheckBox />
	},
	{
		id: 3,
		icon: <HtmlIcon />,
		label: "Radio Button",
		page: <RadioButton />
	},
	{
		id: 4,
		icon: <HtmlIcon />,
		label: "Web Tables",
		page: <WebTables />
	},
	{
		id: 5,
		icon: <HtmlIcon />,
		label: "Buttons",
		page: <Buttons />
	},
	{
		id: 6,
		icon: <HtmlIcon />,
		label: "Links",
		page: <Links />
	},
	{
		id: 7,
		icon: <HtmlIcon />,
		label: "Broken Links - Images",
		page: <BrokenLinks_Images />
	},
	{
		id: 8,
		icon: <HtmlIcon />,
		label: "Upload and Download",
		page: <WebTables />
	},
	{
		id: 9,
		icon: <HtmlIcon />,
		label: "Dynamic Properties",
		page: <DynamicProperties />
	}
];

interface TabsProviderProps {
	children: ReactNode;
}

interface TabsContextType {
	activeTab: number;
	setActiveTab: (value: number) => void;
	tabs: TabsProps[];
}

export const TabsContext = createContext<TabsContextType>({
	activeTab: tabs[0].id,
	setActiveTab: () => {},
	tabs: tabs
});

export const TabsProvider: FC<TabsProviderProps> = ({ children }) => {
	const [activeTab, setActiveTab] = useState<number>(tabs[0].id);

	const value = useMemo(() => ({ activeTab, setActiveTab, tabs }), [activeTab]);

	return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
};
