import React, { useState } from 'react';
import ComponentD from './ComponentD.jsx';

function ComponentC() {

  const [user, setUser] = useState("Boiyee");

    return(
        <div className="box">
            <h1>ComponentC</h1>
            <ComponentD />
        </div>
    );
}

export default ComponentC
