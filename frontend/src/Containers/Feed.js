import React from 'react'

import Navigation from '../Components/Navigation/Navigation'
import Footer from '../Components/Footer/Footer'
import Post from '../Components/Feed/Post'

const contents = [
  {
    "title": "◖什麼是ESG？它為何重要？◗",
    "photo": "https://scontent.ftpe7-3.fna.fbcdn.net/v/t39.30808-6/348424129_210448418443367_5011272833241444817_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=6bd8JYZbz1IAX9-hoMo&_nc_ht=scontent.ftpe7-3.fna&oh=00_AfBWKriiOMY4gJNWF5bRJpCGCXgZmTvDoExV1BarjyILPA&oe=64724C00",
    "config": "2023/05/19",
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
    "title": "大家好！我們是𝙂𝙧𝙚𝙚𝙣 𝘿𝙧𝙞𝙫𝙚 𝙏𝙝𝙧𝙪 ⤿",
    "photo": "https://scontent.ftpe7-3.fna.fbcdn.net/v/t39.30808-6/345641449_767394848323483_2933201457319160093_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=5dZHAx3U-D0AX9CN1Wj&_nc_ht=scontent.ftpe7-3.fna&oh=00_AfCWy4tWoLBDnjD0QpdeeJWhM3KAJejexuEyUJpzcy_JhA&oe=64717C2D",
    "config": "2023/05/12",
    "content": [
      "團隊致力於提供組織、新創和企業一套完整的ESG顧問服務，讓每個人對環境的努力都能夠被看見⟢",
      "我們提供多項服務，包括：",
      "❍ ESG 顧問服務",
      "運用生成式 AI 技術，協助輔導企業撰寫 ESG 報告書，除了節省企業所需花費的時間和人力成本，也讓ESG相關揭露更為完整專業。同時，我們根據企業產品或所在產業的特性，客製化報告書的內容。",
      "❍ 國內 ESG 報告書數據分析資訊平台",
      "我們正在開發一個ESG數據分析資訊平台，供投資人和企業使用。透過在我們的平台上輸入數據資料，您可以即時預覽報告內容以及 ESG 相關指標的評分，也可以和同產業之間進行比較。",
      "❍ ESG 教育推廣",
      "我們致力於推廣 ESG 相關知識。通過建立此社群帳號，定期更新最新的 ESG 發展趨勢和時事，讓每個人都能了解並參與地球環境的貢獻。",
      "⋆",
      "希望透過這些服務，與您共同努力，",
      "為實現可持續發展目標做出貢獻。",
      "如果您對我們的服務有任何疑問或需求，請隨時與我們聯繫！",
      "讓我們攜手合作，共同關注 ESG 的重要性，並為創造一個更美好的未來而努力！",
    ]
  }
]

const Feed = () => {
  return (
    <div>
      <Navigation />
      <div className="flex flex-col items-center my-8 mx-8 md:mx-36 xl:mx-72 space-y-12">
        {
          contents.map((item, index) => {
            return (
              <Post key={index} title={item.title} photo={item.photo} config={item.config} content={item.content} />
            )
          })
        }
      </div>
      <Footer />
    </div>
  )
}

export default Feed