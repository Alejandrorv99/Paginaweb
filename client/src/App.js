import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar'; // Componente Sidebar
import Home from './pages/Home'; // Página Home (debes asegurarte de crearla)


function App() {
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    // Fetch para obtener el mensaje desde el backend
    fetch('/api/mensaje')
      .then((response) => response.json())
      .then((data) => setMensaje(data.mensaje))
      .catch((error) => console.error('Error fetching mensaje:', error));
  }, []);

  return (
    <Router>
      <div className="App" style={{ display: 'flex' }}>
        {/* Barra lateral */}
        <Sidebar />

        {/* Contenido principal, con margen para la barra lateral */}
        <div style={{ marginLeft: '250px', padding: '20px', width: '100%' }}>
          <Routes>
            <Route path="/" element={<Home mensaje={mensaje} />} />
            {/* Agrega más rutas según tus páginas */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
