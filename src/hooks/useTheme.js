import { useState } from "react";

export function useTheme(){
  let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useState('light');
  
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}
  return [theme, themeToggler]
}