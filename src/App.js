import React, { Component } from 'react';

import SongsEighties from './static/80s-songs.json';
import SongsNoughties from './static/00s-songs.json';
import Films from './static/films.json';
import Flags from './static/flags.json';

import Links from './components/links';
import QuizQuestion from './components/quizQuestion';
import QuizJump from './components/quizJump';
import Navigation from './components/navigation';

import './App.css';

class App extends Component {

  state = {
    films: Films.films,
    songsEighties: SongsEighties.songsEighties,
    songsNoughties: SongsNoughties.songsNoughties,
    flags: Flags.flags,
    currentSelection: 'songsEighties',
    navigation: [{
      id: 'songsEighties',
      linkCopy: "80's songs",
      icon: 'headphones'
    },
    {
      id: 'songsNoughties',
      linkCopy: "00's songs",
      icon: 'headphones'
    },
    {
      id: 'films',
      linkCopy: "Films",
      icon: 'video-camera'
    },
    {
      id: 'flags',
      linkCopy: 'Flags'
    }
    ],
    step: 0,
    isChecked: false,
    stepperValue: ''
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
    if (numberValue < this.state[this.state.currentSelection].length + 1) {
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
