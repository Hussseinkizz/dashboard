const NavMenu = () => {
  // 😦 All anchor tags are removed, react router can be used for linking

  return (
    <div className="navbar-inner custom">
      {/* <!-- Nav items --> */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <span className="nav-link active">
            <i className="ni ni-shop text-primary"></i>
            <span className="nav-link-text">Dashboards</span>
          </span>
        </li>
        <li className="nav-item">
          <span className="nav-link">
            <i className="ni ni-ungroup text-orange"></i>
            <span className="nav-link-text">Examples</span>
          </span>
          <div className="collapse" id="navbar-examples">
            <ul className="nav nav-sm flex-column">
              <li className="nav-item">
                <span className="nav-link">Pricing</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">Login</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">Register</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">Lock</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">Timeline</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">Profile</span>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <span className="nav-link">
            <i className="ni ni-ui-04 text-info"></i>
            <span className="nav-link-text">Components</span>
          </span>
          <div className="collapse" id="navbar-components">
            <ul className="nav nav-sm flex-column">
              <li className="nav-item">
                <span className="nav-link">Buttons</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">Cards</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">Grid</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">Notifications</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">Icons</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">Typography</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">Multi level</span>
                <div className="collapse show" id="navbar-multilevel">
                  <ul className="nav nav-sm flex-column">
                    <li className="nav-item">
                      <span className="nav-link ">Third level menu</span>
                    </li>
                    <li className="nav-item">
                      <span className="nav-link ">Just another link</span>
                    </li>
                    <li className="nav-item">
                      <span className="nav-link ">One last link</span>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <span className="nav-link">
            <i className="ni ni-single-copy-04 text-pink"></i>
            <span className="nav-link-text">Forms</span>
          </span>
          <div className="collapse" id="navbar-forms">
            <ul className="nav nav-sm flex-column">
              <li className="nav-item">
                <span className="nav-link">Elements</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">Components</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">Validation</span>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <span className="nav-link">
            <i className="ni ni-align-left-2 text-default"></i>
            <span className="nav-link-text">Tables</span>
          </span>
          <div className="collapse" id="navbar-tables">
            <ul className="nav nav-sm flex-column">
              <li className="nav-item">
                <span className="nav-link">Tables</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">Sortable</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">Datatables</span>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <span className="nav-link">
            <i className="ni ni-map-big text-primary"></i>
            <span className="nav-link-text">Maps</span>
          </span>
          <div className="collapse" id="navbar-maps">
            <ul className="nav nav-sm flex-column">
              <li className="nav-item">
                <span className="nav-link">Google</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">Vector</span>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <span className="nav-link">
            <i className="ni ni-archive-2 text-green"></i>
            <span className="nav-link-text">Widgets</span>
          </span>
        </li>
        <li className="nav-item">
          <span className="nav-link">
            <i className="ni ni-chart-pie-35 text-info"></i>
            <span className="nav-link-text">Charts</span>
          </span>
        </li>
        <li className="nav-item">
          <span className="nav-link">
            <i className="ni ni-calendar-grid-58 text-red"></i>
            <span className="nav-link-text">Calendar</span>
          </span>
        </li>
      </ul>
      {/* <!-- Divider --> */}
      <hr className="my-3" />
      <ul className="navbar-nav mb-md-3">
        <li className="nav-item">
          <span className="nav-link">
            <i className="ni ni-spaceship"></i>
            <span className="nav-link-text">Getting started</span>
          </span>
        </li>
        <li className="nav-item">
          <span className="nav-link">
            <i className="ni ni-palette"></i>
            <span className="nav-link-text">Foundation</span>
          </span>
        </li>
        <li className="nav-item">
          <span className="nav-link">
            <i className="ni ni-ui-04"></i>
            <span className="nav-link-text">Components</span>
          </span>
        </li>
        <li className="nav-item">
          <span className="nav-link">
            <i className="ni ni-chart-pie-35"></i>
            <span className="nav-link-text">Plugins</span>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
