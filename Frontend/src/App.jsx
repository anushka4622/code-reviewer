import { useState, createContext } from 'react'
import Routes from './routes/Routes'

export const ThemeContext = createContext()

const themes = {
  light: {
    background: "#f8fafc",
    cardBg: "linear-gradient(145deg, #ffffff, #f1f5f9)",
    cardBorder: "#e2e8f0",
    iconBg: "linear-gradient(145deg, #e0f2fe, #bfdbfe)",
    iconColor: "#2563eb",
    textPrimary: "#1e293b",
    textSecondary: "#64748b"
  },
  dark: {
    background: "#1e293b",
    cardBg: "linear-gradient(145deg, #334155, #1e293b)",
    cardBorder: "#475569",
    iconBg: "linear-gradient(145deg, #3b82f6, #2563eb)",
    iconColor: "#ffffff",
    textPrimary: "#f8fafc",
    textSecondary: "#cbd5e1"
  },
  nature: {
    background: "#f0fdf4",
    cardBg: "linear-gradient(145deg, #ffffff, #ecfdf5)",
    cardBorder: "#d1fae5",
    iconBg: "linear-gradient(145deg, #bbf7d0, #86efac)",
    iconColor: "#15803d",
    textPrimary: "#166534",
    textSecondary: "#047857"
  }
}

function App() {
  const [currentTheme, setCurrentTheme] = useState("light")

  return (
    <ThemeContext.Provider value={{ theme: themes[currentTheme], setTheme: setCurrentTheme, themes }}>
      <Routes/>
    </ThemeContext.Provider>
  )
}

export default App
