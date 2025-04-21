import { Route, Routes, useLocation } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ExploreSection from './Pages/Explore/Explore';
import Stories from './Pages/Stories/Stories';
import { AnimatePresence, motion } from 'framer-motion';
import DestinationDetails from './Pages/Explore/DestinationDetails/DestinationDetails';
import StoriesDetails from './Pages/Stories/StoriesDetails/StoriesDetails';
import Gallery from './Pages/Gallery/Gallery';
import Connect from './Pages/Connect/Connect';

function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<motion.div key={location.pathname}><Home /></motion.div>} />
          <Route path="/explore" element={<motion.div key={location.pathname}><ExploreSection /></motion.div>} />
          <Route path="/stories" element={<motion.div key={location.pathname}><Stories /></motion.div>} />
          <Route path="/gallery" element={<motion.div key={location.pathname}><Gallery /></motion.div>} />
          <Route path="/login" element={<motion.div key={location.pathname}><Connect /></motion.div>} />
          <Route path="/explore/:id" element={<motion.div key={location.pathname}><DestinationDetails /></motion.div>} />
          <Route path="/stories/:id" element={<motion.div key={location.pathname}><StoriesDetails /></motion.div>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;