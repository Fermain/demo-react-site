import { useState } from "react";

import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";

export default function App() {
  const [clicked, setClicked] = useState(false);

  function onClick() {
    setClicked(!clicked)
  }

  return (
    <div>
      <Header bg="black" text="white" padding="50px" onClick={onClick}>
        <h1>Site Logo</h1>
        <div>{clicked ? "true" : "false"}</div>
      </Header>

      <main>
        <h2>Site Content</h2>
      </main>

      <Footer buttonWasClicked={clicked}>
        Copyright {(new Date()).getFullYear()}
      </Footer>
    </div>
  );
}
