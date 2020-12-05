
import { useTheme } from './hooks'
import CurrentTheme from './components/CurrentTheme';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <CurrentTheme />
      
      <h1>DevPira</h1>
      <h1>{theme}</h1>

      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}

export default App;
