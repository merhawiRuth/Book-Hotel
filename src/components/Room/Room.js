import React, { Component } from 'react';
import './room.scss';
export default class Room extends Component {
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
        </div>
      </div>
    );
  }
}
