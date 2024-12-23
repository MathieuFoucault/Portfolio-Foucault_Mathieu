import { useLanguage } from "../contexts/languageContext";
import { Github, Linkedin, Mail, MessageCircle, FileText } from "lucide-react";
import "./Contact.css";

export default function Contact() {
	const { language } = useLanguage();

	const links = [
		{
			icon: <Github size={24} />,
			text: "GitHub",
			url: "https://github.com/MathieuFoucault?tab=repositories",
		},
		{
			icon: <Linkedin size={24} />,
			text: "LinkedIn",
			url: "https://www.linkedin.com/in/mathieu-foucault-fullstack-web-dev/",
		},
		{
			icon: <Mail size={24} />,
			text: "Email",
			url: "mailto:foucault.mathieu@free.fr",
		},
		{
			icon: <MessageCircle size={24} />,
			text: "Discord",
			url: "https://discord.com/users/MathieuFoucault",
		},
		{
			icon: <FileText size={24} />,
			text: language === "fr" ? "CV" : "Resume",
			url: "/docs/cv-2024-Foucault-Mathieu-Developpeur-Web.pdf",
			download: true,
		},
	];

	return (
		<section id="contact" className="contact">
			<div className="contact-buttons">
				{links.map((link, index) => (
					<a
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={index}
						href={link.url}
						className="contact-button"
						target={link.download ? "_self" : "_blank"}
						rel="noopener noreferrer"
						download={link.download}
					>
						{link.icon}
						<span>{link.text}</span>
					</a>
				))}
			</div>
		</section>
	);
}
