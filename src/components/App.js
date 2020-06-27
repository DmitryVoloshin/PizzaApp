import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom'



import Header from './header';
import Footer from './footer';

import { AboutPage, 
        ContactPage,
        BlogPage,
        ServicePage,
        MenuPage,
        MainPage,
      } from './pages';
import PizzaPage from './pizza-creator';



function App() {
  return (
    <div className="Main">
        <Router>
        <Header/>

            <Route path="/" component={MainPage} exact/>
            <Route path="/menu" component={MenuPage} />
            <Route path="/service" component={ServicePage}/>
            <Route path="/blog" component={BlogPage}/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/contact" component={ContactPage}/>
            <Route path="/constructor" component={PizzaPage}/>

        <Footer/>
        </Router>
    </div>
  );
}

export default App;
