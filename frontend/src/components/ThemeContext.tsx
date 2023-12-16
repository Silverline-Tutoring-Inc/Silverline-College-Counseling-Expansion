import React, { useState, useEffect, createContext, useContext } from "react";

type Theme = "#181A1B" | "#D6D3CD";
type ThemeContextType = {
	theme: Theme;
	toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type ThemeProviderProps = {
	children: React.ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const [theme, setTheme] = useState<Theme>("#181A1B");

	useEffect(() => {
		document.body.className = theme;
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "#181A1B" ? "#D6D3CD" : "#181A1B"));
		console.log("Theme: " + theme);
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};
