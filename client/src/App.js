import React from 'react';
import Header from './components/header/Header';
import Services from './components/services/Services';
import Reviews from './components/reviews/Reviews';
import Email from './components/email/Email';
import Footer from './components/footer/Footer';
import Toggle from './components/navbar/Toggle';
//import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">

<Toggle/>

<Header/>
<Services/>
<Reviews/>
<Email/>
<Footer/>

    </div>
  );
}

export default App;
