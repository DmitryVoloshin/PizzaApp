import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'



import Header from './header';
import Footer from './footer';
import MainPage from './pages/main-page';

function App() {
  return (
    <div className="Main">
        <Router>
        <Header/>

            <Route path="/" component={MainPage}/>



        <Footer/>
        </Router>
    </div>
  );
}

export default App;
