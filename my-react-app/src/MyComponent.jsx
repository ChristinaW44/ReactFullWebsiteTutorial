import React, {useState} from "react";

function MyComponent(){
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    // const [age, setAge] = useState(0);
    // const [isEmployed, setIsEmployed] = useState(false);

    // const updateName = () => {
    //     setName("Spongebob");
    // }
    // const incrementAge = () => {
    //     setAge(age + 2);
    // }
    // const toggleEmployed = () => {
    //     setIsEmployed(!isEmployed)
    // }

    function handleNameChange(event){
        setName(event.target.value);
    }
    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }
    function handleCommentChange(event){
        setComment(event.target.value);
    }

    return(
        <div>
            {/* <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>
            <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployed}>Toggle Employed status</button> */}
            <input value={name} onChange={handleNameChange}></input>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number"></input>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter Delivery Instructions"></textarea>
            <p>Comment: {comment}</p>
        </div>
    );
    

}

export default MyComponent