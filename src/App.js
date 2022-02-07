import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Anagram from "./components/Anagram";
import TempTracker from "./components/TempTracker";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<h1>AA Testing</h1>} />
          <Route exact path="/register" element={<Form />} />
          <Route exact path="/anagram" element={<Anagram />} />
          <Route exact path="/temptracker" element={<TempTracker />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
