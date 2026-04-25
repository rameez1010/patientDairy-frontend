import { BrowserRouter } from 'react-router-dom';
import { ThemeModeProvider } from './context/ThemeContext';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <ThemeModeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeModeProvider>
  );
}

export default App;
