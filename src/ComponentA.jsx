import React, { useState } from 'react';
import ComponentB from './ComponentB.jsx';

function ComponentA() {

  const [user, setUser] = useState("Boiyee");

    return(
        <div className="box">
            <h1>ComponentA</h1>
            <h2>{`Hello ${Boiyee}`}</h2>
        </div>
    );
}

export default ComponentA
