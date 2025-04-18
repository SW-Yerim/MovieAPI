import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllMoviesPage from "./pages/AllMoviesPage";
import GenresPage from "./pages/GenresPage";
import RankingPage from "./pages/RankingPage";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailPage";
import Layout from "./pages/Layout";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<AllMoviesPage />} />
          <Route path="genres" element={<GenresPage />} />
          <Route path="ranking" element={<RankingPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="details" element={<DetailPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
