import React from "react"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { HelmetProvider, Helmet } from "react-helmet-async"
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
import BestOfRegisztracio2026 from "pages/BestOfRegisztracio2026"
import BestOf2026 from "pages/BestOf2026"
import Bestof from "pages/Bestof"
import ErkezikAHarmadikElteSzemle from "pages/ErkezikAHarmadikElteSzemle"
import TeljesAIIIElteSzemleProgramja from "pages/TeljesAIIIElteSzemleProgramja"
import { ConsentProvider } from "./contexts/ConsentContext"
import { DataProvider, useData } from "./contexts/DataContext"
import { ThemeProvider } from "./contexts/ThemeContext"
import CookieConsentBanner from "./components/CookieConsent"
import AdminPanel from "./components/AdminPanel/AdminPanel"
import FirebaseTest from "./components/FirebaseTest"

const BASE_URL = "https://www.elteszemle.hu"
const DEFAULT_OG_IMAGE = `${BASE_URL}/opengraph-image-2026.jpg`

const SEO_BY_PATH = {
  "/": {
    title: "ELTE Szemle",
    description: "Az ELTE Filmtanszékén készülő hallgatói filmek fesztiválja.",
  },
  "/zsurik": {
    title: "Zsűrik | ELTE Szemle",
    description: "Ismerd meg az ELTE Szemle zsűritagjait.",
  },
  "/filmek": {
    title: "Filmek | ELTE Szemle",
    description: "A fesztiválon szereplő hallgatói filmek listája.",
  },
  "/nevezes": {
    title: "Nevezés | ELTE Szemle",
    description: "Nevezési információk és tudnivalók az ELTE Szemléhez.",
  },
  "/best_of": {
    title: "Best Of | ELTE Szemle",
    description: "Az ELTE Szemle Best Of válogatása.",
  },
  "/2026_best_of": {
    title: "A III. ELTE Szemle BEST OF válogatása | ELTE Szemle",
    description: "A III. ELTE Szemle BEST OF válogatása, a 2026-os válogatás legfontosabb információi.",
  },
  "/best_of_regisztracio": {
    title: "Best Of Regisztráció | ELTE Szemle",
    description: "Regisztráció a Best Of eseményhez.",
  },
  "/2026_best_of_regisztracio": {
    title: "Regisztráció a BEST OF vetítésre | ELTE Szemle",
    description: "Regisztráció a 2026-os ELTE Szemle BEST OF vetítésére.",
  },
  "/napi_bontas": {
    title: "Napi Bontás | ELTE Szemle",
    description: "Napi programbontás és vetítési időpontok.",
  },
  "/szakmai_programok": {
    title: "Szakmai Programok | ELTE Szemle",
    description: "Szakmai programok, beszélgetések és kísérőesemények.",
  },
  "/fotokiallitas": {
    title: "Fotókiállítás | ELTE Szemle",
    description: "Fotókiállítás az ELTE Szemle programjában.",
  },
  "/1_sajtokozlemeny": {
    title: "Sajtóközlemény 1 | ELTE Szemle",
    description: "Az ELTE Szemle első sajtóközleménye.",
  },
  "/sajtokozlemeny": {
    title: "Sajtóközlemény | ELTE Szemle",
    description: "Az ELTE Szemle hivatalos sajtóközleménye.",
  },
  "/erkezik_a_harmadik_elte_szemle": {
    title: "Érkezik a harmadik ELTE Szemle | ELTE Szemle",
    description: "Információk a harmadik ELTE Szemle érkezéséről.",
  },
  "/teljes_a_iii_elte_szemle_programja": {
    title: "Teljes a III. ELTE Szemle programja | ELTE Szemle",
    description: "A III. ELTE Szemle teljes programja és részletei.",
  },
}

function SeoManager() {
  const { pathname } = useLocation()
  const seo = SEO_BY_PATH[pathname] || SEO_BY_PATH["/"]
  const canonicalUrl = `${BASE_URL}${pathname === "/" ? "" : pathname}`

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
    </Helmet>
  )
}

function AppContent() {
  const { year } = useData()
  
  return (
    <ThemeProvider year={year}>
      <HeroUIProvider>
          <Router>
            <SeoManager />
            <Routes>
              <Route path="/admin" element={<><Helmet><meta name="robots" content="noindex,nofollow" /></Helmet><AdminPanel /></>} />
              <Route path="/firebase-test" element={<><Helmet><meta name="robots" content="noindex,nofollow" /></Helmet><FirebaseTest /></>} />
              <Route path="*" element={
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
                path="/erkezik_a_harmadik_elte_szemle"
                element={<ErkezikAHarmadikElteSzemle />}
              />
              <Route
                path="/teljes_a_iii_elte_szemle_programja"
                element={<TeljesAIIIElteSzemleProgramja />}
              />
              <Route path="/best_of" element={<Bestof />} />
              <Route path="/2026_best_of" element={<BestOf2026 />} />
              <Route
                path="/best_of_regisztracio"
                element={<BestOfRegisztracio />}
              />
              <Route
                path="/2026_best_of_regisztracio"
                element={<BestOfRegisztracio2026 />}
              />
              <Route path="*" element={<Home />} />
            </Routes>
                </Layout>
              } />
            </Routes>
            <CookieConsentBanner />
            {/* <ConsentDebugger /> */}
          </Router>
        </HeroUIProvider>
      </ThemeProvider>
    )
}

export default function App() {
  return (
    <HelmetProvider>
      <ConsentProvider>
        <DataProvider>
          <AppContent />
        </DataProvider>
      </ConsentProvider>
    </HelmetProvider>
  )
}
