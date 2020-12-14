import React from "react";
import { Link, Redirect } from "react-router-dom";
import './Dog.css'

function Dog({ dog }) {
  if (!dog) return <Redirect to="/dogs" />;

  return (
    <div className="Dog">
      <div className="col d-flex flex-column align-items-center">
        <img src={dog.src} alt={dog.name} />
        <h2>{dog.name}</h2>
        <h3>{dog.age}</h3>
        <ul>
          {dog.facts.map((fact, i) => (
            <li key={i}>{fact}</li>
          ))}
        </ul>
        <Link to="/dogs">Back</Link>
      </div>
    </div>
  );
}

export default Dog;

