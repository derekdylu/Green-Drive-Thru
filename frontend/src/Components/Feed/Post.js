import React from 'react'

const Post = ({title, photo, config, content}) => {
  return (
    <div className="flex flex-col items-start space-y-6">
      <div className="text-2xl font-bold">
        {title}
      </div>
      <div className="flex-grow">
        <img src={photo} alt="p" style={{ width: "100%", height: "auto" }} />
      </div>
      <div className="text-sm">
        {config}
      </div>
      <div className="flex flex-col items-start space-y-3">
        {
          content.map((item, index) => {
            return (
              <div key={index} className="text-base">
                {item}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Post