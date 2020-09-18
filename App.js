import React from 'react';
import Utama from './Component/utama'
import { Link } from 'react-router-dom'
import './style.css'

function App() {
  return (
    <div>
      <div className="background">
        <div className="menu">
          <div className="logo">
            <h4>COVID-19</h4>
          </div>
          <ul>
            <li className="per">
              <a><Link to="/" className="a">Beranda</Link></a>
            </li>
            <li>
              <a><Link to="/halamanprotokol" className="a">Halaman Protokol</Link></a>
            </li>
            <li>
              <a><Link to="/halamandata" className="a">Halaman Data</Link></a>
            </li>
          </ul>
        </div>
        <div className="judul">
            <h1>COVID-19</h1>
        </div>
      </div>
      <div>
        <p><Utama /></p>
      </div>
    </div>
  );
}

export default App;
