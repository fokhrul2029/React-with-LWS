import React from "react";

import Time from "./Components/Time";
import Button from "./Components/Button";
import Clock from "./Components/Clock";

function App() {
  return (
    <React.Fragment>
      <Time locale="bn-BD" />
      <Button />
      <Clock locale="bn-BD" />
    </React.Fragment>
  );
}

export default App;
