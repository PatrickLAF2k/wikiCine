import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import HomePage from './pages/HomePage'
import DetailsPage from './pages/DetailsPage'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/series/:id" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
