"use client";
import React, { FC, useState, createContext, ReactNode, useMemo } from "react";
import { HtmlIcon } from "@/app/components/svgs";
import TextBox from "@/app/components/tabs/elements/pages/TextBox";
import CheckBox from "@/app/components/tabs/elements/pages/CheckBox";
import RadioButton from "@/app/components/tabs/elements/pages/RadioButton";
import WebTables from "@/app/components/tabs/elements/pages/WebTables";
import Buttons from "@/app/components/tabs/elements/pages/Buttons";
import Links from "@/app/components/tabs/elements/pages/Links";
import BrokenLinksImages from "@/app/components/tabs/elements/pages/BrokenLinksImages";
import UploadAndDownload from "@/app/components/tabs/elements/pages/UploadAndDownload";
import DynamicProperties from "@/app/components/tabs/elements/pages/DynamicProperties";

interface TabsProps {
	id: number;
	id_link: string;
	icon?: any;
	label: string;
	page?: any;
}

const tabs: TabsProps[] = [
	{
		id: 1,
		id_link: "textBox_page",
		icon: <HtmlIcon />,
		label: "Text Box",
		page: <TextBox />
	},
	{
		id: 2,
		id_link: "checkBox_page",
		icon: <HtmlIcon />,
		label: "Check Box",
		page: <CheckBox />
	},
	{
		id: 3,
		id_link: "radioButton_page",
		icon: <HtmlIcon />,
		label: "Radio Button",
		page: <RadioButton />
	},
	{
		id: 4,
		id_link: "webTables_page",
		icon: <HtmlIcon />,
		label: "Web Tables",
		page: <WebTables />
	},
	{
		id: 5,
		id_link: "buttons_page",
		icon: <HtmlIcon />,
		label: "Buttons",
		page: <Buttons />
	},
	{
		id: 6,
		id_link: "links_page",
		icon: <HtmlIcon />,
		label: "Links",
		page: <Links />
	},
	{
		id: 7,
		id_link: "broken_page",
		icon: <HtmlIcon />,
		label: "Broken Links - Images",
		page: <BrokenLinksImages />
	},
	{
		id: 8,
		id_link: "uploadDownload_page",
		icon: <HtmlIcon />,
		label: "Upload and Download",
		page: <UploadAndDownload />
	},
	{
		id: 9,
		id_link: "dynamicProperties_page",
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
