import React, { useState } from 'react';
import ComponentC from './ComponentC.jsx';

function ComponentB() {

  const [user, setUser] = useState("Boiyee");

    return(
        <div className="box">
            <h1>ComponentB</h1>
            <ComponentC user={props.user} />
        </div>
    );
}

export default ComponentA
