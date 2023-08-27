import { Route, Routes } from 'react-router-dom';

import Landing from './pages/Landing';
import About from './pages/About';
import ScrollToTop from './hooks/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
