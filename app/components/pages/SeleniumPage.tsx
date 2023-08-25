"use client";
import React, { FC, useEffect, useState } from "react";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import scss from "./Style.module.scss";
import { useTabs } from "@/app/hooks/useTabs";
import {
	BookIcon,
	BurgerIcon,
	FormIcon,
	InteractionsIcon,
	WidgetsIcon,
	WindowsIcon
} from "../svgs";
import { Elements } from "../tabs/elements";
import { Forms } from "../tabs/forms";
import { Windows } from "../tabs/windows";
import { Widgets } from "../tabs/widgets";
import { Interactions } from "../tabs/interactions";

interface AccordionItem {
	panel: string;
	icon?: any;
	header: string;
	content?: any;
}

const SeleniumPage: FC = () => {
	const storedExpanded = localStorage.getItem("expanded");
	const [expanded, setExpanded] = useState<string | false>(
		storedExpanded || "panel1"
	);
	const { activeTab, tabs } = useTabs();

	useEffect(() => {
		localStorage.setItem("expanded", String(expanded));
	}, [expanded]);

	const accordionData: AccordionItem[] = [
		{
			panel: "panel1",
			icon: <BurgerIcon />,
			header: "Elements",
			content: <Elements />
		},
		{
			panel: "panel2",
			icon: <FormIcon />,
			header: "Forms",
			content: <Forms />
		},
		{
			panel: "panel3",
			icon: <WindowsIcon />,
			header: "Alerts, Frame & Windows",
			content: <Windows />
		},
		{
			panel: "panel4",
			icon: <WidgetsIcon />,
			header: "Widgets",
			content: <Widgets />
		},
		{
			panel: "panel5",
			icon: <InteractionsIcon />,
			header: "Interactions",
			content: <Interactions />
		},
		{
			panel: "panel6",
			icon: <BookIcon />,
			header: "Book Store Application",
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
				{tabs.elements.map(
					(tab, index) =>
						activeTab === tab.id && (
							<p key={index + 1} className={scss.tab__content}>
								{tab.label}
							</p>
						)
				)}

				{tabs.forms.map(
					(tab, index) =>
						activeTab === tab.id && (
							<p key={index + 1} className={scss.tab__content}>
								{tab.label}
							</p>
						)
				)}

				{tabs.windows.map(
					(tab, index) =>
						activeTab === tab.id && (
							<p key={index + 1} className={scss.tab__content}>
								{tab.label}
							</p>
						)
				)}

				{tabs.widgets.map(
					(tab, index) =>
						activeTab === tab.id && (
							<p key={index + 1} className={scss.tab__content}>
								{tab.label}
							</p>
						)
				)}

				{tabs.interactions.map(
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

				{tabs.elements.map(
					(tab, index) =>
						activeTab === tab.id && (
							<div key={index + 1} className={scss.tab__content}>
								{tab.page}
							</div>
						)
				)}

				{tabs.forms.map(
					(tab, index) =>
						activeTab === tab.id && (
							<div key={index + 1} className={scss.tab__content}>
								{tab.page}
							</div>
						)
				)}

				{tabs.windows.map(
					(tab, index) =>
						activeTab === tab.id && (
							<div key={index + 1} className={scss.tab__content}>
								{tab.page}
							</div>
						)
				)}

				{tabs.widgets.map(
					(tab, index) =>
						activeTab === tab.id && (
							<div key={index + 1} className={scss.tab__content}>
								{tab.page}
							</div>
						)
				)}

				{tabs.interactions.map(
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
