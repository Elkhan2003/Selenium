import React, { FC } from "react";
import scss from "./Elements.module.scss";
import Image from "next/image";
import picLogo from "@/app/assets/logo.png";

const BrokenLinksImages: FC = () => {
	return (
		<>
			<div className={scss.BrokenLinksImages}>
				<p>Valid image</p>
				<Image src={picLogo} alt="pic-logo" />
			</div>
		</>
	);
};

export default BrokenLinksImages;
