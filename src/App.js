import './App.css';
import Navbar from './Navbar';
import Highlights from './Highlights';
import Specials from './Specials';
import SpecialCards from './SpecialCards';
import Testimonials from './Testimonials';
import AboutUs from './AboutUs';

function App() {
  return (
    <div className="markazi-text-500">
    <Navbar/>
    <Highlights/>
    <Specials/>
    <SpecialCards/>
    <Testimonials/>
    <AboutUs/>
    </div>
  );
}

export default App;
