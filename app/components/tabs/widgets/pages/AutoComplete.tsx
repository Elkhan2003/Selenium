import React, { FC } from "react";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const AutoComplete: FC = () => {
	return (
		<Stack spacing={2} sx={{ width: 500 }}>
			<Autocomplete
				multiple
				id="size-small-outlined-multi"
				size="small"
				options={data}
				getOptionLabel={(option) => option.title}
				defaultValue={[data[5]]}
				renderInput={(params) => (
					<TextField
						{...params}
						label="Type multiple color names"
						placeholder="Favorites"
					/>
				)}
			/>
			<Autocomplete
				id="size-small-outlined"
				size="small"
				options={data}
				getOptionLabel={(option) => option.title}
				defaultValue={data[5]}
				renderInput={(params) => (
					<TextField
						{...params}
						label="Type single color name"
						placeholder="Favorites"
					/>
				)}
			/>
		</Stack>
	);
};
export default AutoComplete;

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const data = [
	{ title: "Red" },
	{ title: "Green" },
	{ title: "Blue" },
	{ title: "Yellow" },
	{ title: "Orange" },
	{ title: "Purple" },
	{ title: "Pink" },
	{ title: "Brown" },
	{ title: "Black" },
	{ title: "White" },
	{ title: "Gray" },
	{ title: "Cyan" },
	{ title: "Magenta" },
	{ title: "Lime" },
	{ title: "Teal" },
	{ title: "Silver" },
	{ title: "Gold" },
	{ title: "Indigo" },
	{ title: "Violet" },
	{ title: "Turquoise" },
	{ title: "Maroon" },
	{ title: "Beige" },
	{ title: "Mint" },
	{ title: "Olive" },
	{ title: "Navy" },
	{ title: "Aqua" },
	{ title: "Periwinkle" },
	{ title: "Lavender" },
	{ title: "Salmon" },
	{ title: "Chartreuse" },
	{ title: "Coral" },
	{ title: "Khaki" },
	{ title: "Plum" },
	{ title: "Fuchsia" },
	{ title: "Aquamarine" },
	{ title: "Ruby" },
	{ title: "Sapphire" },
	{ title: "Emerald" },
	{ title: "Topaz" },
	{ title: "Amber" },
	{ title: "Onyx" },
	{ title: "Pearl" },
	{ title: "Jade" },
	{ title: "Opal" },
	{ title: "Bronze" },
	{ title: "Copper" },
	{ title: "Rose" },
	{ title: "Slate" },
	{ title: "Sunset" },
	{ title: "Sky" },
	{ title: "Lilac" },
	{ title: "Peach" },
	{ title: "Mauve" },
	{ title: "Midnight" },
	{ title: "Tangerine" },
	{ title: "Chocolate" },
	{ title: "Honey" },
	{ title: "Moss" },
	{ title: "Crimson" },
	{ title: "Cobalt" },
	{ title: "Azure" },
	{ title: "Rust" },
	{ title: "Carnation" },
	{ title: "Ivory" },
	{ title: "Lemon" },
	{ title: "Burgundy" },
	{ title: "Marigold" },
	{ title: "Charcoal" },
	{ title: "Platinum" },
	{ title: "Amethyst" }
];
