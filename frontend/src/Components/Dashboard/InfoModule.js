import React from 'react'

const propertyTransformList = [
  {
    "tag": "industry",
    "name": "產業別"
  },
  {
    "tag": "company",
    "name": "公司名稱"
  },
  {
    "tag": "year",
    "name": "年度"
  },
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

const InfoModule = ({_data, big = false}) => {
  const width = big ? 720 : 500
  const height = 300;
  const padding = { top: 20, right: 20, bottom: 20, left: 20 };
  
  let data = []

  if (_data !== undefined) {
    let datum ={}
    Object.entries(_data[0]).map(([key, value]) => {
      const property = propertyTransformList.find(property => property.tag === key)
      if (property) {
        datum[property.name] = value

      }
      return null
    })
    data.push(datum)
  }

  return (
    <div className="overflow-auto" style={{ width: width, height: height, paddingTop: padding.top, paddingLeft: padding.left, paddingRight: padding.right, paddingBottom: padding.bottom }}>
      <div className="flex flex-col space-y-2">
        {
          Object.entries(data[0]).map(([key, value]) => {
            return (
              <div className="flex flex-row items-center justify-around mr-6" key={key}>
                <div className="flex flex-row items-center justify-end w-1/2">
                  <div className="font-medium	text-amber-600">
                    {`${key}`}
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start w-1/2 ml-6" key={key}>
                  <div className="text-lg">
                    {`${value}`}
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default InfoModule