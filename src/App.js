
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import { Container} from '@mui/material';
import Trending from './pages/trending/Trending';
import Movies from './pages/movies/Movies';
import Series from './pages/series/Series';
import Search from './pages/search/Search';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header />
      <main className='main-sec'>
        <Container>
          <Routes>
            <Route path='/' exact  element={<Trending/>}></Route>
            <Route path='/movies' element={<Movies/>}></Route>
            <Route path='/series' element={<Series/>}></Route>
            <Route path='/search' element={<Search/>}></Route>
          </Routes>
        </Container>
      </main>
      <Navbar />
    </BrowserRouter>
    </div>
  );
}

export default App;
