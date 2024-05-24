import { useState } from "react";
import PopularBar from "./Components/PopularBar";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Search/>
      <PopularBar />
    </div>
  );
}

export default App;
