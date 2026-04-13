import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import WorkshopStatus from "./pages/WorkshopStatus";
import WorkshopStatics from "./pages/WorkshopStatics";
import WorkshopTypes from "./pages/WorkshopTypes";
import ProposeWorkshop from "./pages/ProposeWorkshop";

function App() {
  return (
    <Router>
      <div
        style={{
          background: "#f5f7fb",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />

        <div
          style={{
            padding: "20px",
            maxWidth: "1200px",
            margin: "auto",
            textAlign: "center",
            flex: 1,
            transition: "all 0.3s ease",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/status" element={<WorkshopStatus />} />
            <Route path="/statics" element={<WorkshopStatics />} />
            <Route path="/types" element={<WorkshopTypes />} />
            <Route path="/propose" element={<ProposeWorkshop />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;