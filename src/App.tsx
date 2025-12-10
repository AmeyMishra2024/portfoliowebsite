import { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import FirstRobotics from './components/FirstRobotics';
import ScienceOlympiad from './components/ScienceOlympiad';
import OtherProjects from './components/OtherProjects';
import Research from './components/Research';
import Cosmobots from './components/Cosmobots';
import { PageType } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'first-robotics':
        return <FirstRobotics />;
      case 'science-olympiad':
        return <ScienceOlympiad />;
      case 'other-projects':
        return <OtherProjects />;
      case 'research':
        return <Research />;
      case 'cosmobots':
        return <Cosmobots />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>{renderPage()}</main>
      <footer className="bg-gradient-to-r from-slate-950 via-slate-900 to-sky-900 text-sky-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sky-200">
            © 2025 Amey Mishra. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
