import React, { Component } from 'react';
import Room from '../Room/Room';
import './tourlist.scss';
import { roomData } from '../../roomData';

export default class RoomList extends Component {
  state = {
    rooms: roomData
  };
  render() {
    const { rooms } = this.state;
    return (
      <section className="tourlist">
        <div className="ui four cards">
          {rooms.map(room => (
            <a className="blue card">
              <Room key={room.id} details={room} />
            </a>
          ))}
        </div>
      </section>
    );
  }
}
