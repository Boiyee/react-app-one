
function Food() {

    const food1 = 'Watermelon';
    const food2 = 'Coconut';

    return (
        <ul>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
            <li>Banana</li>
        </ul>
    );
}

export default Food