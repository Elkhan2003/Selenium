import React, { FC, useState } from "react";
import scss from "./Forms.module.scss";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface selectType {
	state: string;
	city: string;
}

interface optionType {
	value: string;
	label: string;
	words: string[];
}

const options: optionType[] = [
	{ value: "ncr", label: "NCR", words: ["Delhi", "Gurgaon", "Noida"] },
	{
		value: "uttar_pradesh",
		label: "Uttar Pradesh",
		words: ["Agra", "Lucknow", "Merrut"]
	},
	{ value: "haryana", label: "Haryana", words: ["Karnal", "Panipat"] },
	{ value: "rajasthan", label: "Rajasthan", words: ["Jaipur", "Jaiselmer"] }
];

const Test: FC = () => {
	const [select, setSelect] = useState<selectType>({
		state: "",
		city: ""
	});

	const [cityOptions, setCityOptions] = useState<string[]>([]);

	const handleChange = (event: SelectChangeEvent) => {
		const { name, value } = event.target;
		const selectedOption = options.find((option) => option.value === value);

		if (selectedOption) {
			setSelect({
				...select,
				[name]: value
			});
			setCityOptions(selectedOption.words);
		}
	};

	const handleCityChange = (event: SelectChangeEvent) => {
		setSelect({
			...select,
			city: event.target.value as string
		});
	};

	return (
		<div className={scss.select}>
			<FormControl fullWidth>
				<InputLabel id="select_1">Select State</InputLabel>
				<Select
					labelId="select_1"
					id="select_1"
					name="state"
					value={select.state}
					label="Select State"
					onChange={handleChange}
				>
					{options.map((option) => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<FormControl fullWidth disabled={!select.state}>
				<InputLabel id="select_2">Select City</InputLabel>
				<Select
					labelId="select_2"
					id="select_2"
					name="city"
					value={select.city}
					label="Select City"
					onChange={handleCityChange}
				>
					{cityOptions.map((word) => (
						<MenuItem key={word} value={word}>
							{word}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
};

export default Test;
