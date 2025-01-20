import { useLanguage } from "../contexts/languageContext";
import projects from "../data/projects.json";
import "./ProjectsList.css";

export default function ProjectsList() {
	const { language } = useLanguage();

	const title = {
		fr: "Mes projets",
		en: "My projects",
	};

	return (
		<div className="projects-list">
			<h1>{title[language]}</h1>
			<ul>
				{projects.map((project) => (
					<li key={project.id}>
						<img
							src={project.image}
							alt={project.title}
							className="project-image"
						/>
						<div className="project-details">
							<h3>{project.title}</h3>
							<a
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								className="project-link"
							>
								Visitez le projet
							</a>
							<p>{project.languages.join(", ")}</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
