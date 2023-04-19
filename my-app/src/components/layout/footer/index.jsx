import './index.css';
import ButtonMailto from '../../currentObject/buttonMailTo/index.jsx';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
      return (
            <footer className="footer">
                  <nav className="footer-nav">
                        <ul>
                              <li>
                                    <ButtonMailto
                                          label="Me contacter"
                                          mailto="mailto:Schmitt.francois.1699@gmail.com"
                                    />
                              </li>
                        </ul>
                        <ul className="footer-list-link">
                              <li>
                                    <NavLink
                                          to="https://github.com/FrancoisSchmitt"
                                          className={({
                                                isActive,
                                                isPending,
                                          }) =>
                                                isPending
                                                      ? 'pending'
                                                      : isActive
                                                      ? 'active'
                                                      : ''
                                          }
                                    >
                                          <FontAwesomeIcon icon={faGithub} />
                                    </NavLink>{' '}
                              </li>
                              <li>
                                    <NavLink
                                          to="https://www.linkedin.com/in/schmitt-francois/"
                                          className={({
                                                isActive,
                                                isPending,
                                          }) =>
                                                isPending
                                                      ? 'pending'
                                                      : isActive
                                                      ? 'active'
                                                      : ''
                                          }
                                    >
                                          <FontAwesomeIcon icon={faLinkedin} />
                                    </NavLink>{' '}
                              </li>
                        </ul>
                        <ul className="footer-list">
                              <li>
                                    <NavLink
                                          to="/therms-of-usage"
                                          className={({
                                                isActive,
                                                isPending,
                                          }) =>
                                                isPending
                                                      ? 'pending'
                                                      : isActive
                                                      ? 'active'
                                                      : ''
                                          }
                                    >
                                          Mentions légales
                                    </NavLink>
                              </li>
                              <li>
                                    François Schmitt, © 2023. Tous droits
                                    réservés.
                              </li>
                        </ul>
                  </nav>
            </footer>
      );
}
