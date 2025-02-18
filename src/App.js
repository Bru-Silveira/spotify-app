import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Atualizado para React Router v6
import Login from './Login';
import Playlists from './Playlists';  // Página de playlists
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />  {/* Página de Login */}
        <Route path="/playlists" element={<Playlists />} />  {/* Página de Playlists */}
      </Routes>
    </Router>
  );
}

export default App;

