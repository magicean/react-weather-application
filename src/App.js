import "./App.css";
import Search from "./Search";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="weather-app shadow-lg border-0">
        <Search />
        <Header />
      </div>
      <Footer />
    </div>
  );
}

export default App;
