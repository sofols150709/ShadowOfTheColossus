import { createContext, useContext } from 'react'

export const PreferencesContext = createContext(null)

export function usePreferences() {
  return useContext(PreferencesContext)
}
