import { ThemeProvider } from "./contexts/themeContext";
import { LanguageProvider } from "./contexts/languageContext";
import { Outlet } from "react-router-dom";
import "./App.css";

export default function App() {
	return (
		<ThemeProvider>
			<LanguageProvider>
				<Outlet />
			</LanguageProvider>
		</ThemeProvider>
	);
}
