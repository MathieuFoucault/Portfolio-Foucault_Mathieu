import { useLanguage } from "../contexts/languageContext";
import { useTheme } from "../contexts/themeContext";
import "./Footer.css";

export default function Footer() {
	const { language } = useLanguage();
	const { theme } = useTheme();

	const footer = {
		fr: "Tous Droits Réservés",
		en: "All Rights Reserved",
	};

	return (
		<footer className="footer">
			<p className={theme === "dark" ? "text-light" : ""}>
				©2024 Foucault Mathieu | {footer[language]}
			</p>
		</footer>
	);
}
