import React, { FC } from "react";

const SampleIframe: FC = () => {
	return (
		<>
			Parent frame
			<iframe srcDoc="<p>Child Iframe</p>"></iframe>
		</>
	);
};

export default SampleIframe;
