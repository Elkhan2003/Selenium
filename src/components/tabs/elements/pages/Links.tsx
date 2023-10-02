import React, { FC, useState } from "react";
import scss from "./Elements.module.scss";
import Link from "next/link";

const Links: FC = () => {
	const [resultText, setResultText] = useState("");

	const handleLinkClick = (status: number, statusText: string) => {
		setResultText(
			`Link has responded with status <strong>${status}</strong> and status text <strong>${statusText}</strong>`
		);
	};

	const linkData = [
		{ id: "created", text: "Created", status: 201, statusText: "Created" },
		{
			id: "no-content",
			text: "No Content",
			status: 204,
			statusText: "No Content"
		},
		{
			id: "moved",
			text: "Moved",
			status: 301,
			statusText: "Moved Permanently"
		},
		{
			id: "bad-request",
			text: "Bad Request",
			status: 400,
			statusText: "Bad Request"
		},
		{
			id: "unauthorized",
			text: "Unauthorized",
			status: 401,
			statusText: "Unauthorized"
		},
		{
			id: "forbidden",
			text: "Forbidden",
			status: 403,
			statusText: "Forbidden"
		},
		{ id: "not-found", text: "Not Found", status: 404, statusText: "Not Found" }
	];

	return (
		<>
			<div className={scss.Links}>
				<div>
					<h3>Following links will open new tab</h3>
					<p>
						<Link id="simpleLink" href="/" target="_blank">
							Home
						</Link>
					</p>
					<p>
						<Link id="dynamicLink" href="/" target="_blank">
							Homed7RRx
						</Link>
					</p>
					<h3>Following links will send an api call</h3>
					{linkData.map((link) => (
						<p key={link.id}>
							<a
								id={link.id}
								href="javascript:void(0)"
								onClick={() => handleLinkClick(link.status, link.statusText)}
							>
								{link.text}
							</a>
						</p>
					))}
				</div>
			</div>
			<div className={scss.result}>
				{resultText && <p dangerouslySetInnerHTML={{ __html: resultText }} />}
			</div>
		</>
	);
};

export default Links;
