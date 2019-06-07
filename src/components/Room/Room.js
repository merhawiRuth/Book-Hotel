import React, { Component } from 'react';
export default class Tour extends Component {
  handleInfo = () => {
    this.setState({ para: !this.state.para });
  };
  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;
    return (
      <div className="ui cards tour">
        <div className="card">
          <div className="content">
            <div className="header">Room 1</div>
            <div className="meta">New Member</div>
            <div className="description">
              Jenny wants to add you to the group <b>best friends</b>
            </div>
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
