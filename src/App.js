import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";
import Dashboard from "./pages/Hosts/Dashboard";
import Income from "./pages/Hosts/Income";
import Reviews from "./pages/Hosts/Reviews";
import HostLayout from "./components/HostLayout";
import HostVanDetail from "./pages/Hosts/HostVanDetail";
import HostVans from "./pages/Hosts/HostVans";
import HostVanInfo from "./pages/Hosts/HostVanInfo";
import HostVanPhotos from "./pages/Hosts/HostVanPhotos";
import HostVanPricing from "./pages/Hosts/HostVanPricing";

import "./server";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="vans" element={<Vans />} />
                        <Route path="vans/:id" element={<VanDetail />} />
                        <Route path="host" element={<HostLayout />}>
                            <Route index element={<Dashboard />} />
                            <Route path="income" element={<Income />} />
                            <Route path="reviews" element={<Reviews />} />
                            <Route path="vans" element={<HostVans />} />
                            <Route path="vans/:id" element={<HostVanDetail />}>
                                <Route index element={<HostVanInfo />} />
                                <Route
                                    path="pricing"
                                    element={<HostVanPricing />}
                                />
                                <Route
                                    path="photos"
                                    element={<HostVanPhotos />}
                                />
                            </Route>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
