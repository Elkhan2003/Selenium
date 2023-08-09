import React, { FC } from "react";
import scss from "./Elements.module.scss";
import Image from "next/image";
import picLogo from "@/app/assets/logo.png";

const BrokenLinksImages: FC = () => {
	return (
		<>
			<div className={scss.BrokenLinksImages}>
				<strong>Valid image</strong>
				<Image className={scss.logo} src={picLogo} alt="logo" />
				<br />
				<strong>Broken image</strong>
				<img src="/image/gg.png" alt="invalid-logo" />
				<br />
				<strong>Valid Link</strong>
				<a href="https://www.wedevx.co/" target="_blank">
					Click Here for Valid Link
				</a>
				<br />
				<strong>Broken Link</strong>
				<a
					href="http://the-internet.herokuapp.com/status_codes/500"
					target="_blank"
				>
					Click Here for Broken Link
				</a>
			</div>
		</>
	);
};

export default BrokenLinksImages;
