import logo from './logo.svg';
import './App.css';
import GlobalStyle from './GlobalStyle'
import Button from './Components/Button';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Button>Hola</Button>
    </div>
  );
}

export default App;
