import { useContext } from "react";
import { TabsContext } from "@/src/providers/TabsProvider";

export const useTabs = () => {
	const value = useContext(TabsContext);

	return value;
};
