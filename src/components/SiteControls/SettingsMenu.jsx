import { useEffect, useRef, useState } from 'react'
import { usePreferences } from '../Preferences/usePreferences.js'

const languages = [
  { value: 'nb', label: 'Norsk' },
  { value: 'en', label: 'English' },
  { value: 'uk', label: 'Українська' },
]

function SettingsMenu() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)
  const { theme, setTheme, language, setLanguage, t } = usePreferences()

  useEffect(() => {
    if (!open) return undefined
    function closeMenu(event) {
      if (event.key === 'Escape' || !menuRef.current?.contains(event.target)) setOpen(false)
    }
    document.addEventListener('keydown', closeMenu)
    document.addEventListener('pointerdown', closeMenu)
    return () => {
      document.removeEventListener('keydown', closeMenu)
      document.removeEventListener('pointerdown', closeMenu)
    }
  }, [open])

  return <div className="settings-menu" ref={menuRef}>
    <button type="button" className="settings-trigger" onClick={() => setOpen(value => !value)} aria-expanded={open} aria-controls="settings-panel" aria-label="Åpne innstillinger"><span /><span /><span /></button>
    {open && <section className="settings-panel" id="settings-panel">
      <p className="settings-kicker">{t.settings}</p>
      <div className="settings-group"><span>{t.language}</span><div className="settings-options settings-options--languages">{languages.map(item => <button type="button" className={language === item.value ? 'is-active' : ''} onClick={() => setLanguage(item.value)} key={item.value}>{item.label}</button>)}</div></div>
      <div className="settings-group"><span>{t.appearance}</span><div className="settings-options"><button type="button" className={theme === 'dark' ? 'is-active' : ''} onClick={() => setTheme('dark')}>◐ {t.dark}</button><button type="button" className={theme === 'light' ? 'is-active' : ''} onClick={() => setTheme('light')}>☀ {t.light}</button></div></div>
    </section>}
  </div>
}
export default SettingsMenu
