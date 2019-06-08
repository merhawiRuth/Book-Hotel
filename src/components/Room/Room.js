import React, { Component } from 'react';
import './room.scss';
export default class Tour extends Component {
  state = {
    clicked: false
  };
  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  };
  render() {
    const { id, info } = this.props.room;
    return (
      <div className="ui cards tour">
        <div className="card">
          <div className="content">
            <span className="header">
              Room {id}
              <span style={{ float: 'right' }}>
                {this.state.clicked === true && <i className="check icon" />}{' '}
              </span>
            </span>
            <div className="description">{info}</div>
          </div>
          <div className="extra content">
            Adults(18+)
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
            Children(0-17)
            <select>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}
