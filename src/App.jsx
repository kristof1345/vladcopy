import { useState } from "react";
import Jumbotron from "./components/Jumbotron";
import Who from "./components/Who";
import Testimonials from "./components/Testimonials";
import Clients from "./components/Clients";

function App() {
  return (
    <div>
      <Jumbotron />
      <Who />
      <Testimonials />
      <Clients />
    </div>
  );
}

export default App;
