function BmiData({ bmiNo, bmiType, changeWeight }) {
  console.log(changeWeight);

  return (
    <div className="dataContainer">
      <h4>Your BMI Score</h4>
      <h2>{bmiNo}</h2>
      <h1>{bmiType}</h1>
      {changeWeight.type === "positive" && (
        <p className="text-danger">
          "You need lose <b>{changeWeight.weight}</b>"
        </p>
      )}
      {changeWeight.type === "negative" && (
        <p className="text-warning">
          "You need gain <b>{changeWeight.weight}</b>"
        </p>
      )}
      {changeWeight.type === "normal" && (
        <p className="text-success">"Your weight is Normal,Keep it"</p>
      )}
    </div>
  );
}

export default BmiData;
