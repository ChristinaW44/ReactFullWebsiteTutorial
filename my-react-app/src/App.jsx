import Header from "./Header"
import Footer from "./Footer";
import Button from "./Button/Button";
import Food from "./Food";
import Card from "./Card";
import Student from "./Student";

function App() {
  return (
    <>
      <Header />
      <Student name="Spongebob" age={30} isStudent={true}/>
      <Student name="Patrick" age={42} isStudent={false}/>
      <Student name="Squidward" age={50} isStudent={false}/>
      <Student name="Sandy" age={27} isStudent={true}/>
      <Footer />
    </>    
  );

}

export default App
