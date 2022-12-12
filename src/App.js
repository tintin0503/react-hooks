import Form from './components/Form';
import ThemeContext from './theme-context';

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  );
}

export default App;
