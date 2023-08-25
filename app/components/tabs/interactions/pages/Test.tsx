import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { Stack, TextField } from "@mui/material";

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
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		watch
	} = useForm<selectType>();

	const selectedState = watch("state");
	const cityOptions = selectedState
		? options.find((option) => option.value === selectedState)?.words || []
		: [];

	const onSubmit = (data: selectType) => {
		console.log(data);
	};

	return (
		<>
			<div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<select
						id="select_1"
						{...register("state")}
						defaultValue=""
						onChange={(e) => {
							setValue("state", e.target.value);
							setValue("city", ""); // Сброс значения города при изменении штата
						}}
					>
						<option value="">Select State</option>
						{options.map((option) => (
							<option key={option.value} value={option.value}>
								{option.value}
							</option>
						))}
					</select>
					{errors.state && <p>State is required.</p>}

					<select
						disabled={!selectedState}
						id="select_2"
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
					{errors.city && <p>City is required.</p>}

					<button type="submit">Submit</button>
				</form>
			</div>
		</>
	);
};

export default Test;
