import React, { FC } from "react";
import scss from "./Windows.module.scss";

const NestedFrames: FC = () => {
	return (
		<>
			<div id="framesWrapper" className={scss.NestedFrames}>
				<div className={scss.interval}>
					Sample Nested Iframe page. There are nested iframes in this page. Use
					browser inspecter or firebug to check out the HTML source. In total
					you can switch between the parent frame and the nested child frame.
				</div>
				<div id="frame1Wrapper">
					<iframe
						src="/sample-iframe"
						id="frame1"
						width="500px"
						height="350px"
					></iframe>
				</div>
			</div>
		</>
	);
};

export default NestedFrames;
