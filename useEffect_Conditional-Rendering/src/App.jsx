import { useState } from "react";
function App() {
  return (
    <>
      <div>
        <Lightbulb />
      </div>
    </>
  );

  function Lightbulb() {
    const [BulbOn , setBulbOn] = useState(true);
    return (
      <div>
        <BulbState BulbOn={BulbOn} />
        <ToogleBublbState BulbOn={BulbOn} setBulbOn={setBulbOn} />
      </div>
    );
  }

  function BulbState({BulbOn}) {
    return(
      <div>
        {BulbOn ? "Bulb is on" : "Bulb is off"}
      </div>
    )
  }
  function ToogleBublbState({BulbOn,setBulbOn}) {

    function toggle() {
      setBulbOn(!BulbOn)
    }
    return(
      <div>
        <button onClick={toggle}>Toogle the bulb</button>
      </div>
    )
  }
}

export default App;
