import React from "react";
import ReactDOM from "react-dom";
import Typing from "./Typing";
import "./styles.css";

class App extends React.Component {
  state = {
    lines: [
      {
        goal: "This Is my complete",
        isLink: false,
        isDone: false
      },
      {
        goal: "ddfff",
        isLink: false,
        isDone: false
      }
    ]
  };

  handleFinishedTyping(goal) {
    const { lines } = this.state;

    const newLines = lines.map(line => {
      if (line.goal === goal) {
        line.goal = true;
      }

      return line;
    });
    console.log("was called ");

    this.setState({ lines: newLines });
  }

  render() {
    const { lines } = this.state;

    return (
      <div className="App">
        {lines.map(line => (
          <Typing
            goal={line.goal}
            finished={goal => this.handleFinishedTyping(goal)}
          />
        ))}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
