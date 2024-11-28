import { createContext, useContext, useState, type ReactNode } from "react";

type Language = "fr" | "en";

type LanguageContextType = {
	language: Language;
	toggleLanguage: () => void;
	translations: Record<string, Record<Language, string>>;
};

const translations = {
	about: {
		fr: "À propos",
		en: "About",
	},
	projects: {
		fr: "Projets",
		en: "Projects",
	},
	contact: {
		fr: "Contact",
		en: "Contact",
	},
	role: {
		fr: "Développeur Web",
		en: "Web Developer",
	},
	// Add more translations as needed
};

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [language, setLanguage] = useState<Language>("fr");

	const toggleLanguage = () => {
		setLanguage((prev) => (prev === "fr" ? "en" : "fr"));
	};

	return (
		<LanguageContext.Provider
			value={{ language, toggleLanguage, translations }}
		>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLanguage() {
	const context = useContext(LanguageContext);
	if (context === undefined) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
}
