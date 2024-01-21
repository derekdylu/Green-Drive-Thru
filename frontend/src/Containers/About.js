import React from 'react'
import classnames from 'classnames'

import Navigation from '../Components/Navigation/Navigation'
import Footer from '../Components/Footer/Footer'

import styles from './styles.module.scss'

import about from '../Images/about.png'
import team from '../Images/team.png'
import Derek from '../Images/Derek.png'
import YiHon from '../Images/YiHon.png'
import Vicky from '../Images/Vicky.png'
import Kimberley from '../Images/Kimberley.png'
import PinYen from '../Images/PinYen.png'

const profiles = [
  {
    "photo": Derek,
    "name": "盧德原",
    "position": "網站建置及數據分析",
    "education": "台灣大學資訊管理學系"
  },
  {
    "photo": Vicky,
    "name": "許茵淇",
    "position": "產品與視覺設計",
    "education": "台灣師範大學設計系"
  },
  {
    "photo": PinYen,
    "name": "郭品言",
    "position": "商業開發及數據分析",
    "education": "台灣大學國際企業學系"
  },
  {
    "photo": Kimberley,
    "name": "廖予親",
    "position": "ESG報告書及商業開發",
    "education": "台灣大學會計學系"
  },
  {
    "photo": YiHon,
    "name": "姚奕弘",
    "position": "ESG報告書及商業開發",
    "education": "台灣大學工商管理學系"
  }
]

const contents1 = [
  {
    "type": "title",
    "content": "致力於讓每個人對環境的努力都被看見。"
  },
  {
    "type": "text",
    "content": "我們是國立台灣大學第 15 屆創意創業學程的專案團隊 Green Drive Thru，致力於提供組織、新創和企業一套完整的 ESG 顧問服務。"
  },
  {
    "type": "text",
    "content": "ESG 報告書顧問與整合行銷、國內 ESG 趨勢分析平台以及 ESG 教育培訓等。在 ESG 報告書顧問的服務中，將導入生成式 AI 輔助作業流程，降低時間與人力成本，並針對產業及企業需求做出客製化的報告書。未來，我們計畫推出一個體驗介面，讓組織或企業可以透過輸入數據資料來預覽報告內容與 ESG 相關指標的評分。",
  }
]

const contents2 = [
  {
    "type": "title",
    "content": "我們的團隊"
  },
  {
    "type": "text",
    "content": "我們的多元專業背景使我們能夠深入了解企業運作的各個層面，並結合資訊科技、視覺設計、財務分析和有效的管理策略，從而為客戶發現並創造有潛力的架值。透過資訊領域的專業知識，我們可以分析和利用數據，訓練 AI 模型，為企業提供準確的市場趨勢和洞察，並提供一套完整的顧問服務。"
  }
]

const About = () => {
  return (
    <div className={styles.about}>
      <Navigation />
      <img src={about} alt="logo" style={{ height: "250px", width: "100%", objectFit: "cover"}} />
      <div className="flex flex-col items-center">
        <div
          className="flex flex-col justify-evenly px-12 py-8 md:px-24 md:py-16 "
          style={{
          background: "radial-gradient(74.64% 187.56% at 100% 132.13%, #228C22 0%, #369836 0.01%, #103910 100%" 
        }}>
          {
            contents1.map((item, index) => {
              if (item.type === "title")
                return (
                  <div key={index} className="text-2xl text-white font-bold my-3">{item.content}</div>
                )
              if (item.type === "text")
                return (
                  <p key={index} className="text-base text-white font-normal my-3">{item.content}</p>
                )
              return null
            })
          }
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="flex flex-col md:w-1/2 items-start px-12 py-8 md:px-24 md:py-16">
            {
              contents2.map((item, index) => {
                if (item.type === "title")
                  return (
                    <div key={index} className="text-2xl text-black font-bold my-3">{item.content}</div>
                  )
                if (item.type === "text")
                  return (
                    <p key={index} className="text-base text-black font-normal my-3">{item.content}</p>
                  )
                return null
              })
            }
            <div className="flex flex-col md:flex-row md:space-x-2">
              <a className="my-3" href="mailto:contact@greendrivethru.com.tw">
                <button className={classnames(styles.button, "rounded-full bg-main text-white px-4 py-2")}>聯絡我們</button>
              </a>
              <a className="my-3" href="https://www.facebook.com/profile.php?id=100092444201401" target='_blank' rel="noopener noreferrer">
                <button className={classnames(styles.buttonFacebook, "rounded-full bg-main text-white px-4 py-2")}>Facebook</button>
              </a>
              <a className="my-3" href="https://www.instagram.com/greendrivethru/" target='_blank' rel="noopener noreferrer">
                <button className={classnames(styles.buttonInstagram, "rounded-full bg-main text-white px-4 py-2")}>Instagram</button>
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src={team} alt="team" style={{ objectFit: "cover" }} />
          </div>
        </div>
        <div className="grid grid-cols-1 my-12 md:grid-cols-5">
          {
            profiles.map((item, index) => {
              return (
                <div key={index} className="flex flex-col items-center mx-4">
                  <img src={item.photo} alt="logo" style={{ width: "180px", height: "auto", margin: "20px" }} />
                  <div>{item.name}</div>
                  <div>{item.position}</div>
                  <div>{item.education}</div>
                </div>
              )
            })
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About