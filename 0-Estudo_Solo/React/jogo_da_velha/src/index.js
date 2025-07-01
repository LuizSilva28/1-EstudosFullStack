import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App";

const game = createRoot(document.getElementById("game"));
game.render(
	<StrictMode>
		<App />
	</StrictMode>
);
