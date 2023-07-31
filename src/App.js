import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  const [steps, setSteps] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {
    if (steps > 1) {
      setSteps((prevState) => prevState - 1);
    }
  };

  const handleNext = () => {
    if (steps < 3) {
      setSteps((prevState) => prevState + 1);
    }
  };

  return (
    <>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={steps >= 1 ? "active" : ""}>1</div>
            <div className={steps >= 2 ? "active" : ""}>2</div>
            <div className={steps >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage steps={steps}>{messages[steps - 1]}</StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" color="#fff" onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>
            <Button bgColor="#7950f2" color="#fff" onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

function StepMessage({ steps, children }) {
  return (
    <div className="message">
      Step {steps}: {children}
    </div>
  );
}

function Button({ color, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: color }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default App;
