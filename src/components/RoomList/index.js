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
            const {
              room1,
              room2,
              room3,
              room4,
              handleRoom,
              handleSubmit
            } = value;

            return (
              <div>
                <section className="tourlist">
                  <div className="ui four cards">
                    <a className="green card">
                      <Room
                        className="column"
                        room={room1}
                        roomNum={1}
                        handleRoom={handleRoom}
                      />
                    </a>
                    <a className={room2 === true ? 'green card' : 'red card'}>
                      <Room
                        className="column"
                        room={room2}
                        roomNum={2}
                        handleRoom={handleRoom}
                      />
                    </a>
                    <a className={room3 === true ? 'green card' : 'red card'}>
                      <Room
                        className="column"
                        room={room3}
                        roomNum={3}
                        handleRoom={handleRoom}
                      />
                    </a>
                    <a className={room4 === true ? 'green card' : 'red card'}>
                      <Room
                        className="column"
                        room={room4}
                        roomNum={4}
                        handleRoom={handleRoom}
                      />
                    </a>
                  </div>
                  <button
                    style={{ margin: '2rem 2rem 1rem 1rem' }}
                    className="positive ui button"
                    onClick={handleSubmit}
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
