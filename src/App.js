import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeroUIProvider } from "@heroui/react";
import Home from "./pages";
import Layout from "./components/Layout";
import Zsurik from "./pages/zsurik";
import Sajtokozlemenyegy from "pages/Sajtokozlemenyegy";

export default function App() {
  return (
    <HeroUIProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/zsurik" element={<Zsurik />} />
            <Route
              path="/news/1_sajtokozlemeny"
              element={<Sajtokozlemenyegy />}
            />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </HeroUIProvider>
  );
}
