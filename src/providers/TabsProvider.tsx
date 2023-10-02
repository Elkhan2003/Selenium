"use client";
import React, {
	FC,
	useState,
	createContext,
	ReactNode,
	useMemo,
	useEffect,
} from "react";
import { HtmlIcon } from "../svgs";
import Test from "@/src/components/tabs/interactions/pages/Test";
import TextBox from "@/src/components/tabs/elements/pages/TextBox";
import CheckBox from "@/src/components/tabs/elements/pages/CheckBox";
import RadioButton from "@/src/components/tabs/elements/pages/RadioButton";
import WebTables from "@/src/components/tabs/elements/pages/WebTables";
import Buttons from "@/src/components/tabs/elements/pages/Buttons";
import Links from "@/src/components/tabs/elements/pages/Links";
import BrokenLinksImages from "@/src/components/tabs/elements/pages/BrokenLinksImages";
import UploadAndDownload from "@/src/components/tabs/elements/pages/UploadAndDownload";
import DynamicProperties from "@/src/components/tabs/elements/pages/DynamicProperties";
import PracticeForm from "@/src/components/tabs/forms/pages/PracticeForm";
import BrowserWindows from "@/src/components/tabs/windows/pages/BrowserWindows";
import Alerts from "@/src/components/tabs/windows/pages/Alerts";
import Iframes from "@/src/components/tabs/windows/pages/Iframes";
import NestedFrames from "@/src/components/tabs/windows/pages/NestedFrames";
import ModalDialogs from "@/src/components/tabs/windows/pages/ModalDialogs";
import Accordian from "@/src/components/tabs/widgets/pages/Accordian";
import AutoComplete from "@/src/components/tabs/widgets/pages/AutoComplete";
import DatePicker from "@/src/components/tabs/widgets/pages/DatePicker";
import Slider from "@/src/components/tabs/widgets/pages/Slider";
import ProgressBar from "@/src/components/tabs/widgets/pages/ProgressBar";
import Tabs from "@/src/components/tabs/widgets/pages/Tabs";
import ToolTips from "@/src/components/tabs/widgets/pages/ToolTips";
import Menu from "@/src/components/tabs/widgets/pages/Menu";
import SelectMenu from "@/src/components/tabs/widgets/pages/SelectMenu";
import Sortable from "@/src/components/tabs/interactions/pages/Sortable";
import Selectable from "@/src/components/tabs/interactions/pages/Selectable";

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
	interactions: Tab[];
}

const tabs: TabsProps = {
	elements: [
		{
			id: 1,
			id_link: "textBox_page",
			icon: <HtmlIcon />,
			label: "Text Box",
			page: <TextBox />,
		},
		{
			id: 2,
			id_link: "checkBox_page",
			icon: <HtmlIcon />,
			label: "Check Box",
			page: <CheckBox />,
		},
		{
			id: 3,
			id_link: "radioButton_page",
			icon: <HtmlIcon />,
			label: "Radio Button",
			page: <RadioButton />,
		},
		{
			id: 4,
			id_link: "webTables_page",
			icon: <HtmlIcon />,
			label: "Web Tables",
			page: <WebTables />,
		},
		{
			id: 5,
			id_link: "buttons_page",
			icon: <HtmlIcon />,
			label: "Buttons",
			page: <Buttons />,
		},
		{
			id: 6,
			id_link: "links_page",
			icon: <HtmlIcon />,
			label: "Links",
			page: <Links />,
		},
		{
			id: 7,
			id_link: "broken_page",
			icon: <HtmlIcon />,
			label: "Broken Links - Images",
			page: <BrokenLinksImages />,
		},
		{
			id: 8,
			id_link: "uploadDownload_page",
			icon: <HtmlIcon />,
			label: "Upload and Download",
			page: <UploadAndDownload />,
		},
		{
			id: 9,
			id_link: "dynamicProperties_page",
			icon: <HtmlIcon />,
			label: "Dynamic Properties",
			page: <DynamicProperties />,
		},
	],

	forms: [
		{
			id: 10,
			id_link: "practiceForm_page",
			icon: <HtmlIcon />,
			label: "Practice Form",
			page: <PracticeForm />,
		},
	],

	windows: [
		{
			id: 11,
			id_link: "browserWindows_page",
			icon: <HtmlIcon />,
			label: "Browser Windows",
			page: <BrowserWindows />,
		},
		{
			id: 12,
			id_link: "alerts_page",
			icon: <HtmlIcon />,
			label: "Alerts",
			page: <Alerts />,
		},
		{
			id: 13,
			id_link: "iframes_page",
			icon: <HtmlIcon />,
			label: "Iframes",
			page: <Iframes />,
		},
		{
			id: 14,
			id_link: "nestedFrames_page",
			icon: <HtmlIcon />,
			label: "Nested Iframes",
			page: <NestedFrames />,
		},
		{
			id: 15,
			id_link: "modalDialogs_page",
			icon: <HtmlIcon />,
			label: "Modal Dialogs",
			page: <ModalDialogs />,
		},
	],

	widgets: [
		{
			id: 16,
			id_link: "accordian_page",
			icon: <HtmlIcon />,
			label: "Accordian",
			page: <Accordian />,
		},
		{
			id: 17,
			id_link: "autoComplete_page",
			icon: <HtmlIcon />,
			label: "Auto Complete",
			page: <AutoComplete />,
		},
		{
			id: 18,
			id_link: "datePicker_page",
			icon: <HtmlIcon />,
			label: "Date Picker",
			page: <DatePicker />,
		},
		{
			id: 19,
			id_link: "slider_page",
			icon: <HtmlIcon />,
			label: "Slider",
			page: <Slider />,
		},
		{
			id: 20,
			id_link: "progressBar_page",
			icon: <HtmlIcon />,
			label: "Progress Bar",
			page: <ProgressBar />,
		},
		{
			id: 21,
			id_link: "tabs_page",
			icon: <HtmlIcon />,
			label: "Tabs",
			page: <Tabs />,
		},
		{
			id: 22,
			id_link: "toolTips_page",
			icon: <HtmlIcon />,
			label: "Tool Tips",
			page: <ToolTips />,
		},
		{
			id: 23,
			id_link: "menu_page",
			icon: <HtmlIcon />,
			label: "Menu",
			page: <Menu />,
		},
		{
			id: 24,
			id_link: "selectMenu_page",
			icon: <HtmlIcon />,
			label: "SelectMenu",
			page: <SelectMenu />,
		},
	],

	interactions: [
		{
			id: 25,
			id_link: "sortable_page",
			icon: <HtmlIcon />,
			label: "Sortable",
			page: <Sortable />,
		},
		{
			id: 26,
			id_link: "selectable_page",
			icon: <HtmlIcon />,
			label: "Selectable",
			page: <Selectable />,
		},
		{
			id: 9999,
			id_link: "test_page",
			icon: <HtmlIcon />,
			label: "Test",
			page: <Test />,
		},
	],
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
	tabs: tabs,
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
