import "../App.css";

const Slider = ({ slides, restart, prev, next, count }) => {
  return (
    <div className="main-container">
      <div className="button-container">
        <button onClick={restart} disabled={count === 0}>
          Restart
        </button>
        <button onClick={prev} disabled={count === 0}>
          Prev
        </button>
        <button onClick={next} disabled={count === slides.length - 1}>
          Next
        </button>
      </div>

      <div className="slider-container">
        <h3>{slides[count].name}</h3>
        <p>{slides[count].email}</p>
      </div>
    </div>
  );
};

export default Slider;
