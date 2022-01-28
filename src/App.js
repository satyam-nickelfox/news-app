import './App.css';
import Header from './components/Header/Header';
import News from './components/News/News';
import Headline from './components/Headlne/Headline';
import Search from './components/Search/Search';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Routes>

          <Route path="/" element={<News />} />
          <Route path="/top" element={<News />} />
          <Route path="/headline" element={<Headline />} />
          <Route path="/search" element={<Search />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
