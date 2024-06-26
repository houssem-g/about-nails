// https://codingthesmartway.com/modern-react-from-the-beginning-ep2-starting-with-react-components-jsx/
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "./navigation/RouterConfig";
import "./styles/header.module.css"
import "./styles/footer.module.css"


const App = () => {
  return (
    <>
      <div>   
        <BrowserRouter>
          <RouterConfig />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

