import CustomLogo from "./CustomLogo";
import "./App.css";
import Segmentcontrol from "./Segmentcontrol";

function App() {
  return (
    <>
      <div className="App">
        <CustomLogo fill="#904FC4" />
        <Segmentcontrol  onChange={(index, value)=> console.log(index, value)}/>
      </div>
    </>
  );
}

export default App;
