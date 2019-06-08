import React, { Component } from 'react';
import Room from '../Room';
import './tourlist.scss';
import { roomData } from '../../roomData';

export default class TourList extends Component {
  state = {
    rooms: roomData
  };
  removeTour = id => {
    this.setState({
      tours: this.state.tours.filter(e => {
        return e.id !== id;
      })
    });
  };
  render() {
    // console.log(this.state.tours);
    const { rooms } = this.state;

    return (
      <section className="tourlist">
        <div class="ui four cards">
          {rooms.map(room => (
            <a class="red card">
              <Room
                className="column"
                key={room.id}
                room={room}
                removeTour={this.removeTour}
              />
            </a>
          ))}
        </div>
      </section>
    );
  }
}
