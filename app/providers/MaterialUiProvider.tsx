"use client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { FC, ReactNode, useState, useEffect } from "react";

interface ProvidersType {
	children: ReactNode;
}

const MaterialUiProvider: FC<ProvidersType> = ({ children }) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	const darkTheme: any = createTheme({
		palette: {
			mode: "light"
		}
	});

	return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};

export default MaterialUiProvider;
