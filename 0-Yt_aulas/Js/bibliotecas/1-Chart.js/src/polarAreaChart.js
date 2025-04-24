import Chart, { Legend } from "chart.js/auto";
//import { getRelativePosition } from "chart.js/helpers";
import { Tooltip } from "chart.js";

const phrases = [
	"A ambição me impulsiona a alcançar meus objetivos mais audaciosos.",
	"A assertividade é fundamental para defender minhas ideias e necessidades.",
	"A facilitação garante que os processos fluam de forma eficiente e colaborativa.",
	"A comunicação clara e eficaz é a chave para construir relacionamentos sólidos.",
	"A flexibilidade me permite adaptar-me a diferentes situações e desafios.",
	"A influência positiva inspira e motiva as pessoas ao meu redor.",
	"A iniciativa me leva a agir proativamente e buscar soluções inovadoras.",
	"A reflexão profunda me ajuda a tomar decisões mais conscientes e ponderadas.",
	"A sociabilidade me permite construir conexões significativas e ampliar minha rede.",
	"A capacidade analítica me permite identificar padrões e resolver problemas complexos.",
	"O pensamento conceitual me ajuda a compreender ideias abstratas e desenvolver novas teorias.",
	"O pensamento criativo me permite gerar soluções originais e inovadoras.",
	"O planejamento e organização me ajudam a alcançar meus objetivos de forma eficiente.",
	"A consideração pelos outros demonstra empatia e respeito pelas diferenças.",
	"A estabilidade emocional me permite lidar com desafios de forma equilibrada e resiliente.",
	"A tomada de riscos calculados me leva a explorar novas oportunidades e alcançar o sucesso.",
];

/*
	{
	Função para criar uma animação para as frases:
	1. precisa utilizar o setInterval() para a repetição do córdigo em intervalos de tempo;
	2. preciso das frases e elas tem que serem divididas em caracteres, que quando unidos geram a frase;
	3. armazenar os caracteres em um array para interar sobre ele, ou usar algum método de iteração por string;
	4. durante a iteração, cada elemento que estiver sendo iterado executara o bloco de  código e tera um tempo até que o próximo elemento a ser iterado execute o bloco de código;
	5. o bloco de código a ser executado em cada iteração, irá salvar o elemento da vez em uma váriavel de exibição que terá seu valor lido e exibido na tela, e a cada iteração, ou seja a cada novo valor que esta variavel de exibição receber, a exibição na tela será atualizada;
	6. essa váriaval de exibição, terá seu valor resetado sempre que uma nova frase for ser criada;
	
	}
*/
function scribePhrases(phrase) {
	const textContainer = document.getElementById("descriptiveText");
	let text = `${phrase}`;
	let i = 0;
	let id = null;

	let newText = "";
	clearInterval(id);
	id = setInterval(frame, 70);
	function frame() {
		let char = text.charAt(i);
		if (newText.length === text.length) {
			clearInterval(id);
		}
		newText += char;
		textContainer.textContent = `${newText}`;
		i++;
	}
}

function createSquare(value) {
	const square = document.getElementById("square");
	const textRemove = document.getElementById("descriptiveText");
	if (textRemove) {
		console.log("teste");
		square.removeChild(textRemove);
	}

	const textContainer = document.createElement("p");
	textContainer.className = "descriptiveText";
	textContainer.id = "descriptiveText";
	square.appendChild(textContainer);
	scribePhrases(phrases[value]);
}

// Tooltip.positioners.myCustomPositioner = function (elements, eventPosition) {
// 	const tooltip = this;

// 	return {
// 		x: 200,
// 		y: 800,
// 	};
// };
const getOrCreateLegendList = (chart, id) => {
	const legendContainer = document.getElementById(id);
	let listContainer = legendContainer.querySelector("ul");

	if (!listContainer) {
		listContainer = document.createElement("ul");
		listContainer.style.display = "flex";
		listContainer.style.flexWrap = "wrap";
		listContainer.style.justifyContent = "space-between";
		listContainer.style.flexDirection = "row";
		listContainer.style.marginBottom = 0;
		listContainer.style.padding = 0;
		legendContainer.appendChild(listContainer);
	}

	return listContainer;
};

