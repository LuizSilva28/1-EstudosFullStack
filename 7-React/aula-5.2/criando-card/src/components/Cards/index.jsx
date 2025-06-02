/* eslint-disable no-undef */

import Button from "./Button";
import styles from "./style.module.css";

export default function Card(props) {
	return (
		<div className={styles.container}>
			<img
				src={props.posterImg}
				alt="Star Wars poster"
				className={styles.poster}
			/>
			<div>
				<h2>{props.title}</h2>
				<p>
					Um pôster decorativo épico do filme Star Wars, com moldura
					de MDF e tamanho A3. Uma ótima recordação de um dos mais
					icônicos filmes de todos os tempos. Este clássico pôster
					trará aventura, nostalgia e a magia de Star Wars para
					qualquer lugar que você decidir pendurar. Não perca a chance
					de adicionar essa linda memória ao seu acervo!
				</p>
				<Button />
			</div>
		</div>
	);
}
