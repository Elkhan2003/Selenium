import React, { FC, useState } from "react";
import { Stack, TextField } from "@mui/material";

const DatePicker: FC = () => {
	// ! Date
	const today = new Date();
	const year = today.getFullYear();
	const month = String(today.getMonth() + 1).padStart(2, "0");
	const day = String(today.getDate()).padStart(2, "0");
	const currentDate = `${year}-${month}-${day}`;

	const [date, setDate] = useState(currentDate);
	const handleDateChange = (event: any) => {
		setDate(event.target.value);
	};

	// ! Date & Time
	const hour = String(today.getHours()).padStart(2, "0");
	const minute = String(today.getMinutes()).padStart(2, "0");
	const currentDateTime = `${year}-${month}-${day}T${hour}:${minute}`;

	const [dateTime, setDateTime] = useState(currentDateTime);
	const handleDateTimeChange = (event: any) => {
		setDateTime(event.target.value);
	};

	return (
		<>
			<Stack spacing={2} sx={{ width: 250 }}>
				<TextField
					variant="outlined"
					size="small"
					type="date"
					id="datePickerMonthYearInput"
					label="Select Date"
					name="datePickerMonthYear"
					defaultValue={date}
					onChange={handleDateChange}
					InputLabelProps={{
						shrink: true,
					}}
				/>
				<TextField
					variant="outlined"
					size="small"
					type="datetime-local"
					id="dateAndTimePickerInput"
					label="Date And Time"
					name="dateAndTimePickerInput"
					defaultValue={dateTime}
					onChange={handleDateTimeChange}
					InputLabelProps={{
						shrink: true,
					}}
				/>
			</Stack>
		</>
	);
};

export default DatePicker;
