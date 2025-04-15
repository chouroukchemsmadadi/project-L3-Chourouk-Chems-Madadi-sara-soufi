import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Title from "./components/ADMIN/title.jsx";
import Sidebar from './components/ADMIN/Sidebar.jsx';
import Home from './components/ADMIN/Home.jsx';
import ManageRoom from './components/ADMIN/gestionch.jsx'; // ✅ استوردنا الصفحة الجديدة
import GestionDesReservations from './components/ADMIN/gestionres.jsx'; // ✅ استوردنا الصفحة الجديدة

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <Router>
      <div className='grid-container'>
        <Title OpenSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/chambres" element={<ManageRoom />} /> {/* ✅ هنا */}
          <Route path="/reservations" element={<GestionDesReservations />} /> {/* ✅ هنا */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
