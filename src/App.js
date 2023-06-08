import "./App.css";
import Reach from "./components/Reach.js";
import Footer from "./components/Footer.js";
import Method from "./components/Method/Method";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Partners from "./components/Partners";
import Lectures from "./components/Lectures";
import Reviews from "./components/Reviews";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Reach />
                <Lectures />
                <Footer />
              </>
            }
          />
          <Route path="method" element={<Method />} />
          <Route path="partners" element={<Partners />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
