import "./App.css";
import Form from "./components/Form";
import BmiData from "./components/BmiData";
import BmiList from "./components/BmiList";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  const [bmi, setbmi] = useState("00");
  const [bmiType, setBmiType] = useState("Not Calculated");
  const [changeWeight, setChangeWeight] = useState({ weight: "", type: "" });
  const [bimRange, setBimRange] = useState({
    underWeight: { low: "" },
    normal: { low: "", high: "" },
    overWeight: { low: "", high: "" },
    obesityOne: { low: "", high: "" },
    obesityTwo: { low: "", high: "" },
    obesityThree: { high: "" },
  });

  const onFormSub = (w, h) => {
    let b = bmiCalc(w, h);
    setbmi(b);
    setBmiType(weightType(b));

    const range = {
      underWeight: { low: calWeight(18.5, h) },
      normal: { low: calWeight(18.5, h), high: calWeight(24.9, h) },
      overWeight: { low: calWeight(25, h), high: calWeight(29.9, h) },
      obesityOne: { low: calWeight(30, h), high: calWeight(34.9, h) },
      obesityTwo: { low: calWeight(35, h), high: calWeight(39.9, h) },
      obesityThree: { high: calWeight(40, h) },
    };
    setBimRange(range);
    setChangeWeight(weightChange(b , w ,range));
    setShow(true);
  };
  const bmiCalc = (w, h) => (w / (h * h)).toFixed(2);

  const calWeight = (b, h) => (b * h * h).toFixed(2);

  const weightChange = (b, w, range) => {
    let changeObj;
    if (b > 24.9) {
      changeObj = {
        weight: (w - range.normal.high).toFixed(2),
        type: "positive",
      };
      return changeObj;
    } else if (b < 18.5) {
      changeObj = {
        weight: (range.normal.low - w).toFixed(2),
        type: "negative",
      };
      return changeObj;
    } else {
      changeObj = {
        weight: 0,
        type: "normal",
      };
      return changeObj;
    }
  };

  const weightType = (bmi) => {
    if (bmi < 18.5) {
      return "Under Weight";
    } else if (18.5 < bmi && bmi < 24.9) {
      return "Normal";
    } else if (24.9 < bmi && bmi < 29.9) {
      return "Over Weight";
    } else if (29.9 < bmi && bmi < 34.9) {
      return "Obesity Class I";
    } else if (34.9 < bmi && bmi < 39.9) {
      return "Obesity Class II";
    } else if (bmi > 39.9) {
      return "Obesity Class III";
    }
  };

  return (
    <div className="App">
      <Form getData={onFormSub} />
      {show && (
      <div className="bmiDetails">
        <BmiData bmiNo={bmi} bmiType={bmiType} changeWeight = {changeWeight}/>
        <BmiList range={bimRange} bmi={bmi} />
      </div>
      )}
    </div>
  );
}

export default App;
