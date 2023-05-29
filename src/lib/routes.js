import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home/Home';
import { Sobre } from '../pages/Sobre/Sobre';
import { NossoTime } from '../pages/NossoTime/NossoTime';



function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/Sobre" element={<Sobre/>} />
                <Route exact  path="/NossoTime" element={<NossoTime />} />

            </Routes>
        </BrowserRouter>
    );
}

export default Router;