import React, { FC, useState } from "react";
import { Autocomplete, Stack, TextField } from "@mui/material";

interface selectType {
	state: string;
	city: string;
}

interface optionType {
	value: string;
	words: string[];
}

const options: optionType[] = [
	{ value: "California", words: ["Los Angeles", "San Francisco", "San Diego"] },
	{ value: "New York", words: ["New York City", "Buffalo", "Rochester"] },
	{ value: "Texas", words: ["Houston", "Dallas", "Austin"] },
	{ value: "Florida", words: ["Miami", "Orlando", "Tampa"] }
];

const Test: FC = () => {
	const [select, setSelect] = useState<selectType>({
		state: "",
		city: ""
	});
	const [cityOptions, setCityOptions] = useState<string[]>([]);

	const handleStateChange = (
		event: React.ChangeEvent<{}>,
		newValue: optionType | null
	) => {
		if (newValue) {
			setCityOptions(
				options.find((option) => option.value === newValue.value)?.words || []
			);
			setSelect((prevState) => ({
				...prevState,
				state: newValue.value,
				city: ""
			}));
		} else {
			setCityOptions([]);
			setSelect((prevState) => ({ ...prevState, state: "", city: "" }));
		}
	};

	const handleCityChange = (
		event: React.ChangeEvent<{}>,
		newValue: string | null
	) => {
		if (newValue) {
			setSelect((prevState) => ({ ...prevState, city: newValue }));
		} else {
			setSelect((prevState) => ({ ...prevState, city: "" }));
		}
	};

	return (
		<>
			<div>
				<Stack spacing={2} sx={{ width: 500 }}>
					<Autocomplete
						id="select_1"
						size="small"
						options={options}
						getOptionLabel={(option) => option.value}
						onChange={handleStateChange}
						renderInput={(params) => (
							<TextField {...params} label="Select State" />
						)}
					/>
					<Autocomplete
						disabled={!select.state}
						id="select_2"
						size="small"
						options={cityOptions}
						getOptionLabel={(option) => option}
						onChange={handleCityChange}
						renderInput={(params) => (
							<TextField {...params} label="Select City" />
						)}
					/>
				</Stack>
			</div>
		</>
	);
};

export default Test;
