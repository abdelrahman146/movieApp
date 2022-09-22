import { FC } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import MoviesList from "./pages/MoviesList";
import Movie from "./pages/Movie";
import { ThemeProvider } from "@emotion/react";

const App: FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/movie/:movieId" element={<Movie />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </HashRouter>
  );
};

export default App;
