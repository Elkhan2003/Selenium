import React, { FC } from "react";
import scss from "./Elements.module.scss";
import axios from "axios";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

const UploadAndDownload: FC = () => {
	const handleDownload = async () => {
		try {
			const response = await axios.get("https://i.ibb.co/Kw7F5BK/logo.png", {
				responseType: "blob"
			});

			const blob = new Blob([response.data], { type: "image/png" });

			const url = window.URL.createObjectURL(blob);

			const link = document.createElement("a");
			link.href = url;
			link.setAttribute("download", "logo.png");
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);

			window.URL.revokeObjectURL(url);
		} catch (error) {
			console.error("Error downloading file:", error);
		}
	};

	return (
		<>
			<div className={scss.UploadAndDownload}>
				<Button
					id="downloadButton"
					variant="contained"
					size="large"
					onClick={handleDownload}
					endIcon={<DownloadIcon />}
				>
					Download
				</Button>
				<form>
					<label htmlFor="uploadFile">Select a file</label>
					<input id="uploadFile" type="file" lang="en"></input>
				</form>
			</div>
		</>
	);
};

export default UploadAndDownload;
