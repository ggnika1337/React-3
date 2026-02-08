import "./verbal.css";

function Verbal() {
  return (
    <>
      <div className="verbal-container">
        <div className="img-name">
          <img src="src\assets\Images\verbal.svg" alt="" />
          <h1 className="name">Verbal</h1>
        </div>
        <div>
          <h1 className="rating">
            61 <span className="max-rating">/ 100</span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default Verbal;
