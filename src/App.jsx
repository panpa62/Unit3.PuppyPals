import { puppyList } from "./data.js";
import { useState } from "react";
import "./App.css";
<<<<<<< HEAD
import "./puppy.css";
=======
>>>>>>> 9e6afd9f6c5cc151d3170f2175b305dc638cf07b

function App() {
  const [count, setCount] = useState(0);
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  console.log(puppies);

  function handleClick() {
    console.log(featPupId);
  }
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  return (
    <div className="App">
      {puppies.map((puppy) => {
        return (
          <p
            onClick={() => {
              console.log(puppy.id);
              setFeatPupId(puppy.id);
            }}
            key={puppy.id}
          >
            {puppy.name}
          </p>
        );
      })}
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 9e6afd9f6c5cc151d3170f2175b305dc638cf07b
