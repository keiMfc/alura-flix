import './App.css';
import GlobalStyle from './GlobalStyle'
import { BrowserRouter } from 'react-router-dom';
import Banner from './Components/Banner';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <GlobalStyle />
      <Header />
      <Banner />
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;


    /*  Estructura de las rutas (pantallas) 
  
  <Switch>
        <Route path'/notes'>
            <Notes />
        </Route>
     <Switch>
    */