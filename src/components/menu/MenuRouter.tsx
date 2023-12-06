import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DriftPage from "./pages/DriftPage";
import TimeAttackPage from "./pages/TimeAttackPage";
import ForzaPage from "./pages/ForzaPage";
import Menu from "./Menu";
import "./MenuRouter.css";
  
export default function MenuRouter() {
    return (
        <div className="MenuRouter">
            <Menu />
            <div className="page">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/drift" element={<DriftPage />} />
                <Route path="/timeattack" element={<TimeAttackPage />} />
                <Route path="/forza" element={<ForzaPage />} />
            </Routes>
            </div>
        </div>
    );
}