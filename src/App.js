import Header from './component/Header';
import Footer from './component/Footer';
import Hero from './component/Hero';
import logo from './logo.svg';
import './style.css';
import Egg from './component/Egg';
import Cup from './component/Cup';
import Cherry from './component/Cherry';
import Orange from './component/Orange';
import Testimonials from './component/Testimonials';
import Gallery from './component/Gallery';
import { useState } from 'react';

function App() {

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="App">
      <Header setMobileOpen={setMobileOpen}></Header>
      <div className='wrapper'>
          <Hero mobileOpen={mobileOpen}></Hero>
          <Egg></Egg>
          <Cup></Cup>
          <Cherry></Cherry>
          <Orange></Orange>
          <Testimonials></Testimonials>
          <Gallery></Gallery>
        
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
