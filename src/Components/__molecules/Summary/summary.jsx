import Memory from "../../__atoms/Individual Ratings/memory/memory";
import Reaction from "../../__atoms/Individual Ratings/reaction/reaction";
import Verbal from "../../__atoms/Individual Ratings/verbal/verbal";
import Visual from "../../__atoms/Individual Ratings/visual/visual";
import "./summary.css";

function Summary() {
  return (
    <>
      <div className="container">
        <h1 className="heading">Summary</h1>
        <Reaction />
        <Memory />
        <Verbal />
        <Visual />
        <button className="btn">Continue</button>
      </div>
    </>
  );
}

export default Summary;
