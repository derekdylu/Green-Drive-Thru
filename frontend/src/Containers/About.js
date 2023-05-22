import React from 'react'

import Navigation from '../Components/Navigation/index'

import logo2 from '../Images/logo2.png'
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
    "education": "台灣大學資訊管理學系四年級"
  },
  {
    "photo": Vicky,
    "name": "許茵淇",
    "position": "產品與視覺設計",
    "education": "台灣師範大學設計系四年級"
  },
  {
    "photo": PinYen,
    "name": "郭品言",
    "position": "商業開發及數據分析",
    "education": "台灣大學國際企業學系三年級"
  },
  {
    "photo": Kimberley,
    "name": "廖予親",
    "position": "ESG報告書撰寫及商業開發",
    "education": "台灣大學會計學系三年級"
  },
  {
    "photo": YiHon,
    "name": "姚奕弘",
    "position": "ESG報告書撰寫及商業開發",
    "education": "台灣大學工商管理學系二年級"
  }
]

const contents = [
  "我們是來自國立台灣大學創意創業學程的專案團隊Green Drive Thru，致力於提供組織、新創和企業一套完整的 ESG 顧問服務，讓每個人對環境的努力都被看見。",
  "提供的服務包括：ESG 報告書撰寫、國內 ESG 報告書數據分析資訊平台以及 ESG 相關的教育推廣。在 ESG 報告書撰寫的服務中，將導入生成式 AI 輔助作業流程，降低時間與人力成本，並針對產業及企業產品客製化報告書項目。未來，我們計畫推出一個體驗介面，讓組織或企業可以透過輸入數據資料來預覽報告內容與 ESG 相關指標的評分。",

]

const About = () => {
  return (
    <div>
      <Navigation />
      <div className="flex flex-col items-center px-8">
        <img src={logo2} alt="logo" style={{ width: "25%", height: "auto" }} />
        {
          contents.map((item, index) => {
            return (
              <p key={index} style={{ fontSize: "20px", padding: "20px" }}>{item}</p>
            )
          })
        }
        <div className="flex flex-row">
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
        <a className="my-10" href="mailto:contact@greendrivethru.com.tw">
          <button className="rounded-full bg-main text-white px-4 py-2">聯絡我們</button>
        </a>
      </div>
    </div>
  )
}

export default About