import React from 'react'

import Navigation from '../Components/Navigation/index'
import Post from '../Components/Feed/Post'

const contents = [
  {
    "title": "◖什麼是ESG？它為何重要？◗",
    "photo": "https://doqvf81n9htmm.cloudfront.net/data/crop_article/129910/shutterstock_2044070501.jpg_1140x855.jpg",
    "config": "2021/10/10",
    "content": [
      "大家好！今天我們要來介紹ESG，這是一個目前受到各界相當重視的議題。",
      "ESG分別代表環境（Environmental）、社會（Social）、公司治理（Governance）這三個關鍵面向，是為了建立一個可永續發展的未來而採取的重要行動。",
      "⦰ Environmental 環境面向",
      "我們正面臨日益嚴峻的全球氣候變遷、資源枯竭、污染問題等環境挑戰。ESG強調保護和維護環境的重要性，鼓勵企業減少碳排放、節約能源、推動可再生能源、提倡循環經等行動，以減少對地球的負擔。",
      "⦰ Social 社會面向",
      "社會正面臨許多問題，包括貧困、不平等、人權等議題。ESG提倡企業關注，並對社會負責，著重於提供平等機會、尊重人權、支持當地社區發展等。透過社會責任的履行，不但能增強企業的聲譽和長期價值，同時也有助於共同建立更和諧、公正的社會。",
      "⦰ Governance 公司治理面向",
      "健全的公司治理是企業成功的基石。為確保企業遵守法律法規，管理風險，並建立良好的商業環境，透明度、道德操守和有效的監管都是ESG所關注的重點。這不僅有助於企業的長期穩健發展，也增強了投資者和利益相關者的信心。",
      "綜合來說，ESG是一個全面考量環境、社會和公司治理的投資方法。透過選擇投資於遵守ESG原則的企業，我們可以共同為創造一個更美好的未來努力。",
      "↟ ↟ 讓我們攜手投資ESG，為地球和我們的子孫後代建立一個可持續發展的世界！",
    ]
  },
  {
    "title": "◖什麼是ESG？它為何重要？◗",
    "photo": "https://doqvf81n9htmm.cloudfront.net/data/crop_article/129910/shutterstock_2044070501.jpg_1140x855.jpg",
    "config": "2021/10/10",
    "content": [
      "大家好！今天我們要來介紹ESG，這是一個目前受到各界相當重視的議題。",
      "ESG分別代表環境（Environmental）、社會（Social）、公司治理（Governance）這三個關鍵面向，是為了建立一個可永續發展的未來而採取的重要行動。",
      "⦰ Environmental 環境面向",
      "我們正面臨日益嚴峻的全球氣候變遷、資源枯竭、污染問題等環境挑戰。ESG強調保護和維護環境的重要性，鼓勵企業減少碳排放、節約能源、推動可再生能源、提倡循環經等行動，以減少對地球的負擔。",
      "⦰ Social 社會面向",
      "社會正面臨許多問題，包括貧困、不平等、人權等議題。ESG提倡企業關注，並對社會負責，著重於提供平等機會、尊重人權、支持當地社區發展等。透過社會責任的履行，不但能增強企業的聲譽和長期價值，同時也有助於共同建立更和諧、公正的社會。",
      "⦰ Governance 公司治理面向",
      "健全的公司治理是企業成功的基石。為確保企業遵守法律法規，管理風險，並建立良好的商業環境，透明度、道德操守和有效的監管都是ESG所關注的重點。這不僅有助於企業的長期穩健發展，也增強了投資者和利益相關者的信心。",
      "綜合來說，ESG是一個全面考量環境、社會和公司治理的投資方法。透過選擇投資於遵守ESG原則的企業，我們可以共同為創造一個更美好的未來努力。",
      "↟ ↟ 讓我們攜手投資ESG，為地球和我們的子孫後代建立一個可持續發展的世界！",
    ]
  }
]

const Feed = () => {
  return (
    <div>
      <Navigation />
      <div className="flex flex-col items-center m-4">
        {
          contents.map((item, index) => {
            return (
              <Post key={index} title={item.title} photo={item.photo} config={item.config} content={item.content} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Feed