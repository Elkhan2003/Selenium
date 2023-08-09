import React, { FC, useState } from "react";
import scss from "./Elements.module.scss";
import Link from "next/link";

const Links: FC = () => {
	const [resultText, setResultText] = useState("");

	const handleCreatedClick = () => {
		setResultText(
			"Link has responded with status <strong>201</strong> and status text <strong>Created</strong>"
		);
	};

	const handleNoContentClick = () => {
		setResultText(
			"Link has responded with status <strong>204</strong> and status text <strong>No Content</strong>"
		);
	};

	const handleMovedClick = () => {
		setResultText(
			"Link has responded with status <strong>301</strong> and status text <strong>Moved Permanently</strong>"
		);
	};

	const handleBadRequestClick = () => {
		setResultText(
			"Link has responded with status <strong>400</strong> and status text <strong>Bad Request</strong>"
		);
	};

	const handleUnauthorizedClick = () => {
		setResultText(
			"Link has responded with status <strong>401</strong> and status text <strong>Unauthorized</strong>"
		);
	};

	const handleForbiddenClick = () => {
		setResultText(
			"Link has responded with status <strong>403</strong> and status text <strong>Forbidden</strong>"
		);
	};

	const handleNotFoundClick = () => {
		setResultText(
			"Link has responded with status <strong>404</strong> and status text <strong>Not Found</strong>"
		);
	};

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
					<p>
						<a
							id="created"
							href="javascript:void(0)"
							onClick={handleCreatedClick}
						>
							Created
						</a>
					</p>
					<p>
						<a
							id="no-content"
							href="javascript:void(0)"
							onClick={handleNoContentClick}
						>
							No Content
						</a>
					</p>
					<p>
						<a id="moved" href="javascript:void(0)" onClick={handleMovedClick}>
							Moved
						</a>
					</p>
					<p>
						<a
							id="bad-request"
							href="javascript:void(0)"
							onClick={handleBadRequestClick}
						>
							Bad Request
						</a>
					</p>
					<p>
						<a
							id="unauthorized"
							href="javascript:void(0)"
							onClick={handleUnauthorizedClick}
						>
							Unauthorized
						</a>
					</p>
					<p>
						<a
							id="forbidden"
							href="javascript:void(0)"
							onClick={handleForbiddenClick}
						>
							Forbidden
						</a>
					</p>
					<p>
						<a
							id="not-found"
							href="javascript:void(0)"
							onClick={handleNotFoundClick}
						>
							Not Found
						</a>
					</p>
				</div>
			</div>
			<div className={scss.result}>
				{resultText && <p dangerouslySetInnerHTML={{ __html: resultText }} />}
			</div>
		</>
	);
};

export default Links;
