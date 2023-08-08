import React, { FC, useState } from "react";
import { motion } from "framer-motion";
import scss from "../Tabs.module.scss";
import { HtmlIcon } from "../../svgs";
import TextBox from "./pages/TextBox";
import CheckBox from "./pages/CheckBox";
import RadioButton from "./pages/RadioButton";

interface tabsProps {
	icon: any;
	label: any;
	page?: any;
}

const tabs: tabsProps[] = [
	{
		icon: <HtmlIcon />,
		label: "Text Box",
		page: <TextBox />
	},
	{
		icon: <HtmlIcon />,
		label: "Check Box",
		page: <CheckBox />
	},
	{
		icon: <HtmlIcon />,
		label: "Radio Button",
		page: <RadioButton />
	}
];

const ElementsTabs: FC = () => {
	const [activeTab, setActiveTab] = useState<number>(tabs[0].label);

	return (
		<>
			<div className={scss.tabs__container}>
				<div className={scss.content}>
					<div className={scss.tabs}>
						<div className={scss.buttons}>
							{tabs.map((tab, index) => (
								<button
									key={index + 1}
									onClick={() => {
										setActiveTab(tab.label);
									}}
									className={
										activeTab === tab.label
											? `${scss.button} ${scss.active}`
											: `${scss.button}`
									}
								>
									{activeTab === tab.label && (
										<motion.div
											layoutId="active-pill"
											className={scss.active}
											style={{
												borderRadius: 12
											}}
											transition={{ type: "spring", duration: 0.6 }}
										/>
									)}
									<span className={scss.icon}>{tab.icon}</span>
									<span className={scss.label}>{tab.label}</span>
								</button>
							))}
						</div>
						{tabs.map(
							(tab, index) =>
								activeTab === tab.label && (
									<div key={index + 1} className={scss.tabs__content}>
										{tab.page}
									</div>
								)
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default ElementsTabs;
