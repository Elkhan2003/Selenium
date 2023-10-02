/* eslint-disable */
import React, { FC, useRef } from "react";
import scss from "./Widgets.module.scss";
import { styled } from "@mui/material/styles";
import { Button, TextField } from "@mui/material";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

const ToolTips: FC = () => {
	const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
		<Tooltip {...props} arrow classes={{ popper: className }} />
	))(({ theme }) => ({
		[`& .${tooltipClasses.arrow}`]: {
			color: theme.palette.common.black
		},
		[`& .${tooltipClasses.tooltip}`]: {
			backgroundColor: theme.palette.common.black
		}
	}));

	const positionRef = useRef<{ x: number; y: number }>({
		x: 0,
		y: 0
	});
	const popperRef = useRef<any>(null);
	const areaRef = useRef<HTMLDivElement>(null);

	const handleMouseMove = (event: React.MouseEvent) => {
		positionRef.current = { x: event.clientX, y: event.clientY };

		if (popperRef.current != null) {
			popperRef.current.update();
		}
	};

	return (
		<>
			<div id="toopTipContainer" className={scss.ToolTips}>
				<div id="buttonToolTopContainer">
					<p>Practice Tool Tips</p>
					<BootstrapTooltip
						title="You don't have permission to do this"
						followCursor
					>
						<Button
							id="toolTipButton"
							className={scss.marginTop}
							variant="contained"
							color="success"
							size="medium"
						>
							Hover me to see
						</Button>
					</BootstrapTooltip>
				</div>

				<div id="texFieldToolTopContainer">
					<BootstrapTooltip
						title="You hovered over the text field"
						placement="bottom"
						arrow
						PopperProps={{
							popperRef,
							anchorEl: {
								getBoundingClientRect: () => {
									return new DOMRect(
										positionRef.current.x,
										areaRef.current!.getBoundingClientRect().y,
										0,
										33
									);
								}
							}
						}}
					>
						<TextField
							className={scss.marginTop}
							fullWidth
							variant="outlined"
							size="small"
							type="text"
							id="toolTipTextField"
							label="Hover me to see"
							ref={areaRef}
							onMouseMove={handleMouseMove}
						/>
					</BootstrapTooltip>
				</div>

				<div id="texToolTopContainer" className={scss.marginTop}>
					<BootstrapTooltip title="You hovered over the Contrary">
						<a href="javascript:void(0)">Contrary</a>
					</BootstrapTooltip>{" "}
					Contrary to popular belief, Lorem Ipsum is not simply random text. It
					has roots in a piece of classical Latin literature from 45 BC, making
					it over 2000 years old. Richard McClintock, a Latin professor at
					Hampden-Sydney College in Virginia, looked up one of the more obscure
					Latin words, consectetur, from a Lorem Ipsum passage, and going
					through the cites of the word in classical literature, discovered the
					undoubtable source. Lorem Ipsum comes from sections{" "}
					<BootstrapTooltip title="You hovered over the 1.10.32">
						<a href="javascript:void(0)">1.10.32</a>
					</BootstrapTooltip>{" "}
					and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
					and Evil) by Cicero, written in 45 BC. This book is a treatise on the
					theory of ethics, very popular during the Renaissance. The first line
					of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
					section 1.10.32.
				</div>
			</div>
		</>
	);
};

export default ToolTips;
