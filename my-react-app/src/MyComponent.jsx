import React, {useState} from "react";

function MyComponent(){
    // const [name, setName] = useState("Guest");
    // const [quantity, setQuantity] = useState(1);
    // const [comment, setComment] = useState("");
    // const [payment, setPayment] = useState("");
    // const [shipping, setShipping] = useState("Delivery");
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

    // function handleNameChange(event){
    //     setName(event.target.value);
    // }
    // function handleQuantityChange(event){
    //     setQuantity(event.target.value);
    // }
    // function handleCommentChange(event){
    //     setComment(event.target.value);
    // }
    // function handlePaymentChange(event){
    //     setPayment(event.target.value);
    // }
    // function handleShippingChange(event){
    //     setShipping(event.target.value);
    // }

    const [car,setCar] = useState({year:2024, make:"Ford", model:"Mustang"});

    function handleYearChange(event){
        setCar(c => ({...c, year: event.target.value}));
    }
    function handleMakeChange(event){
        setCar(c => ({...c, make: event.target.value}));
    }
    function handleModelChange(event){
        setCarc(c => ({...c, model: event.target.value}));
    }

    return(
        <div>
            {/* <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>
            <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployed}>Toggle Employed status</button> */}
            {/* <input value={name} onChange={handleNameChange}></input>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number"></input>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter Delivery Instructions"></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value={""}>Select an option</option>
                <option value={"Visa"}>Visa</option>
                <option value={"Mastercard"}>Mastercard</option>
                <option value={"Giftcard"}>Giftcard</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value={"Pick up"} checked={shipping==="Pick up"} onChange={handleShippingChange}/>
                Pick up
            </label>
            <label>
                <input type="radio" value={"Delivery"} checked={shipping==="Delivery"} onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p> */}

            <p>Your favourite car is : {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={handleYearChange}/><br/>
            <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
            <input type="text" value={car.model} onChange={handleModelChange}/><br/>

        </div>
    );
    

}

export default MyComponent