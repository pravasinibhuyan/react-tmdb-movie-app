import { Route, Routes } from "react-router-dom";
import "./App.css";

import HomeContainer from "./container/HomeContainer";
import MovieDetailsContainer from "./container/MovieDetailsContainer";
import SearchedContainer from "./container/SearchedContainer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/:id" element={<MovieDetailsContainer />} />
        <Route path="/search-movies" element={<SearchedContainer />} />
        <Route path="/search-movies/:id" element={<MovieDetailsContainer />} />
      </Routes>
    </>
  );
}

export default App;
