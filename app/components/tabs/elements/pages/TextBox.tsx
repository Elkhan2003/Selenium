import React, { FC } from "react";
import scss from "./Style.module.scss";

const TextBox: FC = () => {
	return (
		<>
			<form className={scss.userForm}>
				{/* ! user Name */}
				<div className={scss.userNama}>
					<div>
						<label htmlFor="name">Full Name</label>
					</div>
					<div>
						<input type="text" placeholder="Full Name" />
					</div>
				</div>

				{/* ! user Email */}
				<div className={scss.userEmail}>
					<div>
						<label htmlFor="email">Email</label>
					</div>
					<div>
						<input type="text" placeholder="name@example.com" />
					</div>
				</div>

				{/* ! Current Address */}
				<div className={scss.userEmail}>
					<div>
						<label htmlFor="CurrentAddress">Current Address</label>
					</div>
					<div>
						<textarea
							placeholder="Current Address"
							rows={5}
							cols={20}
						></textarea>
					</div>
				</div>

				{/* ! Permanent Address */}
				<div className={scss.userEmail}>
					<div>
						<label htmlFor="CurrentAddress">Permanent Address</label>
					</div>
					<div>
						<textarea
							placeholder="Permanent Address"
							rows={5}
							cols={20}
						></textarea>
					</div>
				</div>
			</form>
		</>
	);
};

export default TextBox;
