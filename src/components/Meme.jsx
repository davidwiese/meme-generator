import styles from "../styles/Meme.module.css";
import memesData from "../memesData";
import { useState } from "react";

function Meme() {
	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg",
	});
	const [allMemeImages, setAllMemeImages] = useState(memesData);

	function getMemeImage() {
		const memesArr = allMemeImages.data.memes;
		const randomNumber = Math.floor(Math.random() * memesArr.length);
		const url = memesArr[randomNumber].url;
		setMeme((prevMeme) => ({
			...prevMeme,
			randomImage: url,
		}));
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
							placeholder="One does not simply"
						/>
					</div>
					<div>
						<label className={styles["form--label"]}>Bottom text</label>
						<input
							type="text"
							className={styles["form--input"]}
							placeholder="walk into Mordor"
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
				<div className={styles["meme"]}>
					<img
						src={meme.randomImage}
						className={styles["meme--image"]}
						alt=""
					/>
				</div>
			</main>
		</>
	);
}

export default Meme;
