import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PokerProvider } from './contexts/PokerContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import PracticePage from './pages/PracticePage';
import LearningHubPage from './pages/LearningHubPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <PokerProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-black text-white">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/practice" element={<PracticePage />} />
              <Route path="/learning-hub" element={<LearningHubPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </PokerProvider>
  );
}

export default App;