import React, { FC } from "react";
import { motion } from "framer-motion";
import scss from "../Tabs.module.scss";
import { useTabs } from "@/src/hooks/useTabs";

export const Windows: FC = () => {
	const { activeTab, setActiveTab, tabs } = useTabs();

	return (
		<>
			<div className={scss.tabs__container}>
				<div className={scss.content}>
					<div className={scss.tabs}>
						<div className={scss.buttons}>
							{tabs.windows.map((tab, index) => (
								<button
									key={index + 1}
									id={tab.id_link}
									onClick={() => {
										setActiveTab(tab.id);
									}}
									className={
										activeTab === tab.id
											? `${scss.button} ${scss.active}`
											: `${scss.button}`
									}>
									{activeTab === tab.id && (
										<motion.div
											layoutId="active-pill"
											className={scss.active}
											style={{
												borderRadius: 12,
											}}
											transition={{ type: "spring", duration: 0.6 }}
										/>
									)}
									<span className={scss.icon}>{tab.icon}</span>
									<span className={scss.label}>{tab.label}</span>
								</button>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
