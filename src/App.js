import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Update from "./Components/Update";
import Add from "./Components/Add";
import Home from "./Components/Home";
import Aboutus from "./Components/Aboutus";
import Admin from "./Components/Admin";
import { Auth } from "./Components/Auth";



function App() {
  return (
    <Auth>
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Add" element={<Add />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/user" element={<Add/>} />
          <Route path="/update/:projectId" element={<Update />} />
        </Routes>
      </Router>
    </div>
    </Auth>
  );
}

export default App;
