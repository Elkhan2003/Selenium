import React, { FC } from "react";
import scss from "./Windows.module.scss";

const Iframes: FC = () => {
	return (
		<>
			<div id="framesWrapper" className={scss.Frames}>
				<div className={scss.interval}>
					Sample Iframe page There are 2 Iframes in this page. Use browser
					inspecter or firebug to check out the HTML source. In total you can
					switch between the parent frame, which is this window, and the two
					frames below
				</div>

				<div id="frame1Wrapper" className={scss.interval}>
					<iframe
						src="/sample"
						id="frame1"
						width="500px"
						height="350px"
					></iframe>
				</div>

				<div id="frame2Wrapper" className={scss.interval}>
					<iframe
						src="/sample"
						id="frame2"
						width="100px"
						height="100px"
					></iframe>
				</div>
			</div>
		</>
	);
};

export default Iframes;
