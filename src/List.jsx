
function List() {

    const fruits = [{id: 1, name: 'Banana', calories: 105},
                    {id: 2, name: 'Orange', calories: 45},
                    {id: 3, name: 'Pineapple', calories: 37},
                    {id: 4, name: 'Coconut', calories: 159},
                    {id: 5, name: 'Apple', calories: 95}];

    //fruits.sort((a, b) => a.name.localeCompare(b.name)); //ALPHABETICAL

    const listItems = fruits.map(fruits => <li key={fruits.id}>
                                                {fruits.name}: &nbsp;
                                                <b>{fruits.calories}</b></li>)

    return(
        <>
        <h2>Fruits</h2>
        <ol>{listItems}</ol>
        </>
    );
}

export default List