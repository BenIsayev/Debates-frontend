import {Route, Routes} from 'react-router-dom';
import './assets/scss/global.scss';
import AppHeader from './cmps/AppHeader';
import About from './pages/About';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import DebateMain from './pages/DebateMain';
import LoginPage from './pages/LoginPage';
import {useState} from 'react';

function App() {
  const [isConnected, setIsConnected] = useState(false);
  return (
    <div className="app">
      <AppHeader />

      <main className="container main-app">
        <Routes>
          {isConnected ? (
            <>
              <Route path="/about" element={<About />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/debate/:debateId" element={<DebateMain />} />
            </>
          ) : (
            <Route path="/login" element={<LoginPage />} />
          )}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>

      {/* <AppFooter /> */}
    </div>
  );
}

export default App;
