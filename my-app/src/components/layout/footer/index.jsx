import './index.css';
import { NavLink } from 'react-router-dom';

export default function Footer() {
      return (
            <footer className="footer">
                  <nav className="footer-nav">
                        <ul className="footer-list">
                              <li>
                                    <NavLink
                                          to="/"
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
