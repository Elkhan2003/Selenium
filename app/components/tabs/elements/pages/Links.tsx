import React, { FC } from "react";
import scss from "./Elements.module.scss";
import Link from "next/link";

const Links: FC = () => {
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
						<a id="created" href="javascript:void(0)">
							Created
						</a>
					</p>
					<p>
						<a id="no-content" href="javascript:void(0)">
							No Content
						</a>
					</p>
				</div>
			</div>
		</>
	);
};

export default Links;
