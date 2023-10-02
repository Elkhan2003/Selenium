import React, { FC } from "react";
import { FormControlLabel, Checkbox, Box } from "@mui/material";

const CheckBox: FC = () => {
	const [checked, setChecked] = React.useState([true, false]);

	const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked([event.target.checked, event.target.checked]);
	};

	const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked([event.target.checked, checked[1]]);
	};

	const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked([checked[0], event.target.checked]);
	};

	const children = (
		<Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
			<FormControlLabel
				id="child1"
				label="Child 1"
				control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
			/>
			<FormControlLabel
				id="child2"
				label="Child 2"
				control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
			/>
		</Box>
	);

	return (
		<>
			<FormControlLabel
				label="Parent"
				control={
					<Checkbox
						id="checked"
						checked={checked[0] && checked[1]}
						indeterminate={checked[0] !== checked[1]}
						onChange={handleChange1}
					/>
				}
			/>
			{children}
		</>
	);
};

export default CheckBox;
