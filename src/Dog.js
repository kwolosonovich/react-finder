import React from 'react';
import { Link, Redirect } from "react-router-dom";
// import './Dog.css'


const Dog = ({dog}) => {

    return (
      <div>
        <div>
          <h3>dog.name</h3>
          <img src={dog.src} alt={dog.name} />
        </div>
      </div>
    );
}

export default Dog;