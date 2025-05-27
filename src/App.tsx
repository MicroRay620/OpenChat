import "./styles/App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Navbar />
            </header>
            <main className="App-main">
                Hello
            </main>
            <Footer />
        </div>
    );

}
export default App;