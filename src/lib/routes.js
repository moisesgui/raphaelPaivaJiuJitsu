import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home/Home";
import { Sobre } from "../pages/Sobre/Sobre";
import { TeamPage } from "../pages/Team/Team";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sobre" element={<Sobre />} />
        <Route exact path="/nosso-time" element={<TeamPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
