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
        <Route path="/searched-movie" element={<SearchedContainer />} />
        <Route path="/searched-movie/:id" element={<MovieDetailsContainer />} />
      </Routes>
    </>
  );
}

export default App;
