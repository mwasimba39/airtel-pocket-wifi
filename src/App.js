// import React from 'react';
// import Header from './components/Header/Header';  // Updated path
// import Hero from './components/Hero/Hero';      // Updated path
// import Features from './components/Features/Features';
// import Plans from './components/Plans/Plans';
// import Contact from './components/Contact/Contact';
// import Footer from './components/Footer/Footer';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <main>
//         <Hero />
//         <Features />
//         <Plans />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// }

import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Plans from './components/Plans/Plans';
import PricePage from './components/PricePage/PricePage';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Features />
        <Plans />
        <PricePage />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;