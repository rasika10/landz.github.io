
import './App.css';
import Header from './components/Header';
import FarmlandsSlider from './components/FarmlandsSlider';
import SearchBar from './components/SearchBar';
import LandCard from './components/LandCard';
import Farmlands from './Pages/Farmlands';
import LandProfile from './Pages/LandProfile';
import FeedbackForm from './Pages/FeedbackForm';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
    <Header/>

    {/*  */}
    {/* <LandProfile/> */}
    
    <Router>

      <Routes>
        <Route path="/" element={<Farmlands/>} />
        <Route path="/land-profile" element={<LandProfile/>} />
        <Route path="/feedback" element={<FeedbackForm/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
