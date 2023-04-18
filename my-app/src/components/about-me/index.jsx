import './index.css';
import user from '../../assets/users.jpg';

export default function AboutMe() {
      return (
            <>
                  <div className="aboutme-container">
                        <ul className="aboutme-content aboutme-wrap">
                              <li>
                                    <h1>
                                          Salut, je suis François, Développeur
                                          Front-End
                                    </h1>
                              </li>
                              <li>
                                    <p>
                                          Amet minim mollit non deserunt ullamco
                                          est sit aliqua dolor do amet sint.
                                          Velit officia consequat duis enim
                                          velit mollit. Exercitation veniam
                                          consequat sunt nostrud amet.
                                    </p>
                              </li>
                              <li>
                                    <button>Download Resume</button>
                              </li>
                        </ul>
                        <ul className="aboutme-content">
                              <li>
                                    <img src={user} alt="" />
                              </li>
                        </ul>
                  </div>
            </>
      );
}
