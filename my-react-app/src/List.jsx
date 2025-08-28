function List(props){
    // const fruits = [{id: 1, name:"apple", calories: 95}, 
    //                 {id: 2, name:"orange", calories: 45}, 
    //                 {id: 3,name:"bannana", calories: 105}, 
    //                 {id: 4,name:"coconut", calories: 159}, 
    //                 {id: 5,name:"pineapple", calories: 37}];

    const itemList = props.items;
    const category = props.category;

    itemList.sort((a,b) => a.name.localeCompare(b.name));

    const lowCalFruits = itemList.filter(fruit => fruit.calories < 100);
    const highCalFruits = itemList.filter(fruit => fruit.calories >= 100);

    const listItems = itemList.map(fruit => <li key={fruit.id}>
                                            {fruit.name}: &nbsp;
                                            <b>{fruit.calories}</b></li>);

    return(<>
            <h3>{category}</h3>
            <ol>{listItems}</ol>
    </>);
}

export default List