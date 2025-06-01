import "./styles/App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Navbar />
            </header>
            {/* The page loaded will be here */}
            <Footer />
        </div>
    );

}
export default App;
