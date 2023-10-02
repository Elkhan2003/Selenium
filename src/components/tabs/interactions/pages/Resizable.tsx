import React, { FC } from "react";
import scss from "./Interactions.module.scss";

const Resizable: FC = () => {
	return (
		<>
			<div className={scss.Resizable}>
				<h1>Resizable</h1>
			</div>
		</>
	);
};

export default Resizable;
