
import { Route, Routes } from 'react-router-dom';

import './App.css';
import PokemonFetcherPage from './pages/PokemonFetcherPage';
import Navbar from './components/NavBar';
import { Outlet } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ContactPage from './pages/ContactPage';
// import BusinessCardParent from './BusinessCardParent';


// React Router parts:
// - BrowserRouter needs to exist higher up in the component tree than whatever we are writing Routes in
// - Routes need to exist, determine what content is rendered on which route eg. /about for <About /> 
// - Route specifies URL and component, belongs to Routes


function App() {
  return (
    <div className="App">

    <h1>All pges stuff here</h1>
    <Navbar />

     <Routes>
      <Route path="/" element={<Home/>} /> 
      {/* <Route path="/about" element={<About/>}> 

        <Route path="/about/contact" element={<ContactPage/>} />

      </Route> */}

      {/* <Route path="/about" element={<About/>}> 

        <Route path="contact" element={<ContactPage/>} />

      </Route>
      </Routes>  */}
      <Route path="/about" element={<Outlet />}>
          <Route path="/about/" element={<About />} />
          <Route path="/about/contact" element={<ContactPage />} />
        </Route>

        <Route path="/pokemon" element={<PokemonFetcherPage />} />
        <Route path="/pokemon/:pokemonId" element={<PokemonFetcherPage />} />
    </Routes>
    </div>
  );
}

export default App;
