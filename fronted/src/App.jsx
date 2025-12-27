import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Topics from './pages/Topics';
import Quiz from './pages/Quiz';
import Article from './pages/Article';
import About from './pages/About';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar visible on all pages */}
      <Navbar />

      {/* Main content */}
      <div className="flex-grow">
        <Routes>
          {/* Home page */}
          <Route path="/" element={<Home />} />

          {/* All topics */}
          <Route path="/topics" element={<Topics />} />

          {/* Quiz page with dynamic quiz ID */}
          <Route path="/quiz/:id" element={<Quiz />} />

          {/* Article page with dynamic article ID */}
          <Route path="/article/:id" element={<Article />} />

          {/* About page */}
          <Route path="/about" element={<About />} />

          {/* Optional: 404 Page */}
          <Route
            path="*"
            element={<p className="text-center mt-10 text-red-600 text-lg">Page not found!</p>}
          />
        </Routes>
      </div>

      {/* Footer visible on all pages */}
      <Footer />
    </div>
  );
}

export default App;
