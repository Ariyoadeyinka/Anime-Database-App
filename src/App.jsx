import { useState } from "react";
import PopularBar from "./Components/PopularBar";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";

function App() {
  const [query, setQuery]= useState("")
  return (
    <div>
      <Navbar />
      <Search query = {query} setQuery = {setQuery}/>
      <PopularBar />
    </div>
  );
}

export default App;
