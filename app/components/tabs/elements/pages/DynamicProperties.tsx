import React, { FC, useEffect, useState } from "react";
import scss from "./Elements.module.scss";
import { Button } from "@mui/material";

const DynamicProperties: FC = () => {
	const [randomId, setRandomId] = useState<string>("");

	useEffect(() => {
		const newRandomId = Math.random().toString(36).substr(2, 5);
		setRandomId(newRandomId);
	}, []);

	return (
		<>
			<div className={scss.DynamicProperties}>
				<p id={randomId}>This text has random Id</p>
				<Button id="enableAfter" variant="contained" size="medium">
					Will enable 5 seconds
				</Button>
				<Button id="colorChange" variant="contained" size="medium">
					Color Change
				</Button>
				<Button id="visibleAfter" variant="contained" size="medium">
					Visible After 5 Seconds
				</Button>
			</div>
		</>
	);
};

export default DynamicProperties;
