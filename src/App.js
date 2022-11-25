import "./App.css";
import Search from "./Search";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <div className="weather-app shadow-lg border-0">
        <Search />
        <Header />
      </div>
    </div>
  );
}

export default App;
