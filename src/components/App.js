import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom'



import Header from './header';
import Footer from './footer';

function App() {
  return (
    <div className="Main">
        <Router>
        <Header/>





        <Footer/>
        </Router>
    </div>
  );
}

export default App;
