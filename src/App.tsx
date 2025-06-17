import "./styles/App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Download from "./Download";
import DocsHome from "./Doc-home";
import Login from "./Login";
import Home from "./Home";

function App() {
    return (
        <BrowserRouter>
            <div className="text-center dark:bg-gray-800 dark:text-white">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/download" element={<Download />} />
                    <Route path="/docs" element={<DocsHome />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;