import "./styles.css";
import Calculator from "./Calculator";

export default function App() {
  return (
    <div className="App">
      <h1>Calculator App</h1>
      <Calculator left={3} right={4} operator="*" />
    </div>
  );
}
