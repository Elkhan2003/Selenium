import React, { FC } from "react";
import scss from "./Elements.module.scss";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

const UploadAndDownload: FC = () => {
	return (
		<>
			<div className={scss.UploadAndDownload}>
				<a
					id="downloadButton"
					href="https://i.ibb.co/Kw7F5BK/logo.png"
					target="_blank"
					download="logo.png"
				>
					<Button variant="contained" size="large" endIcon={<DownloadIcon />}>
						Download
					</Button>
				</a>
				<form>
					<label htmlFor="uploadFile">Select a file</label>
					<input id="uploadFile" type="file" lang="en"></input>
				</form>
			</div>
		</>
	);
};

export default UploadAndDownload;
