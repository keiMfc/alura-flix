import logo from './logo.svg';
import './App.css';
import GlobalStyle from './GlobalStyle'
import Banner from './Components/Banner';
import Button from './Components/Button';
import Header from './Components/Header';
import TitleCategory from './Components/TitleCategory';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Banner />
      <Footer />
      <Button>Hola</Button>
      <TitleCategory/>

    </div>
  );
}

export default App;
