import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer, Navbar } from './components';
import { About, Extracurricular, Facility, Home, Majority, News, Ppdb } from './pages';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Extracurricular' element={<Extracurricular />} />
          <Route path='/Facility' element={<Facility />} />
          <Route path='/Majority' element={<Majority />} />
          <Route path='/News' element={<News />} />
          <Route path='/Ppdb' element={<Ppdb />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
