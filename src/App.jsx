import { Route, Routes, useLocation } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ExploreSection from './Pages/Explore/Explore';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Header />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<ExploreSection />} />
      </Routes>
      <Footer />
    </AnimatePresence>
  )
}

export default App
