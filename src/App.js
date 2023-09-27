import { BrowserRouter as Router, Routes, Route, Switch} from 'react-router-dom';
import './App.css';
import GlobalStyle from './GlobalStyle'
import Home from './pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Header />
          <Switch>
            <Routes >
              <Route path='/' element={ <Home/> } />
            </Routes> 
          </Switch>
        <Footer />
      </Router>
    </div>
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