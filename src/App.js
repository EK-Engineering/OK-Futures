import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
// import Home from './Views/Home/Home.jsx';
// import About from './Views/About/About.jsx';
import Prelaunch from './Views/Prelaunch.jsx';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Prelaunch />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
    </Router>
  );
}

export default App;
