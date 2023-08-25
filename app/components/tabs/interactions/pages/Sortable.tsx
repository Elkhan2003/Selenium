import { FC, useState } from "react";
import scss from "./Interactions.module.scss";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
	closestCenter,
	DndContext,
	PointerSensor,
	useSensor,
	DragEndEvent
} from "@dnd-kit/core";
import {
	arrayMove,
	SortableContext,
	verticalListSortingStrategy
} from "@dnd-kit/sortable";

interface UserComponentProps {
	id: string;
	name: string;
}

const UserComponent: FC<UserComponentProps> = ({ id, name }) => {
	const {
		setNodeRef,
		attributes,
		listeners,
		transition,
		transform,
		isDragging
	} = useSortable({ id });

	const style = {
		transition,
		transform: CSS.Transform.toString(transform),
		opacity: isDragging ? 0.5 : 1
	};

	return (
		<div
			ref={setNodeRef}
			{...attributes}
			{...listeners}
			className={scss.Sortable__item}
			style={style}
		>
			{name}
		</div>
	);
};

const Sortable: FC = () => {
	const [items, setItems] = useState([
		{
			id: "1",
			name: "Manoj"
		},
		{
			id: "2",
			name: "John"
		},
		{
			id: "3",
			name: "Ronaldo"
		},
		{
			id: "4",
			name: "Harry"
		},
		{
			id: "5",
			name: "Jamie"
		}
	]);

	const sensors = [useSensor(PointerSensor)];

	const handleDragEnd = ({ active, over }: DragEndEvent) => {
		if (!over) {
			return;
		}

		if (active.id !== over.id) {
			setItems((items) => {
				const oldIndex = items.findIndex((item) => item.id === active.id);
				const newIndex = items.findIndex((item) => item.id === over.id);

				return arrayMove(items, oldIndex, newIndex);
			});
		}
	};

	return (
		<div id="demo-tabpane-list" className={scss.Sortable}>
			<DndContext
				sensors={sensors}
				collisionDetection={closestCenter}
				onDragEnd={handleDragEnd}
			>
				<SortableContext
					items={items.map((item) => item.id)}
					strategy={verticalListSortingStrategy}
				>
					{items.map((item) => (
						<UserComponent {...item} key={item.id} />
					))}
				</SortableContext>
			</DndContext>
		</div>
	);
};

export default Sortable;
