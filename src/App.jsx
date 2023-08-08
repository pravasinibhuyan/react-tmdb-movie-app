import { Route, Routes } from "react-router-dom";
import "./App.css";
import Container from "./container/HomeContainer";
import Details from "./pages/MovieDetails/Details";
import SearchResult from "./pages/SearchMovie/SearchResult";
import CommonLayout from "./layout/CommonLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Container />} />
        <Route
          path="/:id"
          element={
            <CommonLayout>
              <Details />
            </CommonLayout>
          }
        />
        <Route
          path="/search-movies"
          element={
            <CommonLayout>
              <SearchResult />
            </CommonLayout>
          }
        />
        <Route
          path="/search-movies/:id"
          element={
            <CommonLayout>
              <Details />
            </CommonLayout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
