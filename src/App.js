import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./views/Layout";
import Home from './views/Home';
import Demo from './views/Demo';
import Contact from './views/Contact';
import About from './views/About';
import NoPage from "./views/NoPage";
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="demo" element={<Demo />} />
          <Route path="about" element={<About />}/>
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <footer className="page-foot">Hello</footer>
    </>
  );
}
export default App;


