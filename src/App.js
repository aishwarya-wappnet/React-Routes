import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';

function App() {
  return (
    // main parent component
    <BrowserRouter>     
    {/* complete outer package */}
    <Routes>
      {/* <Route path="/" element={<div>Home Page</div>}></Route> */}
      <Route path="/" element={<Home />}>
        <Route path="/home1" element={<div>Child Route 1</div>}/>
        <Route path="/home2" element={<div>Child Route 2</div>}/>
      </Route>
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<Error/>} />
    </Routes>
    </BrowserRouter>
  );
}
export default App;
