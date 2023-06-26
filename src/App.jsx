import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import { routes } from "./Components/utils/routes";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
      <div className="App">
          <Navbar/>
          <Routes>
            <Route path={routes.home} element={<Home/>}/>
            <Route path={routes.contact} element={<Contact/>}/>
            <Route path={routes.favs} element={<Favs/>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
