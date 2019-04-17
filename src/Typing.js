import React from "react";
import "./styles.css";

class Typing extends React.Component {
  state = {
    currentText: "",
    goal: ""
  };

  render() {
    const { currentText } = this.state;
    const { isLink, isDone } = this.props;
    const Carat = !isDone && <span className="blink">|</span>;

    const paragraph = (
      <span>
        {currentText}
        {Carat}
      </span>
    );

    const link = (
      <a href="www.site.com">
        {currentText}
        {Carat}
      </a>
    );

    return <React.Fragment>{isLink ? link : paragraph}</React.Fragment>;
  }

  componentDidMount() {
    if (this.props.isDone) {
      this.setState({ currentText: this.props.goal });
      return;
    }

    this.setState({ goal: this.props.goal }, this.typeChar);
  }

  typeChar(index = 1) {
    const { goal } = this.props;
    if (index > goal.length) {
      this.props.finished(goal);
      return;
    }

    const textToWrite = goal.slice(0, index);
    this.setState({ currentText: textToWrite }, () =>
      setTimeout(() => this.typeChar(index + 1), 200)
    );
  }
}

export default Typing;
