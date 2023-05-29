import React, { useState, useEffect } from 'react';
import classnames from 'classnames'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import styles from './styles.module.scss'

import Navigation from '../Components/Navigation/Navigation';
import Footer from '../Components/Footer/Footer';
// import {Adsense} from '@ctrl/react-adsense';

import Dashboard from '../Components/Dashboard/Dashboard';

const Analysis = () => {
  const [dashboards, setDashboards] = useState([]);
  const [edit, setEdit] = useState(false);

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setOpen(true);
  }, [])

  const handleClose = () => {
    setOpen(false);
  };

  const addDashboard = (type) => {
    setEdit(false);
    const newDashboard = <Dashboard key={dashboards.length} type={type}/>;
    setDashboards(prev => [...prev, newDashboard]);
  };

  const deleteDashboard = index => {
    setDashboards(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"歡迎使用 ESG DASHBOARD pre-alpha"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ⚠️本服務目前仍在 pre-alpha 階段，部分功能尚未完成，資料亦未齊全。
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button className={classnames(styles.button, "rounded-full bg-main text-white px-4 py-2")} onClick={()=> setOpen(false)}>開始探索</button>
        </DialogActions>
      </Dialog>
      <Navigation />
        {/* <Adsense
          client="ca-pub-9248017741391316"
          slot="5990662559"
        /> */}
        <div className="flex flex-row items-center justify-center">
          <div className={classnames("flex flex-row items-center justify-center space-x-2 md:space-x-6 py-3 px-4 md:px-12 my-3 bg-zinc-300 rounded-full mx-3 md:mx-8 drop-shadow-md w-fit")}>
            <button className={classnames(styles.button, "rounded-full bg-main text-white text-sm px-3 py-2")} onClick={() => addDashboard("bar")}>+長條圖</button>
            <button className={classnames(styles.buttonBlue, "rounded-full bg-sky-600 text-white text-sm px-3 py-2")} onClick={() => addDashboard("pie")}>+圓餅圖</button>
            <button className={classnames(styles.buttonOrange, "rounded-full bg-amber-600 text-white text-sm px-3 py-2")} onClick={() => addDashboard("info")}>+資料表</button>
            <button className={classnames(styles.buttonSecondary, "rounded-full bg-grey text-white text-sm px-3 py-2")} onClick={() => {setEdit(!edit)}}>
              {
                edit ? "完成" : "編輯"
              }
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center px-12 mb-6 lg:grid lg:grid-cols-2 2xl:grid-cols-3 lg:place-items-center">
          {
            dashboards.length > 0 ? (
              dashboards.map((dashboard, index) => (
                <div className={classnames("w-min h-min my-4")} key={index}>
                  {
                    edit && (
                      <div className="flex flex-row items-center justify-end pb-2">
                        <button className={classnames(styles.buttonDanger, "rounded-full bg-red-500 text-white text-xs px-4 py-2")} onClick={() => deleteDashboard(index)}>刪除</button>
                      </div>
                    )
                  }
                  <div className={classnames(edit && styles.dashboard)}>
                    {dashboard}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-2xl text-grey font-bold my-24">點擊 + 新增圖表</div>
            )
          }
        </div>
      <Footer />
    </div>
  )
}

export default Analysis