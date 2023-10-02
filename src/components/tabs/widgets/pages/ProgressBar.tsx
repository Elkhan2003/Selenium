import React, { FC, useState, useEffect } from "react";
import scss from "./Widgets.module.scss";
import { Button } from "@mui/material";

const ProgressBar: FC = () => {
	const [progress, setProgress] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	const [lastProgress, setLastProgress] = useState(0);

	useEffect(() => {
		let intervalId: NodeJS.Timeout;

		if (isRunning) {
			intervalId = setInterval(() => {
				setProgress((prevProgress) => {
					if (prevProgress < 100) {
						return prevProgress + 1;
					} else {
						clearInterval(intervalId);
						setIsRunning(false);
						return prevProgress;
					}
				});
			}, 30);
		}

		return () => {
			clearInterval(intervalId);
		};
	}, [isRunning]);

	const handleStartStopClick = () => {
		if (isRunning) {
			setLastProgress(progress);
			setIsRunning(false);
		} else {
			if (progress === 100) {
				setLastProgress(0);
			}
			setProgress(lastProgress);
			setIsRunning(true);
		}
	};

	const handleResetClick = () => {
		setProgress(0);
		setIsRunning(false);
		setLastProgress(0);
	};

	return (
		<>
			<div className={scss.ProgressBar}>
				<p>Progress Bar</p>
				<progress
					value={progress}
					max={100}
					style={{
						borderColor: progress === 100 ? "green" : undefined
					}}
				/>
				{progress === 100 ? (
					<Button
						id="resetButton"
						variant="contained"
						size="medium"
						onClick={handleResetClick}
					>
						Reset
					</Button>
				) : (
					<Button
						id="startStopButton"
						variant="contained"
						size="medium"
						onClick={handleStartStopClick}
					>
						{isRunning ? "Stop" : "Start"}
					</Button>
				)}
			</div>
		</>
	);
};

export default ProgressBar;
