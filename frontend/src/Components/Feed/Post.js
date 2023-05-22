import React from 'react'

const Post = ({title, photo, config, content}) => {
  return (
    <div className="flex flex-col items-start px-12">
      <div>
        {title}
      </div>
      <div>
        <img src={photo} alt="p" style={{ width: "500px", height: "auto" }} />
      </div>
      <div>
        {config}
      </div>
      <div>
        {
          content.map((item, index) => {
            return (
              <div key={index}>
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