import { useState } from "react";

function Form({getData}) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [alert, setAlert] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault();
    if(isNaN(weight) || isNaN(height)){
      setAlert(true);
    }
    else{
      setAlert(false);
      getData(weight,height);
      setHeight('');
      setWeight('');
    }
  };

  return (
    <div className="formContainer">
      <div className="bmiForm">
        <h1>BMI Calculator</h1>
        <form onSubmit={onSubmit}>
          <label htmlFor="weight">Weight(Kg)</label>
          <br />
          <input
            type="text"
            name="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
          <br />
          <label htmlFor="height">Height(m)</label>
          <br />
          <input
            type="text"
            name="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
          <br />
          <button type="submit">Get BMI</button>
        </form>
        {alert && <div className="formErrorMsg" >Inavlid Inputs</div>}
      </div>
    </div>
  );
}

export default Form;
