import React, { FC } from "react";
import scss from "./Footer.module.scss";

const Footer: FC = () => {
	return (
		<div className={scss.footer}>
			<p>© 2018-2023 WEDEVX.CO | ALL RIGHTS RESERVED.</p>
		</div>
	);
};

export default Footer;
