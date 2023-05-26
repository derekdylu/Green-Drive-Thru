import React, { useState, useEffect } from "react"

import Module from "./Module.js";

import esg_data from "../../Data/data.json";

const colorList = [
  {
    "tag": "#228C22",
    "name": "綠色"
  },
  {
    "tag": "#F0833C",
    "name": "橘色"
  },
  {
    "tag": "#36438B",
    "name": "藍色"
  },
  {
    "tag": "#193632",
    "name": "深色"
  }
]

const industryList = [
  {
    "tag": "all",
    "name": "全部產業",
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
    "name": "總溫室氣體排放量(公噸)"
  },
  {
    "tag": "tdirect_emission_ton",
    "name": "直接溫室氣體排放量(公噸)"
  },
  {
    "tag": "intdirect_emission_ton",
    "name": "間接溫室氣體排放量(公噸)"
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
    "name": "液化石油氣用量(千焦)"
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

const Dashboard = ({index, deleteDashboard}) => {
  const [property, setProperty] = useState("revenue_kiloNTD")
  const [year, setYear] = useState("2021")
  const [industry, setIndustry] = useState("all")
  const [data, setData] = useState(esg_data.data)
  const [big, setBig] = useState(false)
  const [color, setColor] = useState("#228C22")
  const [company, setCompany] = useState(companyList[0])
  const [companyMode, setCompanyMode] = useState(false)

  useEffect(() => {
    companyMode ? setData(esg_data.data.filter(d => d.company === company)) : setData(esg_data.data.filter(d => d.year === year))
  }, [companyMode, company, year, property, industry])

  return (
    <div className="flex flex-col items-center w-min h-min rounded-3xl bg-zinc-100">
      <div className="flex flex-row w-full items-center justify-around mx-2 p-2 my-3">
        <select className="mx-2" name="color select" id="color select" onChange={(e) => {setCompanyMode(!companyMode)}}>
          <option>依年度</option>
          <option>依公司</option>
        </select>
        <select className="mx-2" name="color select" id="color select" onChange={(e) => {setColor(e.target.value)}}>
          {
            colorList.map((c, i) => {
              return <option value={c.tag} id={i}>{c.name}</option>
            })
          }
        </select>
        {
          !companyMode ? (
            <select className="mx-2" name="industry select" id="industry select" onChange={(e) => {setIndustry(e.target.value)}}>
              {
                industryList.map((ids, i) => {
                  return <option value={ids.tag} id={i}>{ids.name}</option>
                })
              }
            </select>
          ) : (
            <select className="mx-2" name="company select" id="company select" onChange={(e) => {setCompany(e.target.value)}}>
              {
                companyList.map((c, i) => {
                  return <option value={c} id={i}>{c}</option>
                })
              }
            </select>
          )
        }
        <select className="mx-2" name="property select" id="property select" onChange={(e) => {setProperty(e.target.value)}}>
          {
            propertyList.map((p, i) => {
              return <option value={p.tag} id={i}>{p.name}</option>
            })
          }
        </select>
        {
          !companyMode && (
            <select className="mx-2" name="year select" id="year select" onChange={(e) => {setYear(e.target.value)}}>
              {
                yearList.slice(0,-1).map((y, i) => {
                  return <option value={y} id={i}>{y}</option>
                })
              }
              {
                yearList.slice(-1).map((y, i) => {
                  return <option value={y} id={i} selected>{y}</option>
                })
              }
            </select>
          )
        }
        <button className="mx-2" onClick={() => {setBig(!big)}}>
        {
          big ? "◀" : "▶"
        }
        </button>
      </div>
      <div className="">
        <Module _data={data} property={property} industry={industry} big={big} color={color} companyMode={companyMode} />
      </div>
    </div>
  )
}

export default Dashboard