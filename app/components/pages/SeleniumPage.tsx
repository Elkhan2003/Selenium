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
import ElementsTabs from "../tabs/elements/ElementsTabs";

interface AccordionItem {
	panel: string;
	header: string;
	content?: any;
}

const SeleniumPage: FC = () => {
	const [expanded, setExpanded] = useState<string | false>(false);

	const accordionData: AccordionItem[] = [
		{
			panel: "panel1",
			header: "Elements",
			content: <ElementsTabs />
		},
		{
			panel: "panel2",
			header: "Forms",
			content: "lorem ipsum dolor sit amet, consectetur adip"
		},
		{
			panel: "panel3",
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
				<p>Elements</p>
			</div>
			{accordionData.map((item) => (
				<Accordion
					className={scss.accordion}
					key={item.panel}
					expanded={expanded === item.panel}
					onChange={handleChange(item.panel)}
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls={`${item.panel}bh-content`}
						id={`${item.panel}bh-header`}
					>
						<Typography>{item.header}</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>{item.content}</Typography>
					</AccordionDetails>
				</Accordion>
			))}

			<div className={scss.show_tab}>
				{/* {tabs.map(
					(tab, index) =>
						activeTab === tab.label && (
							<div key={index + 1} className={scss.tabs__content}>
								{tab.page}
							</div>
						)
				)} */}
			</div>
		</div>
	);
};

export default SeleniumPage;
