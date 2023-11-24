import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";
function App() {
  let [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if(buttonText === 'C'){
      setCalVal("");
    }
    else if(buttonText == '='){
      setCalVal(eval(calVal));
    }
    else{
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer
        onButtonClick={onButtonClick}
      ></ButtonsContainer>
    </div>
  );
}

export default App;
