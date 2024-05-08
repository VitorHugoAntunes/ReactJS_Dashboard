import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default function useSidebarContext() {
  const { activeTheme, changeTheme } = useContext(ThemeContext);

  return {
    activeTheme, changeTheme
  }
}