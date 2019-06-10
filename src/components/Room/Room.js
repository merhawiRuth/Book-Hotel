import React, { Component } from 'react';
import './room.scss';
export default class Tour extends Component {
  render() {
    const { roomNum, room, handleRoom } = this.props;
    return (
      <div className="ui cards tour">
        <div className="card">
          <div className="content">
            <span className="header">
              Room {roomNum}
              <span
                style={{ float: 'right' }}
                onClick={() => handleRoom(roomNum)}
              >
                {room ? (
                  <i className="check circle icon" />
                ) : (
                  <i className="check circle outline icon" />
                )}
              </span>
            </span>
            <div className="description" />
          </div>
          <div className="extra content">
            {room ? (
              <div className="selector">
                <div className="selector-item">
                  <h5>Adults(18+)</h5>
                  <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
                <div className="selector-item">
                  <h5>Children(0-17)</h5>
                  <select>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>
            ) : (
              <div className="selector">
                <div className="selector-item">
                  <h5>Adults(18+)</h5>
                  <select disabled>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
                <div className="selector-item">
                  <h5>Children(0-17)</h5>
                  <select disabled>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
