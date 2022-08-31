import { useEffect, useState } from "react"

export const useDarkTheme = () => {
  const [darkTheme, setDarkTheme] = useState(false)
  const toggleDarkTheme = (event: any) => {
    const light = localStorage.getItem("theme") === "dark"
    setDarkTheme(event?.target?.checked ?? !light)
  }

  const storeUserSetPreference = (pref: string) => {
    localStorage.setItem("theme", pref)
  }
  const root = globalThis.document
    ? globalThis.document?.documentElement
    : undefined

  useEffect(() => {
    const initialColorValue = root?.style?.getPropertyValue(
      "--initial-color-mode"
    )
    setDarkTheme(initialColorValue === "dark")
  }, [root?.style])

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        // root.setAttribute("data-theme", "dark")
        root?.classList?.add("dark")
        storeUserSetPreference("dark")
      } else {
        // root.removeAttribute("data-theme")
        root?.classList?.remove("dark")
        storeUserSetPreference("light")
      }
    }
  }, [darkTheme, root?.classList])

  return { darkTheme, setDarkTheme, toggleDarkTheme }
}
