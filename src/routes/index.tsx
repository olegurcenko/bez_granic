import React from "react";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "../pages/homepage";

export const AppRouter: React.FC = () => {
	return (
		<Routes>
			<Route path="/" Component={Homepage}/>
		</Routes>
	)
}