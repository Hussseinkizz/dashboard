import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgMenuLeft, CgClose } from 'react-icons/cg';
import { IoMdRefresh } from 'react-icons/io';
import { BsGridFill } from 'react-icons/bs';
import * as FaIcons from 'react-icons/fa';
import Logo from '../../../../assets/img/brand/brand-logo.svg';
import NavActions from './NavActions';

const Header = ({ menuState }) => {
  const [showMenu, setShowMenu] = useState(!!false);

  // parse the showmenu value to parent component, ideally we could use redux or context...but now keeping it simple.
  menuState(showMenu)

  return (
    <header>
      <nav className="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom text-white">
        <div class="container-fluid">
          <div className="navbar-brand d-flex justify-content-center align-items-center">
            {/* Nav Brand & Toggler */}
            {showMenu ? (
              <CgClose
                className="nav-icon mr-2"
                onClick={() => setShowMenu(false)}
              />
            ) : (
              <CgMenuLeft
                className="nav-icon mr-2"
                onClick={() => setShowMenu(true)}
              />
            )}
            <Link to="/">
              <img
                src={Logo}
                alt="brand-logo"
                className="brand-logo d-inline-block"
              />
            </Link>
            {/* Nav Action Buttons */}
            <NavActions />
          </div>
          {/* Other nav action buttons */}
          <ul className="navbar-nav align-items-center ml-md-auto">
            <li className="nav-item">
              <div
                className="btn-group mr-2"
                role="group"
                aria-label="nav action buttons"
              >
                <button className="btn btn-secondary btn-sm custom-hover-2">
                  <span className="pr-2 border-right">Create Task</span>
                </button>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm custom-hover-2"
                >
                  <FaIcons.FaCaretDown
                    className="nav-icon text-light"
                    onClick="do-something"
                  />
                </button>
              </div>
            </li>
            <li className="nav-item ml-2">
              <BsGridFill className="nav-icon" onClick="do-something" />
            </li>
            <li className="nav-item ml-2">
              <IoMdRefresh className="nav-icon-md" onClick="do-something" />
            </li>
            <li className="nav-item ml-2">
              <FaIcons.FaBell className="nav-icon" onClick="do-something" />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
