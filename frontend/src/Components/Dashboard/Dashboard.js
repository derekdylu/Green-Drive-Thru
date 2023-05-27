import React, { useState, useEffect } from "react"

import BarModule from "./BarModule.js";
import PieModule from "./PieModule.js";
import InfoModule from "./InfoModule.js";

import esg_data from "../../Data/data.json";

const industryList = [
  {
    "tag": "all",
    "name": "全部",
  },
  {
    "tag": "cement",
    "name": "水泥",
  },
  {
    "tag": "semiconductor",
    "name": "半導體",
  },
  {
    "tag": "petrochemical",
    "name": "石化",
  },
  {
    "tag": "chemical",
    "name": "化工",
  }
]

const combinedPropertyList = [
  {
    "tag": "combined_emission",
    "name": "溫室氣體範疇(公噸)",
    "attributes": [
      "direct_emission_ton",
      "intdirect_emission_ton",
    ],
    "attributesName": [
      "範疇一",
      "範疇二",
    ]
  },
  {
    "tag": "combined_energy",
    "name": "能量消耗分佈(GJ)",
    "attributes": [
      "gasoline_GJ",
      "diesel_GJ",
      "heavy_oil_GJ",
      "LPG_GJ",
      "NG_GJ",
      "coal_GJ",
      "steam_GJ",
    ],
    "attributesName": [
      "汽油",
      "柴油",
      "重油",
      "LPG",
      "天然氣",
      "煤炭",
      "蒸汽",
    ]
  }
]

const propertyList = [
  {
    "tag": "revenue_kiloNTD",
    "name": "營收(元)"
  },
  {
    "tag": "capital",
    "name": "實收資本額(元)"
  },
  {
    "tag": "electricity_deg",
    "name": "用電量(度)"
  },
  {
    "tag": "water_deg",
    "name": "用水量(度)"
  },
  {
    "tag": "wsewage_milL",
    "name": "廢水量(百萬公升)"
  },
  {
    "tag": "waste_ton",
    "name": "廢棄物(公噸)"
  },
  {
    "tag": "total_energy_kiloDeg",
    "name": "總能耗(千度)"
  },
  {
    "tag": "total_emission_ton",
    "name": "總溫室氣體(公噸)"
  },
  {
    "tag": "direct_emission_ton",
    "name": "範疇一(公噸)"
  },
  {
    "tag": "intdirect_emission_ton",
    "name": "範疇二(公噸)"
  },
  {
    "tag": "gasoline_GJ",
    "name": "汽油用量(千焦)"
  },
  {
    "tag": "diesel_GJ",
    "name": "柴油用量(千焦)"
  },
  {
    "tag": "heavy_oil_GJ",
    "name": "重油用量(千焦)"
  },
  {
    "tag": "LPG_GJ",
    "name": "LPG用量(千焦)"
  },
  {
    "tag": "NG_GJ",
    "name": "天然氣用量(千焦)"
  },
  {
    "tag": "coal_GJ",
    "name": "煤炭用量(千焦)"
  },
  {
    "tag": "steam_GJ",
    "name": "蒸汽用量(千焦)"
  }
]

const yearList = [
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
]

const companyList = [...esg_data.data.map(d => d.company).filter((item, i, ar) => ar.indexOf(item) === i)]

