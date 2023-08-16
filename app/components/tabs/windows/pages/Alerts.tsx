import React, { FC, useState } from "react";
import scss from "./Windows.module.scss";
import { Button } from "@mui/material";

const Alerts: FC = () => {
	const [userChoice, setUserChoice] = useState<string | null>(null);
	const [userPrompt, setUserPrompt] = useState<string | null>(null);

	const handleSeeAlert = () => {
		alert("You clicked a button");
	};

	const handleSeeAlertAfterFiveSeconds = () => {
		setTimeout(() => {
			alert("You clicked a button after 5 seconds");
		}, 5000);
	};

	const handleSeeConfirm = () => {
		const result = confirm("Do you confirm action?");
		if (result) {
			setUserChoice("Ok");
		} else {
			setUserChoice("Cancel");
		}
	};

	const handleSeePrompt = () => {
		const result = prompt("Press enter your name");
		if (result) {
			setUserPrompt(result);
		} else {
			setUserPrompt(null);
		}
	};

	return (
		<>
			<div className={scss.Alerts}>
				<div className={scss.flexes}>
					<div className={scss.title}>
						<span>Click Button to see alert</span>
					</div>
					<div className={scss.buttons}>
						<Button
							id="alertButton"
							variant="contained"
							size="medium"
							onClick={handleSeeAlert}
						>
							Click me
						</Button>
					</div>
				</div>

				<div className={scss.flexes}>
					<div className={scss.title}>
						<span>On button click, alert will appear after 5 seconds</span>
					</div>
					<div className={scss.buttons}>
						<Button
							id="timerAlertButton"
							variant="contained"
							size="medium"
							onClick={handleSeeAlertAfterFiveSeconds}
						>
							Click me
						</Button>
					</div>
				</div>

				<div className={scss.flexes}>
					<div className={scss.title}>
						<span>On button click, confirm box will appear</span>
						{userChoice === "Ok" && (
							<strong className={scss.resultConfirmOk}>You selected Ok</strong>
						)}
						{userChoice === "Cancel" && (
							<strong className={scss.resultConfirmCancel}>
								You selected Cancel
							</strong>
						)}
					</div>
					<div className={scss.buttons}>
						<Button
							id="confirmButton"
							variant="contained"
							size="medium"
							onClick={handleSeeConfirm}
						>
							Click me
						</Button>
					</div>
				</div>

				<div className={scss.flexes}>
					<div className={scss.title}>
						<span>On button click, prompt box will appear</span>
						{userPrompt && (
							<strong className={scss.resultPrompt}>{userPrompt}</strong>
						)}
					</div>
					<div className={scss.buttons}>
						<Button
							id="promptButton"
							variant="contained"
							size="medium"
							onClick={handleSeePrompt}
						>
							Click me
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Alerts;
