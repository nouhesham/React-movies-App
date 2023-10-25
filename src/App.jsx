import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./Components/Movies/Movies";
import Home from "./Components/Home/Home";
import Tvshows from "./Components/Tvshows/Tvshows";
import Celeb from "./Components/Celeb/Celeb";
import Blog from "./Components/Blog/Blog";
import Navbarsection from "./Components/Navbar/Navbar";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
<style></style>;
function App() {
  return (
    <BrowserRouter>
      <Navbarsection />
      <Routes>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tvshows" element={<Tvshows />}></Route>
        <Route path="/celeb" element={<Celeb />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route
          path="/movies/:media_type/:id"
          element={<MovieDetails />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;