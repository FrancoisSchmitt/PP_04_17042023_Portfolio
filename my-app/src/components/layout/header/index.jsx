import './index.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
      return (
            <header className="header">
                  <nav className="header-nav">
                        <ul className="header-list">
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
                                          Home
                                    </NavLink>
                              </li>
                              <li>
                                    <NavLink
                                          to="/study"
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
                                          Études
                                    </NavLink>
                              </li>
                              <li>
                                    <NavLink
                                          to="/works"
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
                                          Expériences
                                    </NavLink>
                              </li>
                              <li>
                                    <NavLink
                                          to="/project"
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
                                          Projets
                                    </NavLink>
                              </li>
                              <li>
                                    <NavLink
                                          to="/contact"
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
                                          Contact
                                    </NavLink>
                              </li>
                        </ul>
                  </nav>
            </header>
      );
}
