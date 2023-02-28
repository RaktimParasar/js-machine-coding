import { useState } from "react";

import Slider from "./components/Slider";

import "./App.css";

const DATA = [
  {
    name: "Penelope Fry",
    email: "nonummy.ultricies@yahoo.org",
  },
  {
    name: "Ignacia Cantu",
    email: "vel.vulputate@yahoo.net",
  },
  {
    name: "Martina Ayala",
    email: "nunc@outlook.net",
  },
  {
    name: "Hiram Espinoza",
    email: "non.arcu.vivamus@google.com",
  },
  {
    name: "Axel Hewitt",
    email: "malesuada.vel.venenatis@aol.ca",
  },
];

function App() {
  const [count, setCount] = useState(0);

  const handleRestart = () => {
    setCount(0);
  };

  const handlePrev = () => {
    setCount((count) => count - 1);
  };

  const handleNext = () => {
    setCount((count) => count + 1);
  };

  return (
    <div className="App">
      <Slider
        slides={DATA}
        count={count}
        restart={handleRestart}
        prev={handlePrev}
        next={handleNext}
      />
    </div>
  );
}

export default App;
