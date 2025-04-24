import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { HeroUIProvider } from "@heroui/react"
import Home from "./pages"
import Layout from "./components/Layout"
import Zsurik from "./pages/zsurik"
import Sajtokozlemenyegy from "pages/Sajtokozlemenyegy"
import NapiBontas from "pages/napi_bontas"
import Fotokiallitas from "pages/fotokiallitas"
import SzakmaiProgramok from "pages/szakmai_programok"
import Filmek from "pages/filmek"
import Nevezes from "pages/nevezes"
import Sajtokozlemenyketto from "pages/Sajtokozlemenyketto"
import BestOfRegisztracio from "pages/BestOfRegisztracio"

export default function App() {
  return (
    <HeroUIProvider>
      <Router>
        <Layout className="space-y-6 leading-relaxed">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/zsurik" element={<Zsurik />} />
            <Route path="/napi_bontas" element={<NapiBontas />} />
            <Route path="/fotokiallitas" element={<Fotokiallitas />} />
            <Route path="/szakmai_programok" element={<SzakmaiProgramok />} />
            <Route path="/filmek" element={<Filmek />} />
            <Route path="/1_sajtokozlemeny" element={<Sajtokozlemenyegy />} />
            <Route path="/nevezes" element={<Nevezes />} />
            <Route path="/sajtokozlemeny" element={<Sajtokozlemenyketto />} />
            <Route
              path="/best_of_regisztracio"
              element={<BestOfRegisztracio />}
            />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </HeroUIProvider>
  )
}
