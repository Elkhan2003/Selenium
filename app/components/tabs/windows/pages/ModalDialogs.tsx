import React, { FC } from "react";
import scss from "./Windows.module.scss";
import { Button } from "@mui/material";

const ModalDialogs: FC = () => {
	return (
		<>
			<div className={scss.ModalDialogs}>
				<div className={scss.title}>Click on button to see modal</div>
				<div className={scss.buttons}>
					<Button id="showSmallModal" variant="contained" size="medium">
						Small modal
					</Button>
					<Button id="showLargeModal" variant="contained" size="medium">
						Large modal
					</Button>
				</div>
			</div>
		</>
	);
};

export default ModalDialogs;
