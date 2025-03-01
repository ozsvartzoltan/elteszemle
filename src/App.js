import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeroUIProvider } from "@heroui/react";
import Kapcsolat from "./pages/kapcsolat";
import Home from "./pages";
import Layout from "./components/Layout";
import Zsurik from "./pages/zsurik";

export default function App() {
  return (
    <HeroUIProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/zsurik" element={<Zsurik />} />
            <Route path="/kapcsolat" element={<Kapcsolat />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </HeroUIProvider>
  );
}
