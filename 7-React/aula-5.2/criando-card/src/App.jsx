import posterImg1 from "./assets/img1.jpg";
import posterImg2 from "./assets/img2.webp";
import posterImg3 from "./assets/img3.webp";

import Card from "./components/Cards/index";
import "./App.css";

function App() {
	return (
		<div className="app">
			<Card
				title="pôster: Star Wars (1977)"
				posterImg={posterImg1}
			/>
			<Card
				title="Pôster: Empire Stikes Back (1980)"
				posterImg={posterImg2}
			/>
			<Card
				title="Pôster: Return of the Jedi (1983)"
				posterImg={posterImg3}
			/>
		</div>
	);
}

export default App;
