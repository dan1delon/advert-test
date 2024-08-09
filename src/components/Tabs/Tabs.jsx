import { useState } from 'react';
import css from './Tabs.module.css';
import Features from '../Features/Features';
import Reviews from '../Reviews/Reviews';

const Tabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState('Features');

  const handleTabClick = tabName => {
    setActiveTab(tabName);
  };

  return (
    <div className={css.container}>
      <div className={css.tabsWrapper}>
        <div className={css.tabs}>
          <button
            className={`${css.tabLink} ${
              activeTab === 'Features' ? css.active : ''
            }`}
            onClick={() => handleTabClick('Features')}
          >
            Features
          </button>
          <button
            className={`${css.tabLink} ${
              activeTab === 'Reviews' ? css.active : ''
            }`}
            onClick={() => handleTabClick('Reviews')}
          >
            Reviews
          </button>
        </div>
        <div className={css.divider}></div>
      </div>
      <div className={css.bottomWrapper}>
        <div className={css.tabContent}>
          {activeTab === 'Features' && <Features data={data} />}
          {activeTab === 'Reviews' && <Reviews data={data} />}
        </div>
        <div className={css.form}></div>
      </div>
    </div>
  );
};

export default Tabs;
