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
import Test from "@/app/components/tabs/windows/pages/Test";
import TextBox from "@/app/components/tabs/elements/pages/TextBox";
import CheckBox from "@/app/components/tabs/elements/pages/CheckBox";
import RadioButton from "@/app/components/tabs/elements/pages/RadioButton";
import WebTables from "@/app/components/tabs/elements/pages/WebTables";
import Buttons from "@/app/components/tabs/elements/pages/Buttons";
import Links from "@/app/components/tabs/elements/pages/Links";
import BrokenLinksImages from "@/app/components/tabs/elements/pages/BrokenLinksImages";
import UploadAndDownload from "@/app/components/tabs/elements/pages/UploadAndDownload";
import DynamicProperties from "@/app/components/tabs/elements/pages/DynamicProperties";
import PracticeForm from "@/app/components/tabs/forms/pages/PracticeForm";
import BrowserWindows from "@/app/components/tabs/windows/pages/BrowserWindows";
import Alerts from "@/app/components/tabs/windows/pages/Alerts";
import Frames from "@/app/components/tabs/windows/pages/Frames";
import NestedFrames from "@/app/components/tabs/windows/pages/NestedFrames";
import ModalDialogs from "@/app/components/tabs/windows/pages/ModalDialogs";
import Accordian from "@/app/components/tabs/widgets/pages/Accordian";

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
	windows: Tab[];
	widgets: Tab[];
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
	],

	windows: [
		{
			id: 11,
			id_link: "browserWindows_page",
			icon: <HtmlIcon />,
			label: "Browser Windows",
			page: <BrowserWindows />
		},
		{
			id: 12,
			id_link: "alerts_page",
			icon: <HtmlIcon />,
			label: "Alerts",
			page: <Alerts />
		},
		{
			id: 13,
			id_link: "frames_page",
			icon: <HtmlIcon />,
			label: "Frames",
			page: <Frames />
		},
		{
			id: 14,
			id_link: "nestedFrames_page",
			icon: <HtmlIcon />,
			label: "Nested Frames",
			page: <NestedFrames />
		},
		{
			id: 15,
			id_link: "modalDialogs_page",
			icon: <HtmlIcon />,
			label: "Modal Dialogs",
			page: <ModalDialogs />
		}
	],

	widgets: [
		{
			id: 16,
			id_link: "accordian_page",
			icon: <HtmlIcon />,
			label: "Accordian",
			page: <Accordian />
		},
		{
			id: 9999,
			id_link: "test_page",
			icon: <HtmlIcon />,
			label: "Test",
			page: <Test />
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
	const storedActiveTab = process.browser
		? localStorage.getItem("activeTab")
		: null;
	const initialActiveTab = storedActiveTab
		? Number(storedActiveTab)
		: tabs.elements[0].id;

	const [activeTab, setActiveTab] = useState<number>(initialActiveTab);

	useEffect(() => {
		localStorage.setItem("activeTab", String(activeTab));
	}, [activeTab]);

	const value = useMemo(() => ({ activeTab, setActiveTab, tabs }), [activeTab]);

	return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
};
