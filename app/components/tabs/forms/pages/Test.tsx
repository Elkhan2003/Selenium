import React, { FC, useState } from "react";
import scss from "./Forms.module.scss";
import { useForm } from "react-hook-form";
import {
	Button,
	Dialog,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow,
	Paper,
	TableHead,
	TextField
} from "@mui/material";

interface FormData {
	firstName: string;
	lastName: string;
	uploadPicture: FileList;
}

const Test: FC = () => {
	const [open, setOpen] = useState(false);
	const [uploadedModal, setUploadedModal] = useState<FormData | null>(null); // Specify the type here
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<FormData>();

	const modalResult = [
		{
			label: "Student Name",
			value: uploadedModal?.firstName + " " + uploadedModal?.lastName
		},
		{ label: "Student Email", value: "elcho911@gmail.com" },
		{ label: "Gender", value: "Male" },
		{ label: "Mobile", value: "9903850565" },
		{ label: "Date of Birth", value: "15 August, 2023" },
		{ label: "Subjects", value: "" },
		{ label: "Hobbies", value: "" },
		{ label: "Picture", value: uploadedModal?.uploadPicture?.[0]?.name },
		{ label: "Address", value: "" },
		{ label: "State and City", value: "" }
	];

	const sendData = async (data: FormData) => {
		try {
			const titles = {
				firstName: data.firstName,
				lastName: data.lastName,
				uploadPicture: data.uploadPicture[0].name
			};

			setUploadedModal(data);
			console.log(titles);
			setOpen(true);
		} catch (error) {
			console.error("Error occurred while sending the POST request:", error);
		}
	};

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

			<form className={scss.form} onSubmit={handleSubmit(sendData)}>
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

				<div className={`${scss.userPicture} ${scss.userFormFlex}`}>
					<div className={scss.label}>
						<label id="subjects-label" htmlFor="uploadPicture">
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

				<Button id="submit" type="submit" variant="contained" size="medium">
					Submit
				</Button>
			</form>
		</>
	);
};

export default Test;
