import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./component/Nav/navbar.scss";
import "./component/global/index.scss";
import Navbar from "./component/Nav/Navbar.jsx";
import Home from "./component/home/Home.jsx";
import Constant from "./component/Constant.jsx";
import Limited from "./component/Limited.jsx";
import About from "./component/About.jsx";
import Catalog from "./component/Catalog..jsx";
import Inspiration from "./component/Inspiration.jsx";
import Contacts from "./component/Contacts.jsx";

function App() {
  return (
    <Router>
      {/* <div className="App"> */}

      <Constant />
      <Navbar />
      {/* <Home /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/" element={<Catalog />} />
        <Route exact path="/limited" element={<Limited />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/inspiration" element={<Inspiration />} />
        <Route exact path="/contacts" element={<Contacts />} />
      </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;
