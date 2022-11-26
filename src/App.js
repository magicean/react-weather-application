import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Search from "./Search";
import Header from "./Header";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app shadow-lg border-0">
          <Search />
          <Header />
        </div>
        <Footer />
      </div>
    </div>
  );
}
