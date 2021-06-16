import { useState } from 'react'

/**
 * 📋 Reusable component summary
 * receives tab1,tab2,tab3 as tab titles and tab_number_content as tab content
 * @param {*} props
 * @return {*} 
 */

const SectionTabs = (props) => {
  const {
    tab1,
    tab2,
    tab3,
    tab_1_content,
    tab_2_content,
    tab_3_content,
  } = props;

  const [currentTab, setCurrentTab] = useState(1) // console.log(currentTab)
  const [tabContent, setTabContent] = useState(tab_1_content)

  let setTab1 = () => {
    setCurrentTab(1)
    setTabContent(tab_1_content)
  }
  let setTab2 = () => {
    setCurrentTab(2);
    setTabContent(tab_2_content)
  }
  let setTab3 = () => {
    setCurrentTab(3);
    setTabContent(tab_3_content)
  }

  return (
    <>
      <div className="nav-wrapper p-0">
        <ul
          className="nav nav-pills nav-fill flex-row custom"
          id="tabs-text"
          role="tablist"
        >
          {/* TAB 1 */}
          <li className="nav-item custom" onClick={setTab1}>
            <span
              className={`nav-link custom ${
                currentTab === 1 && 'custom-active'
              }`}
              id="tabs-text-1-tab"
              role="tab"
              aria-controls="tabs-text-1"
              aria-selected="true"
            >
              {tab1 ?? 'Title 1'}
            </span>
          </li>
          {/* TAB 2 */}
          <li className="nav-item custom" onClick={setTab2}>
            <span
              className={`nav-link custom ${
                currentTab === 2 && 'custom-active'
              }`}
              id="tabs-text-2-tab"
              role="tab"
              aria-controls="tabs-text-2"
              aria-selected="true"
            >
              {tab2 ?? 'Title 2'}
            </span>
          </li>
          {/* TAB 3 */}
          <li className="nav-item custom" onClick={setTab3}>
            <span
              className={`nav-link custom ${
                currentTab === 3 && 'custom-active'
              }`}
              id="tabs-text-3-tab"
              role="tab"
              aria-controls="tabs-text-3"
              aria-selected="true"
            >
              {tab3 ?? 'Title 3'}
            </span>
          </li>
        </ul>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id={`tab${currentTab}`}
              role="tabpanel"
              aria-labelledby={`tab${currentTab}-content`}
            >
              {/* TAB CONTENT */}
              <div className="container-fluid h-100 pt-9 d-flex flex-column flex-grow-1 justify-content-center align-items-center">
                {tabContent ?? 'some content'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionTabs;