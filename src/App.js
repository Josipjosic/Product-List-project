import "./App.css";
import FetchItem from "./Components/FetchItem";
import FetchList from "./Components/FetchList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<FetchList />} />
          <Route path="/product" element={<FetchItem />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
