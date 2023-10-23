import Home from "./routes/Home";
import About from "./routes/About";
import Register from "./routes/Register";
import Conferences from "./routes/Conferences";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/tutors" element={<Register />}></Route>
        <Route path="/conferences" element={<Conferences />}></Route>
        <Route path="/institutions" element={<Register />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </>
  );
}

export default App;
