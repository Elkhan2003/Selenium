import React, { FC, useState } from "react";
import scss from "./Interactions.module.scss";
import CheckIcon from "@mui/icons-material/Check";
import { Stack, ToggleButton } from "@mui/material";

const data = [
	"Cras justo odio",
	"Dapibus ac facilisis in",
	"Morbi leo risus",
	"Porta ac consectetur ac",
	"Vestibulum at eros"
];

const Selectable: FC = () => {
	const [selected, setSelected] = useState<Array<boolean>>(
		Array(data.length).fill(false)
	); // Указываем тип

	const handleToggle = (index: number) => {
		const newSelected = [...selected];
		newSelected[index] = !newSelected[index];
		setSelected(newSelected);
	};

	return (
		<>
			<div id="demo-tabpane-list" className={scss.Selectable}>
				<Stack spacing={2}>
					{data.map((item, index) => (
						<ToggleButton
							key={index + 1}
							value="check"
							color="success"
							selected={selected[index]}
							onChange={() => {
								handleToggle(index);
							}}
						>
							<div className={scss.button}>
								<CheckIcon /> <span>{item}</span>
							</div>
						</ToggleButton>
					))}
				</Stack>
			</div>
		</>
	);
};

export default Selectable;
