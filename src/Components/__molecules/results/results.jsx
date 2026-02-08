import Rating from "../ratingcircle/Rating";
import "./result.css";

function Result() {
  return (
    <>
      <div className="result">
        <h1 className="Heading">Your Result</h1>
        <Rating />
        <h1 className="Rating">Great</h1>
        <h1 className="Description">
          Your performance exceed 65% of the people conducting the test here!
        </h1>
      </div>
    </>
  );
}

export default Result;
