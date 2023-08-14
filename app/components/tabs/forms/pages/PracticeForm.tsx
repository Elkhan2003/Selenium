import React, { FC, useState } from "react";
import scss from "./Forms.module.scss";
import {
	Checkbox,
	FormControlLabel,
	FormGroup,
	InputBase,
	Paper,
	Radio,
	RadioGroup,
	TextField
} from "@mui/material";

const PracticeForm: FC = () => {
	const [dateOfBirth, setDateOfBirth] = useState("2003-10-14"); // Начальная дата

	const handleDateChange = (event: any) => {
		setDateOfBirth(event.target.value);
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
				</form>
			</div>
		</>
	);
};

export default PracticeForm;
