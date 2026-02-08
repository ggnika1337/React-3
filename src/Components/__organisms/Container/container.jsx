import Result from "../../__molecules/results/result";
import Summary from "../../__molecules/Summary/summary";
import "./container.css";

function Container() {
  return (
    <>
      <div className="root">
        <Result />
        <Summary />
      </div>
    </>
  );
}

export default Container;
