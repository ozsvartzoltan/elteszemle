import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeroUIProvider } from "@heroui/react";
import Sajtokozlemenyegy from "./pages/Sajtokozlemenyegy";
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
            <Route path="/1-sajtokozlemeny" element={<Sajtokozlemenyegy />} />
            <Route path="/news/1_sajtokozlemeny" element={<Zsurik />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </HeroUIProvider>
  );
}
