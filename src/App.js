import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import BookPage from './pages/BookPage';
import WishlistPage from './pages/WishlistPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Detail/:id" element={<DetailPage />} />
          <Route path="/MyBook" element={<BookPage />} />
          <Route path="/Wishlist" element={<WishlistPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;