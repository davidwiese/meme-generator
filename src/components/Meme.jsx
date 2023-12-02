import styles from "../styles/Meme.module.css";
import memesData from "../memesData";
import { useState } from "react";

function Meme() {
	const [memeImage, setMemeImage] = useState("");

	function getMemeImage() {
		const memesArr = memesData.data.memes;
		const randomNumber = Math.floor(Math.random() * memesArr.length);
		setMemeImage(memesArr[randomNumber].url);
	}

	return (
		<>
			<main>
				<div className={styles["form"]}>
					<div>
						<label className={styles["form--label"]}>Top text</label>
						<input
							type="text"
							className={styles["form--input"]}
							placeholder="Shut up"
						/>
					</div>
					<div>
						<label className={styles["form--label"]}>Bottom text</label>
						<input
							type="text"
							className={styles["form--input"]}
							placeholder="and take my money"
						/>
					</div>
					<button
						onClick={getMemeImage}
						type="submit"
						className={styles["form--button"]}
					>
						Get a new random meme image
					</button>
				</div>
				<div className="meme">
					<img src={memeImage} className="meme--image" alt="" />
				</div>
			</main>
		</>
	);
}

export default Meme;
