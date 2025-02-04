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
					Développeur web passionné, je suis actuellement en formation
					Développeur Web Fullstack jusqu'au 21 février 2025. Je suis à la
					recherche d'un poste ou d’un stage pour mettre en pratique mes
					compétences et continuer à évoluer.
				</p>
				<br />
				<p>
					Mon parcours m'a permis d'acquérir des compétences techniques solides,
					que je suis impatient de mettre à profit au sein de votre équipe. Je
					suis convaincu que notre collaboration serait mutuellement
					enrichissante, me permettant de m’immerger dans vos procédés tout en
					contribuant activement à vos projets.
				</p>
				<br />
				<p>
					Avec 13 années d'expérience dans le commerce et la gestion, je possède
					des compétences en gestion de projet et en animation d'équipe qui
					seront des atouts précieux dans mon rôle de développeur web. Je
					m'engage à travailler avec rigueur et professionnalisme, en veillant à
					toujours satisfaire vos clients.
				</p>
				<br />
				<p>
					Je serais ravi de discuter de la manière dont je pourrais apporter ma
					contribution à votre équipe lors d'un entretien. Mes compétences
					techniques, associées à ma passion pour le développement, pourraient
					vraiment ajouter de la valeur à votre entreprise.
				</p>
			</>
		),
		en: (
			<>
				<p>
					A passionate web developer, I am currently training as a Full Stack
					Developer until February 21, 2025. I am seeking a position or
					internship to put my skills into practice and continue my growth.
				</p>
				<p>
					My background has equipped me with solid technical skills, which I am
					eager to leverage within your team. I believe our collaboration would
					be mutually beneficial, allowing me to immerse myself in your
					processes while actively contributing to your projects.
				</p>
				<p>
					With 13 years of experience in commerce and management, I possess
					project management and team leadership skills that would be valuable
					in my role as a web developer. I am committed to working with rigor
					and professionalism, always ensuring client satisfaction.
				</p>
				<p>
					I would be delighted to discuss how I could contribute to your team's
					success in an interview. My technical skills, combined with my passion
					for development, could truly add value to your company.
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
					Passionné par le développement web, j'ai le plaisir de donner vie à
					des idées à travers des projets variés, en utilisant des technologies
					telles que
					<strong>React</strong>, <strong>TypeScript</strong>,{" "}
					<strong>JavaScript</strong>,<strong>Vite</strong>,{" "}
					<strong>Express</strong>, <strong>MySQL</strong> et
					<strong> Tailwind</strong>.
				</p>
				<br />
				<p>
					Chaque projet représente pour moi non seulement un défi, mais aussi
					une opportunité d'apprendre et de m'améliorer. Je m'efforce de
					développer des solutions simples et efficaces qui répondent aux
					besoins des utilisateurs, tout en intégrant les meilleures pratiques
					de l'industrie.
				</p>
			</>
		),
		en: (
			<>
				<p>
					A passionate web developer, I enjoy bringing ideas to life through a
					variety of projects, using technologies such as <strong>React</strong>
					,<strong>TypeScript</strong>, <strong>JavaScript</strong>,{" "}
					<strong>Vite</strong>,<strong>Express</strong>, <strong>MySQL</strong>
					, and <strong>Tailwind</strong>.
				</p>
				<p>
					Each project not only poses a unique challenge but also provides me
					with an opportunity to learn and grow. I strive to create simple and
					effective solutions that address user needs while adhering to industry
					best practices.
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
