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
              chil1,
              chil2,
              chil3,
              chil4,
              Adul1,
              Adul2,
              Adul3,
              Adul4,
              handleRoom,
              handleSubmit,
              handleChangedValue
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
                        saveSelectValue={handleSubmit}
                      />
                      <div className="extra content">
                        {room1 ? (
                          <div className="selector">
                            <div className="selector-item">
                              <h5>Adults(18+)</h5>
                              <select
                                name="Adul1"
                                onChange={handleChangedValue}
                                value={Adul1}
                              >
                                <option value="1">1</option>
                                <option value="2">2</option>
                              </select>
                            </div>
                            <div className="selector-item">
                              <h5>Children(0-17)</h5>
                              <select
                                name="chil1"
                                onChange={handleChangedValue}
                                value={chil1}
                              >
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
                              <select value={Adul1} disabled>
                                <option value="1">1</option>
                                <option value="2">2</option>
                              </select>
                            </div>
                            <div className="selector-item">
                              <h5>Children(0-17)</h5>
                              <select value={chil1} disabled>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                          </div>
                        )}
                      </div>
                    </a>

                    <a className={room2 === true ? 'green card' : 'red card'}>
                      <Room
                        className="column"
                        room={room2}
                        roomNum={2}
                        handleRoom={handleRoom}
                        saveSelectValue={handleSubmit}
                        changedValue={handleChangedValue}
                      />
                      <div className="extra content">
                        {room2 ? (
                          <div className="selector">
                            <div className="selector-item">
                              <h5>Adults(18+)</h5>
                              <select
                                name="Adul2"
                                onChange={handleChangedValue}
                                value={Adul2}
                              >
                                <option value="1">1</option>
                                <option value="2">2</option>
                              </select>
                            </div>
                            <div className="selector-item">
                              <h5>Children(0-17)</h5>
                              <select
                                name="chil2"
                                onChange={handleChangedValue}
                                value={chil2}
                              >
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
                              <select value={Adul2} disabled>
                                <option value="1">1</option>
                                <option value="2">2</option>
                              </select>
                            </div>
                            <div className="selector-item">
                              <h5>Children(0-17)</h5>
                              <select value={chil2} disabled>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                          </div>
                        )}
                      </div>
                    </a>
                    <a className={room3 === true ? 'green card' : 'red card'}>
                      <Room
                        className="column"
                        room={room3}
                        roomNum={3}
                        handleRoom={handleRoom}
                        saveSelectValue={handleSubmit}
                        changedValue={handleChangedValue}
                      />
                      <div className="extra content">
                        {room3 ? (
                          <div className="selector">
                            <div className="selector-item">
                              <h5>Adults(18+)</h5>
                              <select
                                name="Adul3"
                                onChange={handleChangedValue}
                                value={Adul3}
                              >
                                <option value="1">1</option>
                                <option value="2">2</option>
                              </select>
                            </div>
                            <div className="selector-item">
                              <h5>Children(0-17)</h5>
                              <select
                                name="chil3"
                                onChange={handleChangedValue}
                                value={chil3}
                              >
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
                              <select value={Adul3} disabled>
                                <option value="1">1</option>
                                <option value="2">2</option>
                              </select>
                            </div>
                            <div className="selector-item">
                              <h5>Children(0-17)</h5>
                              <select value={chil3} disabled>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                          </div>
                        )}
                      </div>
                    </a>
                    <a className={room4 === true ? 'green card' : 'red card'}>
                      <Room
                        className="column"
                        room={room4}
                        roomNum={4}
                        handleRoom={handleRoom}
                      />
                      <div className="extra content">
                        {room4 ? (
                          <div className="selector">
                            <div className="selector-item">
                              <h5>Adults(18+)</h5>
                              <select
                                name="Adul4"
                                onChange={handleChangedValue}
                                value={Adul4}
                              >
                                <option value="1">1</option>
                                <option value="2">2</option>
                              </select>
                            </div>
                            <div className="selector-item">
                              <h5>Children(0-17)</h5>
                              <select
                                name="chil4"
                                onChange={handleChangedValue}
                                value={chil4}
                              >
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
                              <select value={Adul4} disabled>
                                <option value="1">1</option>
                                <option value="2">2</option>
                              </select>
                            </div>
                            <div className="selector-item">
                              <h5>Children(0-17)</h5>
                              <select value={chil4} disabled>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                            </div>
                          </div>
                        )}
                      </div>
                    </a>
                  </div>
                  <button
                    style={{ margin: '2rem 2rem 0rem 0rem' }}
                    className="positive ui button"
                    onClick={() => handleSubmit(this.state)}
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
