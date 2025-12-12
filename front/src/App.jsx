import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CategorieList from "./pages/CategorieList";
import SpecialiteList from "./pages/SpecialiteList";
import ArtisanList from "./pages/ArtisanList";
import ArtisanDetail from "./pages/ArtisanDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategorieList />} />
        <Route path="/categories/:id" element={<SpecialiteList />} />
        <Route path="/specialites/:id" element={<ArtisanList />} />
        <Route path="/artisans/:id" element={<ArtisanDetail />} />
      </Routes>
    </BrowserRouter>
  );
}