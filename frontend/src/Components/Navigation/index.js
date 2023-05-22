import React from 'react'
import Link from '@mui/material/Link';

import styles from './styles.module.scss'

import logo from '../../Images/logo.png'

const index = () => {
  return (
    <div className="flex flex-row justify-between bg-white px-8 py-2">
      <img src={logo} alt="logo" className={styles.logo} />
      <div className="flex flex-row justify-end items-center">
        <Link href="/"  color="#228C22" sx={{ mx: 2 }} style={{ textDecoration: 'none' }}>
          <div>首頁</div>
        </Link>
        <Link href="/analysis"  color="#228C22" sx={{ mx: 2 }} style={{ textDecoration: 'none' }}>
          <div>趨勢分析</div>
        </Link>
        <Link href="/report"  color="#228C22" sx={{ mx: 2 }} style={{ textDecoration: 'none' }}>
          <div>報告書顧問</div>
        </Link>
        <Link href="/feed"  color="#228C22" sx={{ mx: 2 }} style={{ textDecoration: 'none' }}>
          <div>行銷推廣</div>
        </Link>
        <Link href="/about" color="#228C22" sx={{ mx: 2 }} style={{ textDecoration: 'none' }}>
          <div>關於我們</div>
        </Link>
      </div>
    </div>
  )
}

export default index