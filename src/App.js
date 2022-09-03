import './App.css';
import NavBar from "./components/NavBar/NavBar";
import MovieListContainer from './components/MovieListContainer/MovieListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MovieDetail from "./components/MovieDetail/MovieDetail";

function App() {
  return (
    <BrowserRouter>

      <NavBar/>
      <Routes>
        <Route path="/" element={<MovieListContainer/>}/>
        <Route path="/detail/:movieID" element={<MovieDetail />}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
