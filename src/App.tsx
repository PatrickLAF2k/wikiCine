import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import HomePage from './pages/HomePage'
import SeriesDetailsPage from './pages/SeriesDetailsPage'
import EpisodeDetailsPage from './pages/EpisodeDetailsPage';
import FavoritesPage from './pages/FavoritePage';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/series/:id" element={<SeriesDetailsPage />} />
        <Route path="/series/:showId/season/:season/episode/:episodeNumber" element={<EpisodeDetailsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
