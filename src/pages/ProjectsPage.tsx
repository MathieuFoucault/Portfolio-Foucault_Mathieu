import { useTheme } from "../contexts/themeContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectsList from "../components/ProjectsList";

export default function ProjectsPage() {
	const { theme } = useTheme();

	return (
		<div className={`projects-page theme-${theme}`}>
			<Header />
			<ProjectsList />
			<Footer />
		</div>
	);
}
