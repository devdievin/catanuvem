import { Routes, Route } from "react-router-dom";

import Home from './pages/home';

const MainRoutes = () => (
    <Routes>
        <Route path="/">
            <Route path='' element={< Home />} />
            <Route path='/:city/:state' element={< Home />} />
        </Route>
        <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
);

export default MainRoutes;