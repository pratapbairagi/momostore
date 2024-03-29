import logo from './logo.svg';
import './App.css';
import Hero from './sections/hero';
import Header from './components/header';
import Special from './sections/special';
import Momos_section from './sections/momos_section';
import Card1 from './components/card1';
import Card2 from './components/card2';
import Heading1 from './components/heading1';
import Heading2 from './components/heading2';
import Card3 from './components/card3';
import MomosTypes from './sections/momosTypes';
import ChatneyTypes from './sections/chatneyTypes';
import Testimonial_section from './sections/testimonial';
import Contact from './sections/contact';
import About from './sections/about';

function App() {
  const cards1 = [
    { plate: "half", price: "40", type: "steam", list: ["11 pices momos", "3 types of chatney", "meyonis"] },
    { plate: "full", price: "70", type: "fried", list: ["11 pices momos", "3 types of chatney", "meyonis"] }
  ]
  return (
    <div className="app">
      <Header />
      <Hero />
      <Special heading={<Heading1 title="Special" clss="heading1 heading" background="#F5F7F9" />} />

      <Momos_section heading={<Heading2 title="Chicken Momos" background="hsl(0, 0%, 100%)" />} background="hsl(0, 0%, 100%)" title="chicken momos" card={
        <Card1 buyBtnName="buy" cartBtn={<i class="ri-shopping-cart-line"></i>} details={cards1} />
      }
      />

      <Momos_section heading={<Heading2 title="Veg Momos" background="#F5F7F9" />} background="#F5F7F9" title="veg momos" card={
        <Card2 buyBtnName="buy" cartBtn={<i class="ri-shopping-cart-line"></i>} details={cards1} />
      }
      />

      <Momos_section heading={<Heading2 title="Paneer Momos" background="hsl(0, 0%, 100%)" />} background="hsl(0, 0%, 100%)" title="veg momos" card={

        <Card3 buyBtnName="buy" cartBtn={<i class="ri-shopping-cart-line"></i>} details={cards1} />

      }
      />

      <MomosTypes background='#F5F7F9' />

      <ChatneyTypes background='hsl(0, 0%, 100%)' />

      <Testimonial_section background='#F5F7F9' />

      <About background='hsl(0, 0%, 100%)' />

      <Contact background='#F5F7F9' />
    </div>
  );
}

export default App;
