"use client";
import React, { FC, useState, createContext, ReactNode, useMemo } from "react";
import { HtmlIcon } from "@/app/components/svgs";
import TextBox from "@/app/components/tabs/elements/pages/TextBox";
import CheckBox from "@/app/components/tabs/elements/pages/CheckBox";
import RadioButton from "@/app/components/tabs/elements/pages/RadioButton";

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
