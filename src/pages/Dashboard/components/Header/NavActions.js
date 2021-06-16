import { ImMap2 } from 'react-icons/im';
import { IoListOutline } from 'react-icons/io5';
import * as FaIcons from 'react-icons/fa';

const NavActions = () => {
  return (
    <ul className="navbar-nav nav-actions align-items-center ml-4">
      {/* button group 1 */}
      <li className="nav-item">
        <div className="btn-group" role="group" aria-label="nav action buttons">
          <button
            type="button"
            className="btn btn-secondary btn-sm custom-hover-2"
          >
            <ImMap2 className="nav-icon text-light" />
            <span>Map</span>
          </button>
          <button
            type="button"
            className="btn border text-white btn-sm custom-hover-1"
          >
            <IoListOutline className="nav-icon text-light" />
            <span>List</span>
          </button>
        </div>
      </li>
      {/* button group 2 */}
      <li className="nav-item ml-3">
        <div className="btn-group" role="group" aria-label="nav action buttons">
          <button
            type="button"
            className="btn border text-white btn-sm custom-hover-1"
          >
            Today 12:00AM - 9:00AM
          </button>
          <button
            type="button"
            className="btn border text-white btn-sm custom-hover-1"
          >
            <FaIcons.FaCaretDown className="nav-icon text-light" />
          </button>
        </div>
      </li>
      {/* button group 3 */}
      <li className="nav-item ml-2">
        <div className="btn-group" role="group" aria-label="nav action buttons">
          <button
            type="button"
            className="btn border text-white btn-sm custom-hover-1"
          >
            All Teams
          </button>
          <button
            type="button"
            className="btn border text-white btn-sm custom-hover-1"
          >
            <FaIcons.FaCaretDown className="nav-icon text-light" />
          </button>
        </div>
      </li>
    </ul>
  );
};

export default NavActions;
