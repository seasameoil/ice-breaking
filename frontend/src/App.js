import logo from "./logo.svg";
import "./App.css";

import CuteCat from "./components/CuteCat/CuteCat";
import BackCard from "./components/BackCard/BackCard";
import PulseButton from "./components/PulseButton/PulseButton";


function App() {
  const callApi = async () => {
    axios.get("/api").then((res) => {
      console.log(res.data.test);
    });
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <>
      <div class="flip">
        <div class="card">
          <div class="front">
            <CuteCat></CuteCat>
          </div>
          <div class="back">
            <BackCard></BackCard>
          </div>
          <PulseButton></PulseButton>
        </div>
      </div>
    </>
  );
}

export default App;
