import React, {useState, useEffect, useRef} from "react";

// function MyComponent(){
//     // const [name, setName] = useState("Guest");
//     // const [quantity, setQuantity] = useState(1);
//     // const [comment, setComment] = useState("");
//     // const [payment, setPayment] = useState("");
//     // const [shipping, setShipping] = useState("Delivery");
//     // const [age, setAge] = useState(0);
//     // const [isEmployed, setIsEmployed] = useState(false);

//     // const updateName = () => {
//     //     setName("Spongebob");
//     // }
//     // const incrementAge = () => {
//     //     setAge(age + 2);
//     // }
//     // const toggleEmployed = () => {
//     //     setIsEmployed(!isEmployed)
//     // }

//     // function handleNameChange(event){
//     //     setName(event.target.value);
//     // }
//     // function handleQuantityChange(event){
//     //     setQuantity(event.target.value);
//     // }
//     // function handleCommentChange(event){
//     //     setComment(event.target.value);
//     // }
//     // function handlePaymentChange(event){
//     //     setPayment(event.target.value);
//     // }
//     // function handleShippingChange(event){
//     //     setShipping(event.target.value);
//     // }

//     // const [car,setCar] = useState({year:2024, make:"Ford", model:"Mustang"});

//     // function handleYearChange(event){
//     //     setCar(c => ({...c, year: event.target.value}));
//     // }
//     // function handleMakeChange(event){
//     //     setCar(c => ({...c, make: event.target.value}));
//     // }
//     // function handleModelChange(event){
//     //     setCarc(c => ({...c, model: event.target.value}));
//     // }

//     // const [foods, setFoods] = useState(["Apple", "Orange", "Bannana"]);

//     // function handleAddFood(){
//     //     const newFood = document.getElementById("foodInput").value;
//     //     document.getElementById("foodInput").value = "";

//     //     setFoods(f => [...f, newFood]);
//     // }

//     // function handleRemoveFood(index){
//     //     setFoods(foods.filter((_, i) => i !== index));
//     // }

//     const [cars, setCars] = useState([]);
//     const [carYear, setCarYear] = useState(new Date().getFullYear());
//     const [carMake, setCarMake] = useState("");
//     const [carModel, setCarModel] = useState("");

//     function handleAddCar(){
//         const newCar = {year: carYear, make: carMake, model: carModel};
//         setCars(c => [...c, newCar]);

//         setCarYear(new Date().getFullYear());
//         setCarMake("");
//         setCarModel("");
//     }

//     function handleRemoveCar(index){
//         setCars(c => c.filter((_, i) => i !== index))
//     }

//     function handleYearChange(event){
//         setCarYear(event.target.value);
//     }

//     function handleMakeChange(event){
//         setCarMake(event.target.value);
        
//     }
//     function handleModelChange(event){
//         setCarModel(event.target.value);
        
//     }

//     return(
//         <div>
//             {/* <p>Name: {name}</p>
//             <button onClick={updateName}>Set Name</button>
//             <p>Age: {age}</p>
//             <button onClick={incrementAge}>Increment Age</button>
//             <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
//             <button onClick={toggleEmployed}>Toggle Employed status</button> */}
//             {/* <input value={name} onChange={handleNameChange}></input>
//             <p>Name: {name}</p>

//             <input value={quantity} onChange={handleQuantityChange} type="number"></input>
//             <p>Quantity: {quantity}</p>

//             <textarea value={comment} onChange={handleCommentChange} placeholder="Enter Delivery Instructions"></textarea>
//             <p>Comment: {comment}</p>

//             <select value={payment} onChange={handlePaymentChange}>
//                 <option value={""}>Select an option</option>
//                 <option value={"Visa"}>Visa</option>
//                 <option value={"Mastercard"}>Mastercard</option>
//                 <option value={"Giftcard"}>Giftcard</option>
//             </select>
//             <p>Payment: {payment}</p>

//             <label>
//                 <input type="radio" value={"Pick up"} checked={shipping==="Pick up"} onChange={handleShippingChange}/>
//                 Pick up
//             </label>
//             <label>
//                 <input type="radio" value={"Delivery"} checked={shipping==="Delivery"} onChange={handleShippingChange}/>
//                 Delivery
//             </label>
//             <p>Shipping: {shipping}</p> */}

//             {/* <p>Your favourite car is : {car.year} {car.make} {car.model}</p>

//             <input type="number" value={car.year} onChange={handleYearChange}/><br/>
//             <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
//             <input type="text" value={car.model} onChange={handleModelChange}/><br/> */}

//             {/* <h2>List of food</h2>
//             <ul>
//                 {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
//             </ul>

//             <input type="text" id="foodInput" placeholder="Enter food name"/>
//             <button onClick={handleAddFood}>Add food</button> */}

//             <h2>List of Car Objects</h2>
//             <ul>
//                 {cars.map((car, index) => 
//                 <li key={index} onClick={() => handleRemoveCar(index)}>
//                     {car.year} {car.make} {car.model}
//                 </li>)}
//             </ul>

//             <input type="number" value={carYear} onChange={handleYearChange}/><br />
//             <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter car make"/><br />
//             <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter car model"/><br />
//             <button onClick={handleAddCar}>Add Car</button>

//         </div>
//     );
    

// }

// function MyComponent(){
//     const [count, setCount] = useState(0);
//     const [colour, setColour] = useState("green");

//     useEffect(() => {
//         document.title = `Count: ${count} ${colour}`;
//     }, [count, colour]);

//     function addCount(){
//         setCount(c => c + 1);
//     }

//     function subCount(){
//         setCount(c => c - 1);
//     }

//     function changeColour(){
//         setColour(c => c === "green" ? "red" : "green");
//     }

//     return(
//         <>
//             <p style={{color: colour}}>Count: {count}</p>
//             <button onClick={addCount}>Add</button>
//             <button onClick={subCount}>Subtract</button>
//             <br/>
//             <button onClick={changeColour}>Change Colour</button>
//         </>
//     )
// }

// function MyComponent(){
//     const [width, setWidth] = useState(window.innerWidth);
//     const [height, setHeight] = useState(window.innerHeight);

//     useEffect(() => {
//         window.addEventListener("resize", handleResize);
//         console.log("EVENT LISTENER ADDED");

//         return () => {
//             window.removeEventListener("resize", handleResize);
//             console.log("EVENT LISTENER REMOVED");
//         }
//     }, []);

//     useEffect(() => {
//         document.title = `Size: ${width} x ${height}`;
//     }, [width, height]);

//     function handleResize(){
//         setWidth(window.innerWidth);
//         setHeight(window.innerHeight);
//     }

//     return(
//         <>
//             <p>Window Width: {width}px</p>
//             <p>Window Height: {height}px</p>
//         </>
//     )
// }

function MyComponent(){
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    function handleClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick2(){
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick3(){
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "yellow";
    }

    return(
        <div>
            <button onClick={handleClick1}>
                Click me 1!
            </button>
            <input ref={inputRef1}/> <br/>

            <button onClick={handleClick2}>
                Click me 2!
            </button>
            <input ref={inputRef2}/><br/>

            <button onClick={handleClick3}>
                Click me 3!
            </button>
            <input ref={inputRef3}/><br/>
        </div>        
    );
}

export default MyComponent