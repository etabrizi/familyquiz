import React, { Component } from 'react';
import Links from './components/links';
import QuizQuestion from './components/quizQuestion';
import QuizJump from './components/quizJump';
import Navigation from './components/navigation';

import './App.css';

class App extends Component {

  state = {
    currentSelection: 'tv',
    navigation: [
      {
        id: 'tv',
        linkCopy: "TV shows",
        icon: 'video-camera'
      },
      {
        id: 'chocolate',
        linkCopy: 'Chocolate bars'
      },
      {
        id: 'cars',
        linkCopy: 'Cars'
      }
    ],
    step: 0,
    questionsLength: null,
    isChecked: false,
    stepperValue: ''
  }

  forward = (e) => {
    e.preventDefault();
    if (this.state.step !== (this.state.questionsLength - 1)) {
      this.setState((prevState, props) => {
        return {
          step: prevState.step + 1
        };
      })
    } else {
      this.setState((prevState, props) => {
        return {
          step: 0
        };
      })
    }
  }

  back = (e) => {
    e.preventDefault();
    if (this.state.step !== 0) {
      this.setState((prevState, props) => {
        return {
          step: prevState.step - 1
        };
      })
    }
  }

  showAnswers = () => {
    this.setState({
      isChecked: !this.state.isChecked
    });
  }

  updateStepper = (e) => {
    e.preventDefault();
    let numberValue = e.target.value;
    this.setState((prevState, props) => {
      return {
        stepperValue: numberValue
      }
    })
  }

  getJumpValue = (e) => {
    e.preventDefault();
    let numberValue = parseFloat(e.target.stepper.value);
    if (numberValue < this.state.questionsLength + 1) {
      this.setState((prevState, props) => {
        return {
          step: (numberValue - 1),
          stepperValue: ''
        }
      })
    }
  }

  changeSelection = (e) => {
    e.preventDefault();
    let selection = e.target.id;
    this.setState((prevState, props) => {
      return {
        currentSelection: selection,
        step: 0
      };
    })
  }

  setQuestionLength = (length) => {
    if (length !== null) {
      this.setState((prevState, props) => {
        return {
          questionsLength: length
        };
      })
    }
  }


  render() {
    return (
      <div className="quiz-app">
        <p className="ticker"><strong>Question: </strong>{this.state.step + 1}/ {this.state.questionsLength}</p>
        <QuizQuestion
          quizCategory={this.state.currentSelection}
          step={this.state.step}
          isChecked={this.state.isChecked}
          setQuestionLength={this.setQuestionLength} />
        <Links forward={this.forward} back={this.back} />
        <QuizJump getJumpValue={this.getJumpValue} stepperValue={this.state.stepperValue} updateStepper={this.updateStepper} />
        <Navigation
          navigation={this.state.navigation}
          currentSelection={this.state.currentSelection}
          changeSelection={this.changeSelection}
          isChecked={this.state.isChecked}
          showAnswers={this.showAnswers} />
      </div>
    );
  }
}

export default App;
