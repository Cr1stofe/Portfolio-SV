import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProjectOne } from './pages/ProjectOne';
import { ProjectTwo } from './pages/ProjectTwo';
import { ProjectThree } from './pages/ProjectThree';

interface ThemeProps {
    theme: string
    setTheme: (theme: string) => void
}

export function Router({theme, setTheme}: ThemeProps) {
    return (
        <Routes>
      		<Route path="/" element = {
                <Home 
                    theme={theme}
                    setTheme={setTheme}
                />
            }
            />
     		<Route path="/project1" element={<ProjectOne />} />
     		<Route path="/project2" element={<ProjectTwo />} />
     		<Route path="/project3" element={<ProjectThree />} />
   		</Routes>
    )
}