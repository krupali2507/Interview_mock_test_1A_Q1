import {Component} from 'react'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    userInput: '',
    showPara: false,
  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onClickButton = () => {
    const {userInput} = this.state

    if (userInput !== '') {
      this.setState(prevState => ({
        isSave: !prevState.isSave,
        showPara: !prevState.showPara,
        userInput,
      }))
    }
  }

  render() {
    const {userInput, showPara} = this.state
    const btnText = showPara ? 'Edit' : 'Save'
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>Editable Text Input</h1>
          <div className="input-container">
            <div>
              {showPara ? (
                <p>{userInput}</p>
              ) : (
                <input
                  type="text"
                  className="input-control"
                  onChange={this.onChangeUserInput}
                  value={userInput}
                />
              )}

              <button
                type="button"
                className="btn"
                onClick={this.onClickButton}
              >
                {btnText}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
