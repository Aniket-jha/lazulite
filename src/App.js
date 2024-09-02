
import './App.css';
import { Route, Routes, useParams } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
function App() {
  return (
    <div className="App">
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