const Dashboard = ({type}) => {
  const [property, setProperty] = useState("revenue_kiloNTD")
  const [year, setYear] = useState("2021")
  const [industry, setIndustry] = useState("all")
  const [color, setColor] = useState("#228C22")
  const [company, setCompany] = useState(companyList[0])
  const [companyMode, setCompanyMode] = useState(false)
  const [combinedProperty, setCombinedProperty] = useState(combinedPropertyList[0])
  
  const [barData, setBarData] = useState(esg_data.data)
  const [pieData, setPieData] = useState(esg_data.data)

  useEffect(() => {
    if (type === "bar") {
      setColor("#228C22")
      return
    }
    if (type === "pie") {
      setColor("#36438B")
      return
    }
    if (type === "info") {
      setColor("#F0833C")
      return
    }
  }, [type])

  useEffect(() => {
    companyMode ? setBarData(esg_data.data.filter(d => d.company === company)) : setBarData(esg_data.data.filter(d => d.year === year))
    setPieData(esg_data.data.filter(d => d.company === company).filter(d => d.year === year))
  }, [companyMode, company, year, property, industry])

  return (
    <div className="flex flex-col items-center w-min h-min rounded-3xl bg-zinc-100">
    {
      type === "bar" && (
      <div className="flex flex-row w-full items-center justify-around p-2 mx-2 my-3">
        <select className="mx-2" name="color select" id="color select" onChange={(e) => {setCompanyMode(!companyMode)}}>
          <option>年度</option>
          <option>公司</option>
        </select>
        {
          !companyMode ? (
            <select className="mx-2" name="industry select" id="industry select" onChange={(e) => {setIndustry(e.target.value)}}>
              {
                industryList.map((ids, i) => {
                  return <option value={ids.tag} id={i} key={i}>{ids.name}</option>
                })
              }
            </select>
          ) : (
            <select className="mx-2" name="company select" id="company select" onChange={(e) => {setCompany(e.target.value)}}>
              {
                companyList.map((c, i) => {
                  return <option value={c} id={i} key={i}>{c}</option>
                })
              }
            </select>
          )
        }
        <select className="mx-2" name="property select" id="property select" onChange={(e) => {setProperty(e.target.value)}}>
          {
            propertyList.map((p, i) => {
              return <option value={p.tag} id={i} key={i}>{p.name}</option>
            })
          }
        </select>
        {
          !companyMode && (
            <select className="mx-2" name="year select" id="year select" onChange={(e) => {setYear(e.target.value)}}>
              {
                yearList.slice(0,-1).map((y, i) => {
                  return <option value={y} id={i} key={i}>{y}</option>
                })
              }
              {
                yearList.slice(-1).map((y, i) => {
                  return <option value={y} id={i} key={i} selected>{y}</option>
                })
              }
            </select>
          )
        }
      </div>
      )}
      {
      type === "pie" && (
      <div className="flex flex-row w-full items-center justify-around p-2 mx-2 my-3">
        <select className="mx-2" name="company select" id="company select" onChange={(e) => {setCompany(e.target.value)}}>
          {
            companyList.map((c, i) => {
              return <option value={c} id={i} key={i}>{c}</option>
            })
          }
        </select>
        <select className="mx-2" name="year select" id="year select" onChange={(e) => {setCombinedProperty(combinedPropertyList.filter((cp) => cp.tag === e.target.value)[0])}}>
          {
            combinedPropertyList.map((cp, i) => {
              return <option value={cp.tag} id={i} key={i}>{cp.name}</option>
            })
          }
        </select>
        <select className="mx-2" name="year select" id="year select" onChange={(e) => {setYear(e.target.value)}}>
          {
            yearList.slice(0,-1).map((y, i) => {
              return <option value={y} id={i} key={i}>{y}</option>
            })
          }
          {
            yearList.slice(-1).map((y, i) => {
              return <option value={y} id={i} key={i} selected>{y}</option>
            })
          }
        </select>
      </div>
      )
      }
      {
      type === "info" && (
      <div className="flex flex-row w-full items-center justify-around p-2 mx-2 my-3">
        <select className="mx-2" name="company select" id="company select" onChange={(e) => {setCompany(e.target.value)}}>
          {
            companyList.map((c, i) => {
              return <option value={c} id={i} key={i}>{c}</option>
            })
          }
        </select>
        <select className="mx-2" name="year select" id="year select" onChange={(e) => {setYear(e.target.value)}}>
          {
            yearList.slice(0,-1).map((y, i) => {
              return <option value={y} id={i} key={i}>{y}</option>
            })
          }
          {
            yearList.slice(-1).map((y, i) => {
              return <option value={y} id={i} key={i} selected>{y}</option>
            })
          }
        </select>
      </div>
      )
      }
      <div>
        {
          type === "bar" && (
            <BarModule _data={barData} property={property} industry={industry} color={color} companyMode={companyMode} />
          )
        }
        {
          type === "pie" && (
            <PieModule _data={pieData} combinedProperty={combinedProperty}/>
          )
        }
        {
          type === "info" && (
            <InfoModule _data={pieData} />
          )
        }
      </div>
    </div>
  )
}

export default Dashboard