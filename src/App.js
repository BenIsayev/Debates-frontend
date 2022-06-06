import { Route, Routes } from 'react-router-dom'
import './assets/scss/global.scss'
import AppHeader from './cmps/AppHeader'
import About from './pages/About'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import DebateMain from './pages/DebateMain'

function App() {
  return (
    <div className="app">

      <AppHeader />

      <main className="container main-app">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/debate/:debateId" element={<DebateMain />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>

      {/* <AppFooter /> */}

    </div>
  );
}

export default App;
