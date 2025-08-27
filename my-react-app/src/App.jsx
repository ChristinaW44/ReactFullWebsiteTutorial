import Header from "./Header"
import Footer from "./Footer";
import Button from "./Button/Button";
import Food from "./Food";
import Card from "./Card";
import Student from "./Student";
import UserGreeting from "./UserGreeting";

function App() {
  return (
    <>
      <Header />
      <UserGreeting isLoggedIn={false} username="christina"/>
      <Footer />
    </>    
  );

}

export default App
