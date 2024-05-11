import React from "react";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "../pages/homepage";
import { Service } from "../pages/services";

export const AppRouter: React.FC = () => {
	return (
		<Routes>
			<Route path="/" Component={Homepage}/>
			<Route path="/definition" Component={Service}/>
		</Routes>
	)
}