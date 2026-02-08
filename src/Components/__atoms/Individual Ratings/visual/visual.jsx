import "./visual.css";

function Visual() {
  return (
    <>
      <div className="visual-container">
        <div className="img-name">
          <img src="src\assets\Images\Visual.svg" alt="" />
          <h1 className="name">Visual</h1>
        </div>
        <div>
          <h1 className="rating">
            73 <span className="max-rating">/ 100</span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default Visual;
