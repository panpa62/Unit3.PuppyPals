import { puppyList } from "./data.js";
import { useState } from "react";
import "./App.css";
import "./puppy.css";

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

export default App;