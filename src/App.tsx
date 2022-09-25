import { FC } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import MoviesList from "./pages/MoviesList";
import Movie from "./pages/Movie";
import AppThemeProvider from "./theme/AppThemeProvider";

const App: FC = () => {
  return (
    <AppThemeProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<MoviesList />} />
          <Route path="/genre/:genreId" element={<MoviesList />} />
          <Route path="/movie/:movieId" element={<Movie />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </HashRouter>
    </AppThemeProvider>
  );
};

export default App;
