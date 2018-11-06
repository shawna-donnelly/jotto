import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import { getSecretWord } from './actions';

export class UnconnectedApp extends Component {

  /**
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    // get the secret word
    this.props.getSecretWord();
  }

  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GuessedWords guessedWords={[
            {guessedWord: 'train', letterMatchCount: 3}
          ]} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord }
}

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
