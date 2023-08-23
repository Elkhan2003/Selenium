import React, { FC, useState } from "react";
import scss from "./Windows.module.scss";
import {
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	DialogActions
} from "@mui/material";

const ModalDialogs: FC = () => {
	const [open_1, setOpen_1] = useState(false);
	const [open_2, setOpen_2] = useState(false);

	const handleClickOpen = (modalNumber: number) => {
		if (modalNumber === 1) {
			setOpen_1(true);
		} else if (modalNumber === 2) {
			setOpen_2(true);
		}
	};

	const handleClose = (modalNumber: number) => {
		if (modalNumber === 1) {
			setOpen_1(false);
		} else if (modalNumber === 2) {
			setOpen_2(false);
		}
	};

	const renderModal = (modalNumber: number, title: string, content: string) => (
		<Dialog
			open={modalNumber === 1 ? open_1 : open_2}
			onClose={() => handleClose(modalNumber)}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogTitle id="alert-dialog-title">{title}</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-description">
					{content}
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={() => handleClose(modalNumber)}>Close</Button>
			</DialogActions>
		</Dialog>
	);

	return (
		<>
			{renderModal(1, "Small modal", "Small modal content")}
			{renderModal(2, "Large modal", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptas id alias! A repellat dolore aut quo deserunt porro nam dolorum. Labore, sunt! Odio, amet reprehenderit. Eligendi ex deserunt quibusdam. Beatae repudiandae distinctio quis ab neque perspiciatis recusandae eius magnam, corrupti doloremque nam molestias quam, enim illum ad. Obcaecati, exercitationem sapiente pariatur ipsa iusto deleniti minima in minus velit fugiat! Illum iusto ipsa, eligendi perferendis neque consequatur est mollitia perspiciatis voluptatibus exercitationem consectetur eos obcaecati cupiditate quibusdam ad alias voluptate laborum! Itaque assumenda asperiores nostrum recusandae vero? Neque, et illum! Rem, maiores! Voluptate ratione doloremque autem, impedit modi consectetur voluptates ipsam tenetur excepturi perferendis culpa dicta temporibus! Ut ea architecto suscipit consequatur, iusto at accusantium laboriosam libero est maxime harum? Reprehenderit, consequuntur animi. Vel, distinctio, velit, error consequatur fuga eius vero necessitatibus ex impedit consectetur dolore cumque alias ut eligendi nihil quis quia libero blanditiis accusantium fugit accusamus nobis? Explicabo! In eveniet, provident quasi incidunt molestias consequatur laboriosam sed iusto. Vel sit obcaecati animi deserunt quasi inventore doloribus rem veniam dignissimos quia vero, sunt earum, voluptas molestias, architecto repellat mollitia. Doloremque quas inventore sit temporibus et ea est, accusamus ex similique, ut, esse deserunt eveniet molestias molestiae debitis voluptatibus alias facere voluptas numquam? Quae consequuntur repellat pariatur excepturi maiores similique. Reiciendis nostrum qui eos, consectetur quibusdam accusantium at voluptatem dolore quo veniam ex provident alias tenetur sit est, similique porro. Quam facilis id tenetur corporis nemo soluta dolores doloribus et! Aspernatur, laudantium atque? Iure officia ea amet itaque asperiores voluptatibus aliquam nobis? Nobis dicta consectetur aut amet explicabo animi quidem soluta! Soluta recusandae eius fugiat maiores doloribus illo. Maiores accusamus voluptatibus autem quaerat nesciunt ipsam quo fuga, facilis quibusdam? Quam accusamus ullam dolores voluptate perspiciatis sunt impedit qui dolore eius ducimus. Vitae deleniti, sapiente expedita laborum eaque modi accusantium at. Iure officia ea amet itaque asperiores voluptatibus aliquam nobis?")}
			<div className={scss.ModalDialogs}>
				<div className={scss.title}>Click on button to see modal</div>
				<div className={scss.buttons}>
					<Button
						id="showSmallModal"
						variant="contained"
						size="medium"
						onClick={() => handleClickOpen(1)}
					>
						Small modal
					</Button>
					<Button
						id="showLargeModal"
						variant="contained"
						size="medium"
						onClick={() => handleClickOpen(2)}
					>
						Large modal
					</Button>
				</div>
			</div>
		</>
	);
};

export default ModalDialogs;
