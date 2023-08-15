import React, { FC, useState } from "react";
import scss from "./Forms.module.scss";
import {
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	InputLabel,
	MenuItem,
	Radio,
	RadioGroup,
	TextField
} from "@mui/material";
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

const PracticeForm: FC = () => {
	// ! Date Of Birth
	const today = new Date();
	const year = today.getFullYear();
	const month = String(today.getMonth() + 1).padStart(2, "0");
	const day = String(today.getDate()).padStart(2, "0");
	const currentDate = `${year}-${month}-${day}`;

	const [dateOfBirth, setDateOfBirth] = useState(currentDate);
	const handleDateChange = (event: any) => {
		setDateOfBirth(event.target.value);
	};

	// ! Select
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
		<>
			<div className={scss.PracticeForm}>
				<h3>Student Registration Form</h3>
				<form className={scss.form}>
					<div className={`${scss.userName} ${scss.userFormFlex}`}>
						<div className={scss.label}>
							<label id="userName-label" htmlFor="name">
								Name
							</label>
						</div>
						<div className={`${scss.name__inputs} ${scss.userFormWidth}`}>
							<TextField
								fullWidth
								variant="outlined"
								size="small"
								type="text"
								id="firstName"
								name="firstName"
								label="First Name"
							/>
							<TextField
								fullWidth
								variant="outlined"
								size="small"
								type="text"
								id="lastName"
								name="lastName"
								label="Last Name"
							/>
						</div>
					</div>

					<div className={`${scss.userEmail} ${scss.userFormFlex}`}>
						<div className={scss.label}>
							<label id="userEmail-label" htmlFor="email">
								Email
							</label>
						</div>
						<div className={`${scss.email__inputs} ${scss.userFormWidth}`}>
							<TextField
								fullWidth
								variant="outlined"
								size="small"
								type="text"
								id="userEmail"
								name="email"
								label="name@example.com"
							/>
						</div>
					</div>

					<div className={`${scss.userGender} ${scss.userFormFlex}`}>
						<div className={scss.label}>
							<label id="userGender-label" htmlFor="gender">
								Gender
							</label>
						</div>
						<div className={`${scss.radio__buttons} ${scss.userFormWidth}`}>
							<RadioGroup
								row
								aria-labelledby="demo-row-radio-buttons-group-label"
								name="row-radio-buttons-group"
							>
								<FormControlLabel
									id="gender-radio-1"
									value="Male"
									control={<Radio />}
									label="Male"
								/>
								<FormControlLabel
									id="gender-radio-2"
									value="Female"
									control={<Radio />}
									label="Female"
								/>
								<FormControlLabel
									id="gender-radio-3"
									value="Other"
									control={<Radio />}
									label="Other"
								/>
							</RadioGroup>
						</div>
					</div>

					<div className={`${scss.userMobile} ${scss.userFormFlex}`}>
						<div className={scss.label}>
							<label id="userMobile-label" htmlFor="mobile">
								Mobile <span>(10 Digits)</span>
							</label>
						</div>
						<div className={`${scss.mobile__inputs} ${scss.userFormWidth}`}>
							<TextField
								fullWidth
								variant="outlined"
								size="small"
								type="text"
								id="userMobile"
								name="mobile"
								label="Mobile Number"
							/>
						</div>
					</div>

					<div className={`${scss.userDateOfBirth} ${scss.userFormFlex}`}>
						<div className={scss.label}>
							<label id="userDateBirth-label" htmlFor="dateBirth">
								Date of Birth
							</label>
						</div>
						<div
							className={`${scss.dateOfBirth__inputs} ${scss.userFormWidth}`}
						>
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
					</div>

					<div className={`${scss.subjects} ${scss.userFormFlex}`}>
						<div className={scss.label}>
							<label id="subjects-label" htmlFor="subjects">
								Subjects
							</label>
						</div>
						<div className={`${scss.subjects__inputs} ${scss.userFormWidth}`}>
							<TextField
								fullWidth
								variant="outlined"
								size="small"
								type="text"
								id="subjectsContainer"
								name="subjects"
								label="Subjects"
							/>
						</div>
					</div>

					<div className={`${scss.userHobbies} ${scss.userFormFlex}`}>
						<div className={scss.label}>
							<label id="subjects-label" htmlFor="hobbies">
								Hobbies
							</label>
						</div>
						<div className={`${scss.checkout__buttons} ${scss.userFormWidth}`}>
							<FormGroup row>
								<FormControlLabel
									control={<Checkbox />}
									id="hobbies-radio-1"
									label="Sports"
								/>
								<FormControlLabel
									control={<Checkbox />}
									id="hobbies-radio-2"
									label="Reading"
								/>
								<FormControlLabel
									control={<Checkbox />}
									id="hobbies-radio-3"
									label="Music"
								/>
							</FormGroup>
						</div>
					</div>

					<div className={`${scss.userPicture} ${scss.userFormFlex}`}>
						<div className={scss.label}>
							<label id="subjects-label" htmlFor="picture">
								Picture
							</label>
						</div>
						<div className={`${scss.select__picture} ${scss.userFormWidth}`}>
							<label htmlFor="uploadPicture">Select picture</label>
							<input id="uploadPicture" type="file" lang="en"></input>
						</div>
					</div>

					<div className={`${scss.userCurrentAddress} ${scss.userFormFlex}`}>
						<div className={scss.label}>
							<label id="currentAddress-label" htmlFor="currentAddress">
								Current Address
							</label>
						</div>
						<div className={`${scss.current__address} ${scss.userFormWidth}`}>
							<TextField
								fullWidth
								variant="outlined"
								id="currentAddress"
								name="currentAddress"
								label="Current Address"
								multiline
							/>
						</div>
					</div>

					<div className={`${scss.userSelect} ${scss.userFormFlex}`}>
						<div>
							<label id="stateCity-label" htmlFor="stateCity">
								State and City
							</label>
						</div>
						<div className={`${scss.select__inputs} ${scss.userFormWidth}`}>
							<FormControl fullWidth>
								<InputLabel id="select_1" size="small">
									Select State
								</InputLabel>
								<Select
									size="small"
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
								<InputLabel id="select_2" size="small">
									Select City
								</InputLabel>
								<Select
									size="small"
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
					</div>

					<div className={scss.button}>
						<Button id="submit" type="submit" variant="contained" size="medium">
							Submit
						</Button>
					</div>
				</form>
			</div>
		</>
	);
};

export default PracticeForm;
