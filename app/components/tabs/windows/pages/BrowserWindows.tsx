import React, { FC } from "react";
import scss from "./Windows.module.scss";
import { Button } from "@mui/material";

const BrowserWindows: FC = () => {
	const handleNewTabClick = () => {
		window.open("/sample", "_blank");
	};

	const handleNewWindowClick = () => {
		window.open("/sample", "_blank", "width=800,height=600");
	};

	const handleNewMessageWindowClick = () => {
		const message =
			"Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization.";
		const newWindow = window.open("", "_blank", "width=400,height=300");

		if (newWindow) {
			newWindow.document.write(`<p>${message}</p>`);
		} else {
			alert(
				"Popup blocker prevented opening the new window. Please allow popups for this website."
			);
		}
	};

	return (
		<div>
			<div className={scss.buttons}>
				<div id="tabButtonWrapper">
					<Button
						id="tabButton"
						variant="contained"
						size="large"
						onClick={handleNewTabClick}
					>
						New Tab
					</Button>
				</div>
				<div id="windowButtonWrapper">
					<Button
						id="windowButton"
						variant="contained"
						size="large"
						onClick={handleNewWindowClick}
					>
						New Window
					</Button>
				</div>
				<div id="msgWindowButtonWrapper">
					<Button
						id="messageWindowButton"
						variant="contained"
						size="large"
						onClick={handleNewMessageWindowClick}
					>
						New Window Message
					</Button>
				</div>
			</div>
		</div>
	);
};

export default BrowserWindows;
