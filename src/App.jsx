import { Route, Routes, useLocation } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ExploreSection from './Pages/Explore/Explore';
import Stories from './Pages/Stories/Stories';
import { AnimatePresence } from 'framer-motion';
import DestinationDetails from './Pages/Explore/DestinationDetails/DestinationDetails';
import StoriesDetails from './Pages/Stories/StoriesDetails/StoriesDetails';

function App() {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Header />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<ExploreSection />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/explore/:id" element={<DestinationDetails />} />
        <Route path="/stories/:id" element={<StoriesDetails />} />
      </Routes>
      <Footer />
    </AnimatePresence>
  )
}

export default App
