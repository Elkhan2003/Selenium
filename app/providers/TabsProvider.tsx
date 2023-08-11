"use client";
import React, {
	FC,
	useState,
	createContext,
	ReactNode,
	useMemo,
	useEffect
} from "react";
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
import PracticeForm from "../components/tabs/forms/pages/PracticeForm";

interface Tab {
	id: number;
	id_link: string;
	icon?: React.ReactElement;
	label: string;
	page?: React.ReactElement;
}

interface TabsProps {
	elements: Tab[];
	forms: Tab[];
}

const tabs: TabsProps = {
	elements: [
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
	],

	forms: [
		{
			id: 10,
			id_link: "practiceForm_page",
			icon: <HtmlIcon />,
			label: "Practice Form",
			page: <PracticeForm />
		}
	]
};

interface TabsProviderProps {
	children: ReactNode;
}

interface TabsContextType {
	activeTab: number;
	setActiveTab: (value: number) => void;
	tabs: TabsProps;
}

export const TabsContext = createContext<TabsContextType>({
	activeTab: tabs.elements[0].id,
	setActiveTab: () => {},
	tabs: tabs
});

export const TabsProvider: FC<TabsProviderProps> = ({ children }) => {
	const storedActiveTab = Number(localStorage.getItem("activeTab"));

	const [activeTab, setActiveTab] = useState<number>(
		storedActiveTab || tabs.elements[0].id
	);

	useEffect(() => {
		if (typeof window !== "undefined") {
			localStorage.setItem("activeTab", String(activeTab));
		}
	}, [activeTab]);

	const value = useMemo(() => ({ activeTab, setActiveTab, tabs }), [activeTab]);

	return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
};
