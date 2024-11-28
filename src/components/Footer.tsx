import { useLanguage } from "../contexts/languageContext";
import "./Footer.css";

export default function Footer() {
	const { language } = useLanguage();
	const footer = {
		fr: "Tous Droits Réservés",
		en: "All Rights Reserved",
	};
	return (
		<footer className="footer">
			<p>©2024 Foucault Mathieu | {footer[language]}</p>
		</footer>
	);
}
