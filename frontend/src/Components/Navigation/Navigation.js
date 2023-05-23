import React, { useState, useEffect } from 'react'
import classnames from 'classnames';

import Link from '@mui/material/Link';

import styles from './styles.module.scss'

import logo from '../../Images/logo.png'

const MIN_WIDTH = 768;

const Navigation = () => {
  const [navActive, setNavActive] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize(); // Initial window width

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <div className="flex flex-row justify-between bg-white px-8 py-2">
        <a href="/">
          <img src={logo} alt="logo" className={styles.logo} />
        </a>
        {
          width > MIN_WIDTH ? (
            <div className="flex flex-row justify-end items-center">
              <Link href="/" color="#228C22" sx={{ mx: 2 }} style={{ textDecoration: 'none' }}>
                <div>首頁</div>
              </Link>
              <Link href="/analysis" color="#228C22" sx={{ mx: 2 }} style={{ textDecoration: 'none' }}>
                <div>趨勢分析</div>
              </Link>
              {/* <Link href="/report" color="#228C22" sx={{ mx: 2 }} style={{ textDecoration: 'none' }}>
                <div>報告書顧問</div>
              </Link> */}
              <Link href="/feed" color="#228C22" sx={{ mx: 2 }} style={{ textDecoration: 'none' }}>
                <div>部落格</div>
              </Link>
              <Link href="/about" color="#228C22" sx={{ mx: 2 }} style={{ textDecoration: 'none' }}>
                <div>關於我們</div>
              </Link>
            </div>
          ) : (
            <div>
              <div className={navActive ? classnames(styles.closer): classnames(styles.nav)} onClick={() => {setNavActive(!navActive)}}>
                <div className={classnames(styles.navStrip)}></div>
                <div className={classnames(styles.navStrip)}></div>
                <div className={classnames(styles.navStrip)}></div>
              </div>
            </div>
          )
        }
      </div>
      <div className={navActive ? classnames(styles.navOverlay) : classnames(styles.navOverlay_closed)}>
      {/* <div className={classnames(styles.navOverlay)}> */}
        <div className="flex flex-col gap-y-10 items-center">
          <Link href="/" onClick={() => {setNavActive(false)}} color="#ffffff" sx={{ mx: 2 }} style={{ textDecoration: 'none' }}>
            <div className="text-2xl font-bold">首頁</div>
          </Link>
          <Link href="/analysis" onClick={() => {setNavActive(false)}} color="#ffffff" sx={{ mx: 2 }} style={{ textDecoration: 'none' }}>
            <div className="text-2xl font-bold">趨勢分析</div>
          </Link>
          {/* <Link href="/report" onClick={() => {setNavActive(false)}} color="#ffffff" sx={{ mx: 2 }} style={{ textDecoration: 'none' }}>
            <div className="text-2xl font-bold">報告書顧問</div>
          </Link> */}
          <Link href="/feed" onClick={() => {setNavActive(false)}} color="#ffffff" sx={{ mx: 2 }} style={{ textDecoration: 'none' }}>
           <div className="text-2xl font-bold">部落格</div>
          </Link>
          <Link href="/about" onClick={() => {setNavActive(false)}} color="#ffffff" sx={{ mx: 2 }} style={{ textDecoration: 'none' }}>
            <div className="text-2xl font-bold">關於我們</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navigation