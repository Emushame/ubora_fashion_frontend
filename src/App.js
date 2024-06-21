import React from "react";
import { Button } from "antd";
import "./App.css";

function App() {
	return (
		<div className=" flex w-screen 
			h-screen flex-col justify-center 
			gap-1 items-center">

			<h1 className="text-green-500 font-bold">
				Ubora Fashion
			</h1>

			<Button className="bg-[#1677ff]"
				type="primary">
				Un bouton
			</Button>
		</div>
	);
}

export default App;
