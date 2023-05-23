import React from 'react'

import Link from '@mui/material/Link';

import logo2 from '../../Images/logo2.png'

const Footer = () => {
  return (
    <div className="flex flex-col items-center md:flex-row md:items-between mx-12">
      <div className="flex flex-col w-full items-center md:w-1/2 md:items-start">
        <img src={logo2} alt="logo2" style={{ width: "180px" }}/>
      </div>
      <div className="flex flex-col items-center w-full md:w-1/2 md:items-start">
        <div className="flex flex-col items-center md:flex-row md:space-x-12">
          <Link href="mailto:contact@greendrivethru.com.tw" style={{ textDecoration: 'none' }}>
            <div className="text-sm text-grey font-bold my-3">訂閱電子報</div>
          </Link>
          <Link href="/faq" style={{ textDecoration: 'none' }}>
            <div className="text-sm text-grey font-bold my-3">常見問題</div>
          </Link>
          <Link href="/terms" style={{ textDecoration: 'none' }}>
            <div className="text-sm text-grey font-bold my-3">使用條款</div>
          </Link>
          <Link href="mailto:contact@greendrivethru.com.tw" style={{ textDecoration: 'none' }}>
            <div className="text-sm text-grey font-bold my-3">聯絡我們</div>
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=100092444201401" style={{ textDecoration: 'none' }}>
            <div className="text-sm text-grey font-bold my-3">Facebook</div>
          </Link>
          <Link href="https://www.instagram.com/greendrivethru/" style={{ textDecoration: 'none' }}>
            <div className="text-sm text-grey font-bold my-3">Instagram</div>
          </Link>
        </div>
        <div className="text-sm my-3">
          2023 Green Drive Thru
        </div>
      </div>
    </div>
  )
}

export default Footer