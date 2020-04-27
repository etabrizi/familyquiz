import React, { Component } from 'react';
import Questions from './static/questions.json';
import LeoSpaceQuestions from './static/leospace.json';
import Songs from './static/songs.json';
import Flags from './static/flags.json';
import Links from './components/links';
import QuizQuestion from './components/quizQuestion';
import QuizJump from './components/quizJump';
import Navigation from './components/navigation';

import './App.css';

class App extends Component {

  state = {
    heading: 'Heading',
    movies: Questions.questions,
    leoSpaceQuestions: LeoSpaceQuestions.leospace,
    songs: Songs.songs,
    flags: Flags.flags,
    currentSelection: 'movies',
    step: 0,
    isChecked: false
  }

  forward = (e) => {
    e.preventDefault();
    if (this.state.step !== this.state[this.state.currentSelection].length - 1) {
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

  getJumpValue = (e) => {
    e.preventDefault();
    let numberValue = parseFloat(e.target.stepper.value);
    this.setState((prevState, props) => {
      return {
        step: (numberValue - 1)
      };
    })
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


  render() {
    return (
      <div className="quiz-app">
        <p className="ticker"><strong>Question: </strong>{this.state.step + 1} / {this.state[this.state.currentSelection].length}</p>
        <QuizQuestion
          title={this.state[this.state.currentSelection][this.state.step].title}
          type={this.state[this.state.currentSelection][this.state.step].type}
          src={this.state[this.state.currentSelection][this.state.step].src}
          options={this.state[this.state.currentSelection][this.state.step].options}
          answer={this.state[this.state.currentSelection][this.state.step].answer}
          isChecked={this.state.isChecked} />
        <Links forward={this.forward} back={this.back} />
        <QuizJump getJumpValue={this.getJumpValue} />
        <Navigation
          currentSelection={this.state.currentSelection}
          changeSelection={this.changeSelection}
          isChecked={this.state.isChecked}
          showAnswers={this.showAnswers} />
      </div>
    );
  }
}

export default App;
