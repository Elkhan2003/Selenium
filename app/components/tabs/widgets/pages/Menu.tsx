import React, { FC } from "react";
import scss from './Widgets.module.scss'

const Menu: FC = () => {
	return (
		<>
			<div className={scss.Menu}>
				<ul id="nav" className={scss.nav}>
					<li>
						<a href="#">Main Item 1</a>
					</li>
					<li>
						<a href="#">Main Item 2</a>
						<ul>
							<li>
								<a href="#">Sub Item</a>
							</li>
							<li>
								<a href="#">Sub Item</a>
							</li>
							<li>
								<a href="#">SUB SUB LIST »</a>
								<ul>
									<li>
										<a href="#">Sub Sub Item 1</a>
									</li>
									<li>
										<a href="#">Sub Sub Item 2</a>
									</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<a href="#">Main Item 3</a>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Menu;
