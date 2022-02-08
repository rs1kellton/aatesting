import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Anagram from "./components/Anagram";
import TempTracker from "./components/TempTracker";
import Header from "./components/Header";
import "./app.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Header />
          <Routes>
            <Route
              exact
              path="/"
              element={<h1 className="heading">AA Testing</h1>}
            />
            <Route exact path="/register" element={<Form />} />
            <Route exact path="/anagram" element={<Anagram />} />
            <Route exact path="/temptracker" element={<TempTracker />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
