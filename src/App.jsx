import React from "react";

import Time from "./Components/Time";
import Button from "./Components/Button";

function App() {
  return (
    <React.Fragment>
      <Time locale="bn-BD" />
      <Button text="This is a Button" />
    </React.Fragment>
  );
}

export default App;
