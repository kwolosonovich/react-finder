import React from "react";
import { useParams } from "react-router-dom";
import Dog from "./Dog";
// import List from "./List"

function GetDogs({ dogs }) {
  const { name } = useParams();

  if (name) {
    const currentDog = dogs.find(
      (dog) => dog.name.toLowerCase() === name.toLowerCase()
    );
    return <Dog dog={currentDog} />;
  }

  return null;
}

export default GetDogs;
