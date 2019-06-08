import React, { Component } from 'react';
import Room from '../Room/Room';
import './roomlist.scss';
import { roomData } from '../../roomData';

export default class RoomList extends Component {
  state = {
    rooms: roomData
  };
  handleClick = () => {};
  render() {
    const { rooms } = this.state;
    return (
      <section className="tourlist">
        <div className="ui four cards">
          {rooms.map(room =>
            room.active === true ? (
              <a className="blue card">
                <Room
                  key={room.id}
                  details={room}
                  onClick={this.handleClick(room.id)}
                />
              </a>
            ) : (
              <a className="white card">
                <Room key={room.id} details={room} />
              </a>
            )
          )}
        </div>
      </section>
    );
  }
}
