import React, { Component } from 'react';
export default class Tour extends Component {
  handleInfo = () => {
    this.setState({ para: !this.state.para });
  };
  render() {
    const { id, info } = this.props.room;
    return (
      <div className="ui cards tour">
        <div className="card">
          <div className="content">
            <div className="header">Room {id}</div>
            <div className="meta">New Member</div>
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
