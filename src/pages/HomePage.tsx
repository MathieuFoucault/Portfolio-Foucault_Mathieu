import { useTheme } from "../contexts/themeContext";
import Projects from "../components/Projects";
import "./HomePage.css";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function HomePage() {
	const { theme } = useTheme();

	return (
		<div className={`homepage theme-${theme}`}>
			<Header />
			<main>
				<Projects />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}
