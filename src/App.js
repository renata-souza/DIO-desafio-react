import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import NewCat from './components/NewCat/NewCat';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cat" element={<NewCat />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
