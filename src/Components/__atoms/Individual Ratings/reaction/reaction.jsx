import "./reaction.css";

function Reaction() {
  return (
    <>
      <div className="rating-container">
        <div className="img-name">
          <img src="src\assets\Images\reaction.svg" alt="" />
          <h1 className="name">Reaction</h1>
        </div>
        <div>
          <h1 className="rating">
            80 <span className="max-rating">/ 100</span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default Reaction;
