import trollface from "../assets/trollface.png";
import styles from "../styles/Header.module.css";

function Header() {
	return (
		<>
			<header>
				<div className={styles["header-left"]}>
					<img src={trollface} alt="" />
					<h2>Meme Generator</h2>
				</div>
				<div className={styles["header-right"]}>
					<p>© David Wiese</p>
				</div>
			</header>
		</>
	);
}

export default Header;
