import "./memory.css";

function Memory() {
  return (
    <>
      <div className="brain-container">
        <div className="img-name">
          <img src="src\assets\Images\brain.svg" alt="" />
          <h1 className="name">Memory</h1>
        </div>
        <div>
          <h1 className="rating">
            92 <span className="max-rating">/ 100</span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default Memory;
