import React, { FC, useState } from "react";
import scss from "./Elements.module.scss";
import { Button } from "@mui/material";

const Buttons: FC = () => {
	const [showDoubleClick, setShowDoubleClick] = useState(false);
	const [showRightClick, setShowRightClick] = useState(false);
	const [showDynamicClick, setShowDynamicClick] = useState(false);

	const handleDoubleClick = () => {
		setShowDoubleClick(true);
	};

	const handleRightClick = (event: React.MouseEvent) => {
		event.preventDefault();
		setShowRightClick(true);
	};

	const handleClick = () => {
		setShowDynamicClick(true);
	};

	return (
		<div className={scss.ButtonsPage}>
			<div className={scss.buttons}>
				<Button
					id="doubleClickBtn"
					variant="contained"
					size="large"
					onDoubleClick={handleDoubleClick}
				>
					Double Click Me
				</Button>
				<Button
					id="rightClickBtn"
					variant="contained"
					size="large"
					onContextMenu={handleRightClick}
				>
					Right Click Me
				</Button>
				<Button
					id="TiIX0"
					variant="contained"
					size="large"
					onClick={handleClick}
				>
					Click Me
				</Button>
			</div>

			<div className={scss.result}>
				{showDoubleClick && <p>You have done a double click</p>}

				{showRightClick && <p>You have done a right click</p>}

				{showDynamicClick && <p>You have done a dynamic click</p>}
			</div>
		</div>
	);
};

export default Buttons;
