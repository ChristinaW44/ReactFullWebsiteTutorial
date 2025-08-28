import Header from "./Header"
import Footer from "./Footer";
import Button from "./Button/Button";
import Food from "./Food";
import Card from "./Card";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
import List from "./List";

function App() {
  // const fruits = [{id: 1, name:"apple", calories: 95}, 
  //                   {id: 2, name:"orange", calories: 45}, 
  //                   {id: 3,name:"bannana", calories: 105}, 
  //                   {id: 4,name:"coconut", calories: 159}, 
  //                   {id: 5,name:"pineapple", calories: 37}];
  const fruits = [];
  
  const vegtables = [{id: 6, name:"potatoes", calories: 110}, 
                    {id: 7, name:"celery", calories: 15}, 
                    {id: 8,name:"carrots", calories: 25}, 
                    {id: 9,name:"corn", calories: 63}, 
                    {id: 10,name:"broccoli", calories: 50}];

  return (
    <>
      <Header />
      {fruits.length > 0 && <List  items={fruits} />}
      {vegtables.length > 0 ? <List  items={vegtables} category="Vegtables"/> : null}
      <Footer />
    </>    
  );

}

export default App
