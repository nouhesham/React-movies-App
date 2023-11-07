import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./Components/Movies/Movies";
import Home from "./Components/Home/Home";
import Tvshows from "./Components/Tvshows/Tvshows";
import Navbarsection from "./Components/Navbar/Navbar";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import Footer from "./Components/Footer/Footer";

<style></style>;
function App() {
  return (
    <BrowserRouter>
      <Navbarsection />
      <Routes>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tvshows" element={<Tvshows />}></Route>
        <Route
          path="/movies/:media_type/:id"
          element={<MovieDetails />}
        ></Route>
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
