import "./App.css";
import PassPropsForAcorden from "./components/PassPropsForAcorden";
import Slide from "./components/Slide";

function App() {
  // function getPrimeNumbers(num) {
  //   let arr = [];
  //   next: for (let i = 2; i <= 9; i++) {
  //     for (let j = 2; j < i / 2; j++) {
  //       if (i % j == 0) continue next;
  //     }

  //     arr.push(i);
  //   }
  //   return arr;
  // }

  // console.log(getPrimeNumbers(10));

  return (
    <div className="App">
      <Slide />
      <PassPropsForAcorden />
      <Slide />
    </div>
  );
}

export default App;
