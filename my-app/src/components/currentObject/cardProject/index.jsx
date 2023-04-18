import './index.css';
import rec from '../../../assets/Rectangle30.png';
export default function CardProject() {
      return (
            <>
                  <div className="card-container">
                        <ul className="card-list">
                              <li>
                                    <img src={rec} alt="" />
                              </li>
                        </ul>
                        <ul className="card-list card-content">
                              <li>
                                    <h1> Photographer</h1>
                              </li>
                              <li className="card-list-desc">
                                    <span className="card-date">2023</span>{' '}
                                    <small>Photographer</small>
                              </li>
                              <li>
                                    <p>
                                          Description project Lorem ipsum dolor
                                          sit amet, consectetur adipisicing
                                          elit. Ex consequatur laboriosam nulla,
                                          perferendis autem fugiat eum neque
                                          eius praesentium et repudiandae rerum?
                                          Id, aliquam repudiandae repellendus
                                          velit maxime illo sapiente.
                                    </p>
                              </li>
                              <li className="card-list-tags">
                                    <span>HTML</span>
                                    <span>CSS</span>
                                    <span>Redux/Toolkit</span>
                                    <span>React.js</span>
                              </li>
                        </ul>
                  </div>
            </>
      );
}
