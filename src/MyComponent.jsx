import { Linter } from "eslint";
import React, {useState} from "react";

function MyComponent() {

    const [foods, setFoods] = useState(["Apple", "Banana", "Watermelon"]);

    function handleAddFood() {}

    function handleRemoveFood() {}

    return(
    <div>
        <h2>List of Food</h2>
        <ul>
            {foods.map((food, index) => <li></li>)}
        </ul>
    </div>
    );
}

export default MyComponent