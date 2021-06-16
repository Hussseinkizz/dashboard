import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useMap } from '../../../../hooks/map/useMap';
import NavMenu from '../Header/NavMenu';
import SectionTabs from './SectionTabs';

const Main = ({ menuState }) => {
  const [expansionLeft, setExpansionLeft] = useState(!!false);
  const [expansionRight, setExpansionRight] = useState(!!false);

  let Map = useMap;

  return (
    <main className="d-flex">
      {/* LEFT SECTION */}
      {/* show side menu or left section content */}
      {menuState ? (
        <NavMenu />
      ) : (
        !expansionLeft && (
          <section className="col p-0">
            <div className="d-flex w-100 text-light bg-translucent-primary">
              <div className="container-fluid d-flex justify-content-between p-2">
                <span className="custom-tab">Task</span>
                <span className="custom-tab">
                  <BiSearch className="icon" />
                </span>
              </div>
            </div>
            {/* LEFT SECTION TABS */}
            <SectionTabs
              tab1="0 Unassigned"
              tab2="0 Assigned"
              tab3="0 Completed"
              tab_1_content={<p>No task available for the day</p>}
              tab_2_content={<p>No task assigned either!</p>}
              tab_3_content={<p>No task is completed yet.</p>}
            />
          </section>
        )
      )}
      {/* MAP SECTION */}
      <section
        className={`col-6 p-0 bg-gradient-lighter ${
          expansionLeft && expansionRight && 'custom-flex'
        }`}
      >
        <Map
          expandLeft={(value) => setExpansionLeft(value)}
          expandRight={(value) => setExpansionRight(value)}
        />
      </section>
      {/* RIGHT SECTION */}
      {!expansionRight && (
        <section className="col p-0">
          <div className="d-flex w-100 text-light bg-translucent-primary">
            <div className="container-fluid d-flex justify-content-between p-2">
              <span className="custom-tab">Agent</span>
              <span className="custom-tab">
                <BiSearch className="icon" />
              </span>
            </div>
          </div>
          {/* RIGHT SECTION TABS */}
          <SectionTabs
            tab1="0 Free"
            tab2="0 Busy"
            tab3="1 Inactive"
            tab_1_content={<p>No agent available</p>}
            tab_2_content={<p>No agent is busy!</p>}
            tab_3_content={<p>some content</p>}
          />
        </section>
      )}
    </main>
  );
};

export default Main;
