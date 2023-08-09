"use client";
import React, { FC, useState } from "react";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import scss from "./Style.module.scss";
import { useTabs } from "@/app/hooks/useTabs";
import { Element } from "../tabs/elements";
import { BurgerIcon } from "../svgs";

interface AccordionItem {
	panel: string;
	icon?: any;
	header: string;
	content?: any;
}

const SeleniumPage: FC = () => {
	const [expanded, setExpanded] = useState<string | false>("panel1");
	const { activeTab, tabs } = useTabs();

	const accordionData: AccordionItem[] = [
		{
			panel: "panel1",
			icon: <BurgerIcon />,
			header: "Elements",
			content: <Element />
		},
		{
			panel: "panel2",
			icon: <BurgerIcon />,
			header: "Forms",
			content: "lorem ipsum dolor sit amet, consectetur adip"
		},
		{
			panel: "panel3",
			icon: <BurgerIcon />,
			header: "Alerts, Frame & Windows",
			content: "Lorem ipsum dolor sit amet, consectetur adip"
		}
	];

	const handleChange =
		(panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
			setExpanded(isExpanded ? panel : false);
		};

	return (
		<div className={scss.elements}>
			<div className={scss.select}>
				{tabs.map(
					(tab, index) =>
						activeTab === tab.id && (
							<p key={index + 1} className={scss.tab__content}>
								{tab.label}
							</p>
						)
				)}
			</div>

			<div className={scss.content}>
				<div className={scss.accordion}>
					{accordionData.map((item) => (
						<Accordion
							key={item.panel}
							expanded={expanded === item.panel}
							onChange={handleChange(item.panel)}
						>
							<AccordionSummary
								className={scss.AccordionSummary}
								expandIcon={<ExpandMoreIcon />}
								aria-controls={`${item.panel}bh-content`}
								id={`${item.panel}bh-header`}
							>
								<span>{item.icon}</span>
								<Typography>{item.header}</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>{item.content}</Typography>
							</AccordionDetails>
						</Accordion>
					))}
				</div>

				{tabs.map(
					(tab, index) =>
						activeTab === tab.id && (
							<div key={index + 1} className={scss.tab__content}>
								{tab.page}
							</div>
						)
				)}
			</div>
		</div>
	);
};

export default SeleniumPage;
