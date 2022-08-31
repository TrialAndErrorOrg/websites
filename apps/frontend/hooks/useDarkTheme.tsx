import { useEffect, useState } from "react"

export const useDarkTheme = () => {
  const [darkTheme, setDarkTheme] = useState(false)
  const toggleDarkTheme = (event) => {
    const light = localStorage.getItem("theme") === "dark"
    setDarkTheme(event?.target?.checked ?? !light)
  }

  const storeUserSetPreference = (pref) => {
    localStorage.setItem("theme", pref)
  }
  const root = document.documentElement

  useEffect(() => {
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    )
    setDarkTheme(initialColorValue === "dark")
  }, [])

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        // root.setAttribute("data-theme", "dark")
        root.classList.add("dark")
        storeUserSetPreference("dark")
      } else {
        // root.removeAttribute("data-theme")
        root.classList.remove("dark")
        storeUserSetPreference("light")
      }
    }
  }, [darkTheme])

  return { darkTheme, setDarkTheme, toggleDarkTheme }
}
