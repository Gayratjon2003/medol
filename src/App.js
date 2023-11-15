import { Route, Routes } from "react-router-dom";
import { Home, Navbar, Footer } from "./components";
import { routes } from "./constant";
function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
