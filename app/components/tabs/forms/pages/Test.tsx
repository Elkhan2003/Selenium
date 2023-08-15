import React, { FC, useState } from "react";
import scss from "./Forms.module.scss";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";

interface FormData {
	uploadPicture: FileList;
}

const Test: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<FormData>();

	const sendData = async (data: FormData) => {
		try {
			const titles = {
				uploadPicture: data.uploadPicture[0].name
			};

			console.log(titles);
			reset();
		} catch (error) {
			console.error("Error occurred while sending the POST request:", error);
		}
	};

	return (
		<>
			<form className={scss.form} onSubmit={handleSubmit(sendData)}>
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

				<Button id="submit" type="submit" variant="contained" size="medium">
					Submit
				</Button>
			</form>
		</>
	);
};

export default Test;
