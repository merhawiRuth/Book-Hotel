import React, { Component } from 'react';
import './room.scss';
export default class Tour extends Component {
  // state = {
  //   clicked: false,
  //   active: false
  // };
  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked,
      active: !this.state.active
    });
  };
  render() {
    const { id, info, active } = this.props.details;
    return (
      <div className="ui cards tour">
        <div className="card">
          <div className="content">
            <span className="header">
              Room {id}
              <span style={{ float: 'right' }} onClick={this.handleClick}>
                {active === true ? (
                  <i className="check circle icon" />
                ) : (
                  <i className="check circle outline icon" />
                )}{' '}
              </span>
            </span>
            <div className="description">{info}</div>
          </div>
          <div className="extra content">
            {active === true ? (
              <div>
                <span>Adults(18+)</span>
                <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
                <span>Children(0-17)</span>
                <select>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            ) : (
              <div>
                <span>Adults(18+)</span>
                <select disabled>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
                <span>Children(0-17)</span>
                <select disabled>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
