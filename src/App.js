import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Page404 from './pages/Pages404';
import Header from './components/Header';
import Post from './pages/Post';
import Categoria from './pages/Categoria';


function App() {
  return (
   <Router>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Sobre' element={<Sobre />} /> 
        <Route path='/posts/:id' element={<Post />} />
        <Route path='/categoria/:id/*' element={<Categoria />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
   </Router>
  );
}

export default App;
