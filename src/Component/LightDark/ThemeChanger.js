import React from 'react'
import useLocalStroage from './useThemeChanger'

const ThemeChanger = () => {
    const [theme ,setTheme] = useLocalStroage("mode","dark")
console.log(`i am theme ${theme}`);

  return (
    <div>ThemeChanger</div>
  )
}

export default ThemeChanger