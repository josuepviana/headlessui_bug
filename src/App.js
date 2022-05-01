import React from "react";
import Navbar from './components/Navbar';
import Sobre from './components/Sobre';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './index';


function App() {
  library.add(fab, fas);
  return (
    <main className="text-gray-400 body-font bg-whiteMN">
      <Navbar />
      <Sobre />
    </main>
  );
}

export default App;
