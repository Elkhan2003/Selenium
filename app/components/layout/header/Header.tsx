import React, { FC } from "react";
import scss from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/images/logo.png";

const Header: FC = () => {
	const links = [
		{
			href: "/",
			label: "Home"
		},
		{
			href: "/selenium",
			label: "Elements"
		}
	];

	return (
		<div className={scss.header}>
			<div>
				<Image className={scss.logo} priority={true} src={logo} alt="logo" />
			</div>
			<div>
				{links.map((items, index) => (
					<Link key={index + 1} href={items.href}>
						{items.label}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Header;
