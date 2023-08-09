import React, { FC, useState } from "react";
import scss from "./Elements.module.scss";
import {
	FormControl,
	FormLabel,
	RadioGroup,
	FormControlLabel,
	Radio
} from "@mui/material";

const RadioButton: FC = () => {
	const [selectedValue, setSelectedValue] = useState(""); // Состояние для отслеживания выбранной опции

	const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedValue(event.target.value);
	};

	const showSelectedOption = selectedValue !== "";

	return (
		<>
			<div className={scss.RadioButton}>
				<FormControl>
					<FormLabel id="demo-row-radio-buttons-group-label">
						Do you like the site?
					</FormLabel>
					<RadioGroup
						row
						aria-labelledby="demo-row-radio-buttons-group-label"
						name="row-radio-buttons-group"
						value={selectedValue}
						onChange={handleRadioChange}
					>
						<FormControlLabel
							id="yesRadio"
							value="Yes"
							control={<Radio />}
							label="Yes"
						/>
						<FormControlLabel
							id="impressiveRadio"
							value="Impressive"
							control={<Radio />}
							label="Impressive"
						/>
						<FormControlLabel
							className={scss.disabled}
							id="noRadio"
							value="No"
							disabled
							control={<Radio />}
							label="No"
						/>
					</RadioGroup>
				</FormControl>

				{showSelectedOption && (
					<div className={scss.result}>
						<p>You have selected:</p>
						<span>{selectedValue}</span>
					</div>
				)}
			</div>
		</>
	);
};

export default RadioButton;
