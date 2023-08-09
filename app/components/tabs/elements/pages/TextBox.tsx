import React, { FC, useState } from "react";
import scss from "./Elements.module.scss";
import { TextField, Button } from "@mui/material";

const TextBox: FC = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		currentAddress: "",
		permanentAddress: ""
	});

	const [draftData, setDraftData] = useState({
		name: "",
		email: "",
		currentAddress: "",
		permanentAddress: ""
	});

	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = event.target;
		setDraftData((prevDraftData) => ({
			...prevDraftData,
			[name]: value
		}));
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setFormData({ ...draftData }); // Update formData with draftData
	};

	const hasResults = Object.values(formData).some((value) => value !== "");

	return (
		<>
			<div className={scss.TextBox}>
				<form className={scss.userForm} onSubmit={handleSubmit}>
					<div className={`${scss.userName} ${scss.userFormFlex}`}>
						<div>
							<label htmlFor="name">Full Name</label>
						</div>
						<div>
							<TextField
								variant="outlined"
								size="small"
								type="text"
								name="name"
								label="Full Name"
								value={draftData.name}
								onChange={handleInputChange}
							/>
						</div>
					</div>

					<div className={`${scss.userEmail} ${scss.userFormFlex}`}>
						<div>
							<label htmlFor="email">Email</label>
						</div>
						<div>
							<TextField
								variant="outlined"
								size="small"
								type="text"
								name="email"
								label="name@example.com"
								value={draftData.email}
								onChange={handleInputChange}
							/>
						</div>
					</div>

					<div className={`${scss.currentAddress} ${scss.userFormFlex}`}>
						<div>
							<label htmlFor="currentAddress">Current Address</label>
						</div>
						<div>
							<TextField
								variant="outlined"
								name="currentAddress"
								label="Current Address"
								multiline
								value={draftData.currentAddress}
								onChange={handleInputChange}
							/>
						</div>
					</div>

					<div className={`${scss.permanentAddress} ${scss.userFormFlex}`}>
						<div>
							<label htmlFor="permanentAddress">Permanent Address</label>
						</div>
						<div>
							<TextField
								variant="outlined"
								name="permanentAddress"
								label="Permanent Address"
								multiline
								value={draftData.permanentAddress}
								onChange={handleInputChange}
							/>
						</div>
					</div>

					<div className={scss.button}>
						<Button type="submit" variant="contained" size="medium">
							Submit
						</Button>
					</div>
				</form>

				{hasResults && (
					<div className={scss.result}>
						{formData.name && <p>Name: {formData.name}</p>}
						{formData.email && <p>Email: {formData.email}</p>}
						{formData.currentAddress && (
							<p>Current Address: {formData.currentAddress}</p>
						)}
						{formData.permanentAddress && (
							<p>Permanent Address: {formData.permanentAddress}</p>
						)}
					</div>
				)}
			</div>
		</>
	);
};

export default TextBox;
