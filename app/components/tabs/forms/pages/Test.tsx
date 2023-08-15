import { TextField } from "@mui/material";
import React, { FC, useState } from "react";

const Test: FC = () => {
	const today = new Date();
	const year = today.getFullYear();
	const month = String(today.getMonth() + 1).padStart(2, "0");
	const day = String(today.getDate()).padStart(2, "0");
	const currentDate = `${year}-${month}-${day}`;

	const [dateOfBirth, setDateOfBirth] = useState(currentDate); // Начальная дата

	const handleDateChange = (event: any) => {
		setDateOfBirth(event.target.value);
	};

	return (
		<>
			<div>
				<TextField
					variant="outlined"
					size="small"
					type="date"
					id="dateOfBirthInput"
					name="dateOfBirth"
					label="Date Of Birth"
					defaultValue={dateOfBirth}
					onChange={handleDateChange}
					InputLabelProps={{
						shrink: true
					}}
				/>
			</div>
		</>
	);
};

export default Test;
