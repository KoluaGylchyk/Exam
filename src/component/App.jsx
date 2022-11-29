import React, { useState } from "react";
import Home from "./Home/Home";

const App = () => {
  const [myMessage, setMyMessage] = useState("Hello, it's me Mario!!!");
  return (
    <div>
      <Home message={myMessage} message2 = {setMyMessage}/>
    </div>
  );
};

export default App;
