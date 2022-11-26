import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Search from "./Search";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="shadow-lg border-0">
          <Search />
          <Weather city="Tokyo" />
        </div>
        <Footer />
      </div>
    </div>
  );
}
