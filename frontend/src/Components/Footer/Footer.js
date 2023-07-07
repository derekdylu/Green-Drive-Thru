import React from 'react'
import classnames from 'classnames'

import Link from '@mui/material/Link';

import styles from './styles.module.scss'

import logo2 from '../../Images/logo2.png'

const Footer = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row lg:items-between mx-12">
      <div className="flex flex-col w-full items-center lg:w-1/2 lg:items-start">
        <img src={logo2} alt="logo2" style={{ width: "180px" }}/>
      </div>
      <div className="flex flex-col items-center w-full lg:w-1/2 lg:items-start">
        <div className="flex flex-col items-center lg:flex-row lg:space-x-12">
          <Link href="mailto:contact@greendrivethru.com.tw" style={{ textDecoration: 'none' }}>
            <div className={classnames(styles.footerLink, "text-sm text-grey font-bold my-3")}>訂閱電子報</div>
          </Link>
          <Link href="/terms" style={{ textDecoration: 'none' }}>
            <div className={classnames(styles.footerLink, "text-sm text-grey font-bold my-3")}>隱私政策</div>
          </Link>
          {/* <Link href="/report" style={{ textDecoration: 'none' }}>
            <div className={classnames(styles.footerLink, "text-sm text-grey font-bold my-3")}>報告書</div>
          </Link> */}
          <Link href="/portal" style={{ textDecoration: 'none' }}>
            <div className={classnames(styles.footerLink, "text-sm text-grey font-bold my-3")}>負碳試算</div>
          </Link>
          <Link href="mailto:contact@greendrivethru.com.tw" style={{ textDecoration: 'none' }}>
            <div className={classnames(styles.footerLink, "text-sm text-grey font-bold my-3")}>聯絡我們</div>
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=100092444201401" style={{ textDecoration: 'none' }}>
            <div className={classnames(styles.footerLinkFacebook, "text-sm text-grey font-bold my-3")}>Facebook</div>
          </Link>
          <Link href="https://www.instagram.com/greendrivethru/" style={{ textDecoration: 'none' }}>
            <div className={classnames(styles.footerLinkInstagram, "text-sm text-grey font-bold my-3")}>Instagram</div>
          </Link>
        </div>
        <div className="text-xs my-3 font-bold text-grey">
          2023 Green Drive Thru. All Rights Reserved.
        </div>
      </div>
    </div>
  )
}

export default Footer