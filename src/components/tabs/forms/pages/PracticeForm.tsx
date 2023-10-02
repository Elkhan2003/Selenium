import React, { FC, useState } from "react";
import scss from "./Forms.module.scss";
import {
	Button,
	Checkbox,
	Dialog,
	FormControl,
	FormControlLabel,
	FormGroup,
	InputLabel,
	MenuItem,
	Radio,
	RadioGroup,
	TextField,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow,
	Paper,
	TableHead,
	Autocomplete
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useForm } from "react-hook-form";

interface FormData {
	firstName: string;
	lastName: string;
	gender: string;
	email: string;
	dateOfBirth: string;
	mobile: number;
	subjects: string;
	hobbies: string;
	uploadPicture: FileList;
	currentAddress: string;
	state: string;
	city: string;
}

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

const PracticeForm: FC = () => {
	const [open, setOpen] = useState(false);
	const [uploadedModal, setUploadedModal] = useState<FormData | null>(null);
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		watch,
		reset
	} = useForm<FormData>();

	const modalResult = [
		{
			label: "Student Name",
			value: uploadedModal?.firstName + " " + uploadedModal?.lastName
		},
		{ label: "Student Email", value: uploadedModal?.email },
		{ label: "Gender", value: uploadedModal?.gender },
		{ label: "Mobile", value: uploadedModal?.mobile },
		{ label: "Date of Birth", value: uploadedModal?.dateOfBirth },
		{ label: "Subjects", value: uploadedModal?.subjects },
		{ label: "Hobbies", value: uploadedModal?.hobbies },
		{ label: "Picture", value: uploadedModal?.uploadPicture?.[0]?.name },
		{ label: "Address", value: uploadedModal?.currentAddress },
		{
			label: "State and City",
			value: `${uploadedModal?.state}, ${uploadedModal?.city}`
		}
	];

	const sendData = async (data: FormData) => {
		try {
			// const titles = {
			// 	firstName: data.firstName,
			// 	lastName: data.lastName,
			// 	gender: data.gender,
			// 	email: data.email,
			// 	dateOfBirth: data.dateOfBirth,
			// 	mobile: data.mobile,
			// 	subjects: data.subjects,
			// 	hobbies: data.hobbies,
			// 	uploadPicture: data.uploadPicture[0].name,
			// 	currentAddress: data.currentAddress,
			// 	state: data.state,
			// 	city: data.city
			// };
			setUploadedModal(data);
			setOpen(true);
		} catch (error) {
			console.error(`${error}`);
		}
	};

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
	const selectedState = watch("state");
	const cityOptions = selectedState
		? options.find((option) => option.value === selectedState)?.words || []
		: [];

	return (
		<>
			<Dialog open={open}>
				<div className={scss.modal}>
					<h1>Thanks for submitting the form</h1>
					<div className={scss.table__container}>
						<TableContainer component={Paper}>
							<Table>
								<TableHead>
									<TableRow>
										<TableCell>
											<h3>Label</h3>
										</TableCell>
										<TableCell>
											<h3>Values</h3>
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{modalResult.map((item, index) => (
										<TableRow key={index + 1}>
											<TableCell>{item.label}</TableCell>
											<TableCell>{item.value}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</div>

					<div className={scss.button}>
						<Button
							id="close"
							variant="contained"
							size="medium"
							color="error"
							onClick={() => {
								setOpen(false);
								reset();
							}}
						>
							Close
						</Button>
					</div>
				</div>
			</Dialog>
			<div className={scss.PracticeForm}>
				<h3>Student Registration Form</h3>
				<form className={scss.form} onSubmit={handleSubmit(sendData)}>
					<div className={`${scss.userName} ${scss.userFormFlex}`}>
						<div className={scss.label}>
							<label id="userName-label" htmlFor="name">
								Name
							</label>
						</div>
						<div className={`${scss.name__inputs} ${scss.userFormWidth}`}>
							<TextField
								{...(errors.firstName && {
									error: true
								})}
								fullWidth
								variant="outlined"
								size="small"
								type="text"
								id="firstName"
								label="First Name"
								{...register("firstName", { required: true, minLength: 2 })}
							/>
							<TextField
								{...(errors.lastName && {
									error: true
								})}
								fullWidth
								variant="outlined"
								size="small"
								type="text"
								id="lastName"
								label="Last Name"
								{...register("lastName", { required: true, minLength: 2 })}
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
								{...(errors.email && {
									error: true
								})}
								fullWidth
								variant="outlined"
								size="small"
								type="text"
								id="userEmail"
								label="name@example.com"
								{...register("email", {
									required: false,
									pattern: /^\S+@\S+$/i
								})}
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
							<RadioGroup row>
								<FormControlLabel
									id="gender-radio-1"
									value="Male"
									control={<Radio {...register("gender")} value="Male" />}
									label="Male"
								/>
								<FormControlLabel
									id="gender-radio-2"
									value="Female"
									control={<Radio {...register("gender")} value="Female" />}
									label="Female"
								/>
								<FormControlLabel
									id="gender-radio-3"
									value="Other"
									control={<Radio {...register("gender")} value="Other" />}
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
								{...(errors.mobile && {
									error: true
								})}
								fullWidth
								variant="outlined"
								size="small"
								type="text"
								id="userMobile"
								label="Mobile Number"
								{...register("mobile", {
									required: true,
									pattern: /^\+?\d{10,10}$/
								})}
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
								{...(errors.dateOfBirth && {
									error: true
								})}
								variant="outlined"
								size="small"
								type="date"
								id="dateOfBirthInput"
								label="Date Of Birth"
								{...register("dateOfBirth", {
									required: true
								})}
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
								{...(errors.subjects && {
									error: true
								})}
								fullWidth
								variant="outlined"
								size="small"
								type="text"
								id="subjectsContainer"
								label="Subjects"
								{...register("subjects", {
									required: true
								})}
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
									control={<Checkbox {...register("hobbies")} value="Sports" />}
									id="hobbies-radio-1"
									label="Sports"
								/>
								<FormControlLabel
									control={
										<Checkbox {...register("hobbies")} value="Reading" />
									}
									id="hobbies-radio-2"
									label="Reading"
								/>
								<FormControlLabel
									control={<Checkbox {...register("hobbies")} value="Music" />}
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
							<input
								id="uploadPicture"
								type="file"
								lang="en"
								{...register("uploadPicture")}
							></input>
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
								label="Current Address"
								{...register("currentAddress", {
									required: false
								})}
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
							<div id="state">
								<select
									id="react-select-6-input"
									{...register("state")}
									defaultValue=""
									onChange={(e) => {
										setValue("state", e.target.value);
										setValue("city", "");
									}}
								>
									<option value="">Select State</option>
									{options.map((option) => (
										<option key={option.value} value={option.value}>
											{option.value}
										</option>
									))}
								</select>
							</div>
							<div id="city">
								<select
									disabled={!selectedState}
									id="react-select-7-input"
									{...register("city")}
									defaultValue=""
								>
									<option value="">Select City</option>
									{cityOptions.map((city) => (
										<option key={city} value={city}>
											{city}
										</option>
									))}
								</select>
							</div>
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
