
import { useState, useEffect } from "react";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/card";
import { ThemeProvider } from "./contexts/theme";

function App() {
  const [themeMode, setThemeMode] = useState('light')

  const darkTheme = () =>{
    setThemeMode('dark')
  }

  const lightTheme = () =>{
    setThemeMode('light')
  }

  useEffect(() => {
  document.querySelector('html').classList.remove('dark', 'light');
  document.querySelector('html').classList.add(themeMode);
}, [themeMode]);
  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="p-4 bg-gray-100 dark:bg-gray-900 dark:text-white">
  Dark/Light Test
</div>
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
<div className="bg-white dark:bg-black text-black dark:text-white p-4">
  Hello World
</div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App;
