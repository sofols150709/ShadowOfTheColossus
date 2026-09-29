import { useEffect, useMemo, useState } from 'react'
import { PreferencesContext } from './usePreferences.js'
import { translate } from '../../i18n/translate.js'

const getInitialTheme = () => localStorage.getItem('sotc-theme') || 'dark'
const getInitialLanguage = () => localStorage.getItem('sotc-language') || 'nb'
const translations = {
  nb: { settings: 'Innstillinger', language: 'Språk', appearance: 'Utseende', dark: 'Mørk', light: 'Lys', home: 'Hjem', gallery: 'Galleri', map: 'Kart', lore: 'Lore', theories: 'Fan-teorier' },
  en: { settings: 'Settings', language: 'Language', appearance: 'Appearance', dark: 'Dark', light: 'Light', home: 'Home', gallery: 'Gallery', map: 'Map', lore: 'Lore', theories: 'Fan theories' },
  uk: { settings: 'Налаштування', language: 'Мова', appearance: 'Вигляд', dark: 'Темна', light: 'Світла', home: 'Головна', gallery: 'Галерея', map: 'Мапа', lore: 'Історія', theories: 'Фан-теорії' },
}

function PreferencesProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)
  const [language, setLanguage] = useState(getInitialLanguage)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('sotc-theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = language
    localStorage.setItem('sotc-language', language)
  }, [language])

  const value = useMemo(() => ({ theme, setTheme, language, setLanguage, t: translations[language], tr: text => translate(language, text) }), [theme, language])
  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>
}

export default PreferencesProvider
