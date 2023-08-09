import React, { FC } from "react";
import scss from "./Style.module.scss";
import Link from "next/link";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const HomePage: FC = () => {
	return (
		<>
			<div className={scss.HomePage}>
				<Link href="/selenium">
					<Button variant="contained" size="large" endIcon={<SendIcon />}>
						Get started
					</Button>
				</Link>
			</div>
		</>
	);
};

export default HomePage;
