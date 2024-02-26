// App.js
import './App.css';
import Navigasi from './Components/Navigasi';
import FooterComponent from './Components/FooterComponent';
import VisiAndMisi from './Pages/VisiAndMisi';
import StrukturOrganisasi from './Pages/StrukturOrganisasi';
import Berita from './Pages/Berita';
import { Route, Routes } from 'react-router-dom';
import Pages from './Pages/Pages';
import Lokasi from './Pages/Lokasi';

function App() {
  return (
    <div className="h-screen">
      <Navigasi />
      <Routes>
        <Route path="/" element={<Pages />} />
        <Route path="/visi-misi" element={<VisiAndMisi />} />
        <Route path="/struktur-organisasi" element={<StrukturOrganisasi />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/lokasi" element={<Lokasi />} />
      </Routes>
      <FooterComponent /> {/* Pastikan FooterComponent ditempatkan di sini */}
    </div>
  );
}

export default App;
