import React, { useState } from 'react';
import classnames from 'classnames'

import styles from './styles.module.scss'

import Navigation from '../Components/Navigation/Navigation';
import Footer from '../Components/Footer/Footer';
// import {Adsense} from '@ctrl/react-adsense';

import Dashboard from '../Components/Dashboard/Dashboard';

const Analysis = () => {
  const [dashboards, setDashboards] = useState([]);
  const [edit, setEdit] = useState(false);

  const addDashboard = () => {
    const newDashboard = <Dashboard key={dashboards.length} deleteDashboard={deleteDashboard}/>;
    setDashboards(prev => [...prev, newDashboard]);
  };

  const deleteDashboard = index => {
    setDashboards(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Navigation />
        {/* <Adsense
          client="ca-pub-9248017741391316"
          slot="5990662559"
        /> */}
        <div className="flex flex-row items-center justify-center">
          <div className={classnames("flex flex-row items-center justify-center space-x-3 md:space-x-6 py-3 px-12 my-6 bg-zinc-300 rounded-full mx-3 md:mx-8 drop-shadow-md w-fit")}>
            <button className={classnames(styles.button, "rounded-full bg-main text-white px-4 py-2")} onClick={addDashboard}>+長條圖</button>
            <button className={classnames(styles.button, "rounded-full bg-main text-white px-4 py-2")} onClick={addDashboard}>+圓餅圖</button>
            <button className={classnames(styles.button, "rounded-full bg-main text-white px-4 py-2")} onClick={addDashboard}>+文字雲</button>
            <button className={classnames(styles.buttonSecondary, "rounded-full bg-grey text-white px-4 py-2")} onClick={() => {setEdit(!edit)}}>
              {
                edit ? "完成" : "編輯"
              }
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mx-12 space-y-6 mb-6">
          {
            dashboards.length > 0 ? (
              dashboards.map((dashboard, index) => (
                <div className="w-min h-min" key={index}>
                  {
                    edit && <button onClick={() => deleteDashboard(index)}>X</button>
                  }
                  {dashboard}
                </div>
              ))
            ) : (
              <div className="text-2xl text-black font-bold my-16">點擊 + 新增圖表</div>
            )
          }
        </div>
      <Footer />
    </div>
  )
}

export default Analysis