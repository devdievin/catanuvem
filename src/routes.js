import { Routes, Route } from "react-router-dom";

import Home from './pages/home';
import Help from "./pages/help";

const MainRoutes = () => (
    <Routes>
        <Route path="/">
            <Route path='' element={< Home />} />
            <Route path='/:city/:state' element={< Home />} />
        </Route>
        <Route path="/ajuda" element={< Help />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
);

export default MainRoutes;