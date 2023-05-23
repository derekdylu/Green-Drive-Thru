import React from 'react'
import classnames from 'classnames'

import Navigation from '../Components/Navigation/Navigation'
import Footer from '../Components/Footer/Footer'

import styles from './styles.module.scss'

import header from '../Images/header.png'
import header_logo from '../Images/header_logo.png'

const contents = [
  {
    "type": "title",
    "content": "致力於讓每個人對環境的努力都被看見。"
  },
  {
    "type": "text",
    "content": "ESG 報告書顧問與整合行銷、國內 ESG 趨勢分析平台以及 ESG 教育培訓等",
  }
]

const topics = [
  {
    "title": "中小企業 ESG 報告書準備",
    "link": "/"
  },
  {
    "title": "負碳產品認證與碳匯轉換",
    "link": "/"
  },
  {
    "title": "供應鏈碳管理可信度與透明度",
    "link": "/"
  },
  {
    "title": "碳權交易願景",
    "link": "/"
  },
]

const Home = () => {
  return (
    <div>
      <Navigation />
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="flex flex-grow">
          <img className={styles.header} src={header} alt="headeer" style={{ objectFit: "cover" }} />
          <img className={classnames(styles.headerLogo, "w-5/6 md:w-1/2")} src={header_logo} alt="header_logo" />
        </div>
        <div className="flex flex-col flex-grow items-start px-12 py-8 md:py-16">
          {
            contents.map((item, index) => {
              if (item.type === "title")
                return (
                  <div key={index} className="text-2xl text-black font-bold my-3">{item.content}</div>
                )
              if (item.type === "text")
                return (
                  <p key={index} className="text-base text-black font-normal my-3">{item.content}</p>
                )
            })
          }
          <div className="flex flex-row space-x-4">
            <a className="my-3" href="mailto:contact@greendrivethru.com.tw">
              <button className="rounded-full bg-main text-white px-4 py-2">探索趨勢</button>
            </a>
            <a className="my-3" href="mailto:contact@greendrivethru.com.tw">
              <button className="rounded-full bg-main text-white px-4 py-2">聯絡我們</button>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center md:flex-row md:items-start md:justify-center py-3 md:py-6">
        <div className="text-xl text-black font-bold py-3 md:py-0">目前趨勢</div>
        {
          topics.map((item, index) => {
            return (
              <div key={index} className="flex flex-row items-start justify-center px-12 py-3 md:py-0">
                <div className="text-2xl font-extrabold text-main">
                  {index+1}
                </div>
                <div className={styles.divider}></div>
                <a href={item.link}>
                  <div>
                    {item.title}
                  </div>
                </a>
              </div>
            )
          })
        }
      </div>
      <div
        className="flex flex-row justify-evenly px-12 py-8 md:px-24 md:py-16 "
        style={{
        background: "radial-gradient(74.64% 187.56% at 100% 132.13%, #228C22 0%, #369836 0.01%, #103910 100%" 
      }}>
        <div className="text-3xl text-white font-bold">
          成功案例
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home