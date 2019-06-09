import React, { Component } from 'react';
import Room from '../Room/Room';
import './roomlist.scss';
import { ProductConsumer } from './../../context';

export default class RoomList extends Component {
  render() {
    return (
      <>
        <ProductConsumer>
          {value => {
            const { room1, room2, room3, room4, handleRoom } = value;

            return (
              <div>
                <section className="tourlist">
                  <div className="ui four cards">
                    <a className="red card" onClick={() => handleRoom('room1')}>
                      <Room className="column" room={room1} roomNum={1} />
                    </a>
                    <a className="red card" onClick={() => handleRoom('room2')}>
                      <Room
                        className="column"
                        room={room2}
                        roomNum={2}
                        makeActive={this.handleClick}
                      />
                    </a>
                    <a className="red card" onClick={() => handleRoom('room3')}>
                      <Room
                        className="column"
                        room={room3}
                        roomNum={3}
                        makeActive={this.handleClick}
                      />
                    </a>
                    <a className="red card" onClick={() => handleRoom('room4')}>
                      <Room
                        className="column"
                        room={room4}
                        roomNum={4}
                        makeActive={this.handleClick}
                      />
                    </a>
                  </div>
                  <button
                    style={{ margin: '2rem 2rem 1rem 1rem' }}
                    className="positive ui button"
                  >
                    Submit
                  </button>
                </section>
              </div>
            );
          }}
        </ProductConsumer>
      </>
    );
  }
}