const htmlLegendPlugin = {
	id: "htmlLegend",
	afterUpdate(chart, args, options) {
		const ul = getOrCreateLegendList(chart, options.containerID);
		while (ul.firstChild) {
			ul.firstChild.remove();
		}

		const items = chart.options.plugins.legend.labels.generateLabels(chart);

		items.forEach((item) => {
			const li = document.createElement("li");
			li.style.alignItems = "center";
			li.style.cursor = "pointer";
			li.style.display = "flex";
			li.style.flexDirection = "row";
			li.style.margin = "0px 0px 4px 10px";
			li.onclick = () => {
				const { type } = chart.config;
				if (type === "polarArea") {
					chart.toggleDataVisibility(item.index);
				} else {
					chart.setDatasetVisibility(
						item.datasetIndex,
						!chart.isDatasetVisible(item.datasetIndex)
					);
				}
				chart.update();
			};
			const boxSpan = document.createElement("span");
			boxSpan.style.background = item.fillStyle;
			boxSpan.style.borderColor = item.strokeStyle;
			boxSpan.style.borderWidth = item.lineWidth + "px";
			boxSpan.style.display = "inline-block";
			boxSpan.style.flexShrink = 0;
			boxSpan.style.height = "20px";
			boxSpan.style.marginRight = "10px";
			boxSpan.style.width = "20px";

			const textContainer = document.createElement("p");
			textContainer.style.color = item.fontColor;
			textContainer.style.margin = 0;
			textContainer.style.padding = 0;
			textContainer.style.textDecoration = item.hidden
				? "line-through"
				: "";

			const text = document.createTextNode(item.text);
			textContainer.appendChild(text);

			li.appendChild(boxSpan);
			li.appendChild(textContainer);
			ul.appendChild(li);
		});
	},
};

export async function generateGraph() {
	const graphicPolarAreaChart = document.getElementById("polarAreaChart");
	const data = {
		labels: [
			"Ambição",
			"Assertividade",
			"Facilitação",
			"Comunicação",
			"Flexibilidade",
			"Influência",
			"Iniciativa",
			"Reflexão",
			"Sociabilidade",
			"Capacidade analitica",
			"Pensamento conceitual",
			"Pensamento criativo",
			"Planejamento e Organização",
			"consideração pelos outros",
			"Estabilidade emocional",
			"Tomada de riscos",
		],
		datasets: [
			{
				// label: "My First Dataset",
				data: [
					84.62, 73.25, 77.8, 73.25, 80.07, 64.16, 75.53, 53.72,
					84.62, 54.37, 89.16, 91.43, 91.43, 53.72, 82.34, 68.7,
				],
				backgroundColor: [
					"rgb(136, 81, 57)",
					"rgb(243, 142, 75)",
					"rgb(33, 34, 32)",
					"rgb(24, 83, 56)",
					"rgb(60, 170, 32)",
					"rgb(112, 53, 43)",
					"rgb(66, 207, 195)",
					"rgb(135, 236, 95)",
					"rgb(33, 197, 162)",
					"rgb(170, 82, 23)",
					"rgb(22, 110, 103)",
					"rgb(54, 163, 235)",
					"rgb(83, 81, 228)",
					"rgb(12, 52, 78)",
					"rgb(118, 248, 118)",
					"rgb(247, 245, 128)",
				],
			},
		],
	};

	const chart = new Chart(graphicPolarAreaChart, {
		type: "polarArea",
		data: data,
		responsive: true,
		backgroundColor: "rgb(255, 251, 251)",
		borderWidth: 3,
		options: {
			maintainAspectRatio: false,

			events: [
				"mousemove",
				"mouseout",
				"click",
				"touchstart",
				"touchmove",
			],

			plugins: {
				htmlLegend: {
					// ID of the container to put the legend in
					containerID: "legend-container",
				},
				legend: {
					display: false,
				},
			},

			onClick: (e, elements, chart) => {
				const value = elements[0].index;
				createSquare(value);
			},
		},
		plugins: [htmlLegendPlugin],
	});
}
