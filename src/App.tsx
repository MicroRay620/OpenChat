import "./styles/App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Download from "./Download";
import DocsHome from "./Doc-home";
import Login from "./Login";
import Home from "./Home";
import PrivacyPolicy from "./PrivacyPolicy";
import ToS from "./ToS";

function App() {
    return (
        <>
            <BrowserRouter>
                <div className="text-center dark:bg-gray-800 dark:text-white min-h-screen flex flex-col">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/download" element={<Download />} />
                        <Route path="/docs" element={<DocsHome />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="/tos" element={<ToS />} />
                    </Routes>
                    <br/>
                    <Footer />
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;