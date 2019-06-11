import React from 'react';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Services from './components/services/Services';
import Reviews from './components/reviews/Reviews';
import Email from './components/email/Email';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">

<Navbar/>
<Header/>
<Services/>
<Reviews/>
<Email/>
<Footer/>

    </div>
  );
}

export default App;
