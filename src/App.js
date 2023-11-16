import { Route, Routes } from "react-router-dom";
import { Home, Navbar, Footer } from "./components";
import { routes } from "./constant";
import { useState } from "react";
function App() {
  const [modalStatus, setModalStatus] = useState(false);
  const closeModal = () => {
    setModalStatus(false);
  };
  const openModal = () => {
    setModalStatus(true);
  };
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <Routes>
        <Route
          path={routes.HOME}
          element={
            <Home
              closeModal={closeModal}
              openModal={openModal}
              modalStatus={modalStatus}
            />
          }
        />
      </Routes>
      <Footer openModal={openModal} />
    </div>
  );
}

export default App;
