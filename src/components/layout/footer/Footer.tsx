import React, { FC } from "react";
import scss from "./Footer.module.scss";

const Footer: FC = () => {
	return (
		<div className={scss.footer}>
			<p>
				© 2018-2023 WEDEVX.CO | ALL RIGHTS RESERVED.
				{/* |&nbsp;
				<a href="https://www.instagram.com/elcho911/" target="_blank">
					By Elcho911
				</a> */}
			</p>
		</div>
	);
};

export default Footer;
