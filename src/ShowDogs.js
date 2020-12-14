import React from 'react';
import { Link } from "react-router-dom";

function ShowDogs({dogs}) {
    return (
      <div>
        {doglist.map((dog) => (
          <div>
              <h1>dog.name</h1>
          </div>
        ))}
      </div>
    );
}

export default ShowDogs;