import { useLanguage } from "../contexts/languageContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projects from "../data/projects.json";
import "./Projects.css";
import { Link } from "react-router-dom";

export default function Projects() {
	const { language } = useLanguage();
	const isMobile = window.innerWidth < 720;

	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: isMobile ? 1 : 3,
		slidesToScroll: 1,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 1000,
		centerMode: !isMobile,
		centerPadding: "0",
		cssEase: "ease-in-out",
		vertical: false,
		verticalSwiping: false,
		responsive: [
			{
				breakpoint: 720,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					vertical: true,
					verticalSwiping: true,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				},
			},
		],
	};

	const about = {
		fr: (
			<>
				<p>
					Développeur web passionné par la création d'applications modernes et
					performantes. Spécialisé dans les technologies JavaScript et React, je
					m'efforce de créer des expériences utilisateur exceptionnelles.
				</p>
				<p>
					Mon objectif ? Appliquer mes compétences dans un environnement
					dynamique et stimulant tout en continuant à apprendre et à
					m'améliorer.
				</p>
				<p>
					<strong>
						Je recherche activement une alternance dans la région rennaise
					</strong>
					, où je pourrai contribuer à des projets innovants tout en apportant
					ma passion et ma créativité à votre équipe. Disponible à partir de
					<strong> février 2025</strong>, je suis ravi d'explorer les
					opportunités qui me permettront d'évoluer professionnellement tout en
					ajoutant de la valeur à votre entreprise.
				</p>
			</>
		),
		en: (
			<>
				<p>
					Passionate about web development, I am dedicated to creating modern
					and efficient applications that transform the user experience.
					Currently training as a Full Stack developer at Wild Code School, I
					specialize in JavaScript and React technologies and am ready to take
					on new challenges.
				</p>
				<br />
				<p>
					My goal? To apply my skills in a dynamic and stimulating environment
					while continuing to learn and improve.
				</p>
				<p>
					<strong>
						I am actively seeking an apprenticeship in the Rennes area
					</strong>
					, where I can contribute to innovative projects while bringing my
					passion and creativity to your team. Available from
					<strong> February 2025</strong>, I’m excited to explore opportunities
					that will allow me to grow professionally while adding value to your
					company.
				</p>
			</>
		),
	};

	const title = {
		fr: "mes projets",
		en: "my projects",
	};

	const description = {
		fr: (
			<>
				<p>
					Passionné par le développement web, je transforme des idées en
					réalisations concrètes à travers des projets innovants utilisant des
					technologies de pointe telles que <strong>React</strong>,{" "}
					<strong>TypeScript</strong>, <strong>JavaScript</strong>,{" "}
					<strong>Vite</strong> et <strong>Express</strong>.
				</p>
				<p>
					Chaque projet représente non seulement un défi unique, mais aussi une
					formidable opportunité d'apprentissage et d'amélioration continue. Je
					m'efforce de concevoir des solutions efficaces et intuitives qui
					répondent aux besoins des utilisateurs tout en intégrant les
					meilleures pratiques de l'industrie.
				</p>
			</>
		),
		en: (
			<>
				<p>
					Passionate about web development, I turn ideas into tangible results
					through innovative projects using cutting-edge technologies such as{" "}
					<strong>React</strong>, <strong>TypeScript</strong>,{" "}
					<strong>JavaScript</strong>, <strong>Vite</strong>, and{" "}
					<strong>Express</strong>.
				</p>
				<br />
				<p>
					Each project not only represents a unique challenge but also a
					tremendous opportunity for learning and continuous improvement. I
					strive to design effective and intuitive solutions that meet user
					needs while incorporating industry best practices.
				</p>
			</>
		),
	};

	return (
		<section id="projects" className="projects">
			<p id="about" className="intro-text">
				{about[language]}
			</p>
			<Link to="/projects">
				<h1>{title[language]}</h1>
			</Link>
			<p className="projects-description">{description[language]}</p>

			<div className="carousel-container">
				<Slider {...settings}>
					{projects.map((project, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<div key={index} className="project-slide">
							<a href={project.link} target="_blank" rel="noopener noreferrer">
								<div className="project-card">
									<img src={project.image} alt={project.title} />
									<h3>{project.title}</h3>
								</div>
							</a>
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
}
