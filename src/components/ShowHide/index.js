import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    firstName: true,
    lastName: true,
  }

  dispalyFirstname = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  dispalyLastname = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="bg">
        <h1 className="title">Show/Hide</h1>
        <div className="container">
          <div className="button-card-container">
            <button onClick={this.dispalyFirstname} type="button">
              Show/Hide Firstname
            </button>
            {firstName ? null : (
              <div className="nameCard">
                <p className="name">Joe</p>
              </div>
            )}
          </div>

          <div className="button-card-container">
            <button onClick={this.dispalyLastname} type="button">
              Show/Hide Lastname
            </button>
            {lastName ? null : (
              <div className="nameCard">
                <p className="name">Jonas</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
